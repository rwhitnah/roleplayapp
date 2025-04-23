import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Layout } from './frontend/layout.js'
import { serveStatic } from '@hono/node-server/serve-static'
import { sign, verify } from 'hono/jwt'
import { getSignedCookie, setSignedCookie, deleteCookie } from 'hono/cookie'
import * as crypto from 'crypto';
import { PrismaClient, Role } from '../generated/prisma/index.js'
import { Login } from './frontend/login.js'
import { Signup } from './frontend/signup.js'
import { Reset } from './frontend/reset.js'

const prisma = new PrismaClient()

type Variables = {
  user: any
}

const app = new Hono<{ Variables: Variables }>()

app.use('*', serveStatic({ root: './public' }))

app.use('*', async (c, next) => {
  const userCookie = await getSignedCookie(c, 'mySecretKey', 'session');
  if (userCookie) {
    const user = await verify(userCookie, 'mySecretKey')
    c.set('user', user);
    console.log(c.var.user)
  }

  await next();
})

const secured = async (c: any, next: any) => {
  if (c.var.user) {
    await next()
  } else {
    return c.redirect('/')
  }
}

app.get('/login', (c) => {
  if (c.var.user) {
    return c.redirect('/')
  }
  return c.html(<Login user={c.var.user}/>)
})

app.post('/login', async (c) => {
  const body: {email: string, password: string} = await c.req.parseBody()

  const userRecord = await prisma.user.findUnique({
    where: {
      email: body.email.toLowerCase()
    }
  });
  if (!userRecord) {
    console.log(`LOGIN: User not found: ${body.email}`)
    return c.redirect('/login')
  }

  const hashedPassword =  crypto.pbkdf2Sync(body.password, userRecord.salt, 10000, 32, 'sha256')
  if (!crypto.timingSafeEqual(userRecord.password, hashedPassword)) {
    console.log(`LOGIN: Invalid password: ${body.email}`)
    return c.redirect('/login')
  }

  const payload = {
    id: userRecord.id,
    user: `${userRecord.firstname} ${userRecord.lastname}`,
    email: userRecord.email,
    roles: userRecord.roles.join(','),
  }

  const secret = 'mySecretKey';
  let date = new Date();
  date.setDate(date.getDate() + 2 * 7)
  await setSignedCookie(c, 'session', await sign(payload, secret), secret, {
    path: '/',
    secure: true,
    httpOnly: true,
    maxAge: 1000,
    expires: date,
    sameSite: 'Strict',
  });
  return c.redirect('/')
});

app.get('/signup', (c) => {
  if (c.var.user) {
    return c.redirect('/')
  }
  return c.html(<Signup user={c.var.user}/>)
})

app.post('/signup', async (c) => {
  const body: {email: string, firstname: string, lastname: string, password: string} = await c.req.parseBody()

  const userRecord = await prisma.user.findUnique({
    where: {
      email: body.email.toLowerCase()
    }
  });

  if (userRecord) {
    console.log(`LOGIN: User cannot sign up twice: ${body.email}`)
    return c.redirect('/login')
  }

  const salt = crypto.randomBytes(16);
  const hashedPassword = crypto.pbkdf2Sync(body.password, salt, 10000, 32, 'sha256')

  const user = await prisma.user.create({
    data: {
      email: body.email.toLowerCase(),
      firstname: body.firstname,
      lastname: body.lastname,
      password: hashedPassword,
      salt: salt,
      roles: [Role.PLAYER]
    }
  })

  const payload = {
    id: user.id,
    user: `${user.firstname} ${user.lastname}`,
    email: user.email,
    roles: user.roles.join(','),
  }

  //TODO update with env var
  const secret = 'mySecretKey';
  let date = new Date();
  date.setDate(date.getDate() + 2 * 7)
  await setSignedCookie(c, 'session', await sign(payload, secret), secret, {
    path: '/',
    secure: true,
    httpOnly: true,
    maxAge: 1000,
    expires: date,
    sameSite: 'Strict',
  });
  return c.redirect('/')
})


app.get('/logout', (c) => {
  deleteCookie(c, 'session')
  return c.redirect('/')
})

app.get('/reset', secured)
app.get('/reset', (c) => {
  return c.html(<Reset user={c.var.user}/>)
})

app.post('/reset', async (c) => {
  const body: {username: string, password: string} = await c.req.parseBody()
  if (c.var.user && c.var.user.user) {
    const editUser = await prisma.user.findUnique({where: {email: c.var.user.email}})
    if (!editUser) {
      return c.redirect('/');
    }
    const hashedPassword = crypto.pbkdf2Sync(body.password, editUser.salt, 10000, 32, 'sha256')
    const updated = await prisma.user.update({
      where: {
        id: editUser.id
      },
      data: {
        password: hashedPassword,
      }
    });
  }
  return c.redirect('/')
});


app.get('/', (c) => {
  console.log('main')
  return c.html(<Layout user={c.var.user}>Hello World</Layout>)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
