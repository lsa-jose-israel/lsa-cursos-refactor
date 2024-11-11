import type { IUser } from '@pnpm-nx-monorepo/models'
import http from 'node:http'
import express from 'express'

const port = Number.parseInt(process.env.PORT ?? '3000')
const host = process.env.HOST ?? '0.0.0.0'
const user: IUser = {
  id: 'uid',
  name: 'Testing',
  email: 'test@test.com',
}

const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
  res.send(`Express API, ${JSON.stringify(user)}`)
})

server.listen(port, host, () => {
  console.log(`Express API listening at http://${host}:${port}`)
})

function gracefulShutdown() {
  console.log('Received termination signal. Shutting down gracefully...')
  server.close((err) => {
    if (err) {
      console.error('Error during shutdown', err)
      process.exit(1)
    }
    else {
      console.log('Server shut down gracefully.')
      process.exit(0)
    }
  })
  setTimeout(() => {
    console.error('Forcefully shutting down after 10 seconds...')
    process.exit(1)
  }, 10000)
}

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)
process.on('SIGUSR2', gracefulShutdown)
