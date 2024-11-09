import type { IUser } from '@pnpm-nx-monorepo/models'
import express from 'express'

const app = express()

const user: IUser = {
  id: 'uid',
  name: 'Testing',
  email: 'test@test.com',
}

app.get('/', (req, res) => {
  res.send(`Express API, ${JSON.stringify(user)}`)
})

const port = Number.parseInt(process.env.PORT ?? '3000')

const host = process.env.HOST ?? '0.0.0.0'

app.listen(port, host, () => {
  console.log(`Express API listening at http://${host}:${port}`)
})
