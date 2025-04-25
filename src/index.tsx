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
import { NewCharacter } from './frontend/characters/new.js'
import { ShowCharacter } from './frontend/characters/show.js'
import { allSkills } from './modules/alliance2_1/resources/skill/index.js'

const prisma = new PrismaClient()

type Variables = {
  user: any,
  characters: {
    name: string,
    id: number
  }[]
}

const app = new Hono<{ Variables: Variables }>()

app.use('*', serveStatic({ root: './public' }))

app.use('*', async (c, next) => {
  const userCookie = await getSignedCookie(c, 'mySecretKey', 'session');
  if (userCookie) {
    const user = await verify(userCookie, 'mySecretKey')
    c.set('user', user);

    const characters = await prisma.character.findMany({
      where: {
        userId: Number(user.id)
      }
    })

    c.set('characters', characters.map((char) => {return {name: char.name, id: char.id}}))
    console.log(c.var.user)
    console.log(c.var.characters)
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
  return c.html(<Login user={c.var.user} characters={c.var.characters}/>)
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
  return c.html(<Signup user={c.var.user} characters={c.var.characters}/>)
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
  return c.html(<Reset user={c.var.user} characters={c.var.characters}/>)
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

app.get('/characters/new', secured)
app.get('/characters/new', async (c) => {
  const chapters = await prisma.chapter.findMany({})
  console.log(chapters)
  return c.html(<NewCharacter user={c.var.user} characters={c.var.characters} chapters={chapters}/>)
})

app.post('/characters', secured)
app.post('/characters', async (c) => {
  const body: {name: string, chapter: string, characterClass: string, race: string} = await c.req.parseBody()

  const character = await prisma.character.create({
    data: {
      user: {connect: {id: c.var.user.id}},
      chapter: {connect: {id:Number (body.chapter)}},
      raceName: body.race,
      characterClass: body.characterClass,
      name: body.name,
    }
  })

  return c.redirect(`/characters/${character.id}`)
})

app.get('/characters/:id', secured)
app.get('/characters/:id', async (c) => {
  const character = await prisma.character.findFirst({
    where: {
      id: parseInt(c.req.param('id')),
    },
    include: {
      skill: true
    }
  })



  if (character && character.userId === c.var.user.id) {
    const xpBySkillCategory: any = {}
    const usedXP = character.skill.reduce((sum,s) => {
      const t = allSkills.find((v) => v.skillName === s.name)
      let cost = 0
      for (let i=0; i < s.ranks; i++) {
        if (t) {
          cost += t.costForCharacterAtRank(character, i)
        }
      }

      if (t && t.skillCategory) {
        if (xpBySkillCategory[t.skillCategory]) {
          xpBySkillCategory[t.skillCategory] += cost
        } else {
          xpBySkillCategory[t.skillCategory] = cost
        }
      }

      return sum + cost 
    },0)

    console.log(Object.keys(xpBySkillCategory))
  
    return c.html(<ShowCharacter user={c.var.user} characters={c.var.characters} character={character} totalXp={character.startingXp} usedXp={usedXP} categoryXP={xpBySkillCategory}/>)
  } else {
    return c.redirect('/')
  }
})

app.get('/characters/:id/buy/:skillName', secured)
app.get('/characters/:id/buy/:skillName', async (c) => {
  const skill = allSkills.find((s) => s.skillName === c.req.param('skillName'))
  const character = await prisma.character.findFirst({
    where: {
      id: parseInt(c.req.param('id')),
    },
    include: {
      skill: true
    }
  })
 
  if (character && skill && character.userId === c.var.user.id && skill.canBuyForCharacter(character)) {
    const charskill = character.skill.find((s) => s.name === skill.skillName)
    console.log(charskill)
    if (charskill) {
      await prisma.skill.update({
        where: {
          id: charskill.id
        },
        data: { 
          ranks: charskill.ranks + 1
        }
      })
    } else {
      await prisma.skill.create({
        data: {
          character: { connect: { id: character.id}},
          name: skill.skillName,
          ranks: 1
        }
      })
    }
    return c.redirect(`/characters/${character.id}`)
  } else {
    return character ? c.redirect(`/characters/${character.id}`) : c.redirect('/')
  }
})

app.get('/', (c) => {
  console.log('main')
  return c.html(<Layout user={c.var.user} characters={c.var.characters}>Hello World</Layout>)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
