import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono().basePath('/api')

app.get('/', (context) => {
  return context.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}/api`)
})
