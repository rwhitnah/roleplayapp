import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Layout } from './frontend/layout.js'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()


app.use('*', serveStatic({ root: './public' }))

app.get('/', (c) => {
  console.log('main')
  return c.html(<Layout>Hello World</Layout>)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
