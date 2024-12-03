import http from 'node:http'
import { app } from './app'

const port = Number.parseInt(process.env.PORT ?? '3000')
const host = process.env.HOST ?? '0.0.0.0'

const server = http.createServer(app)

server.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`)
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
