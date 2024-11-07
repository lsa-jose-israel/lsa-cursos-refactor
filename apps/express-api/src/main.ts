import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send("Express API")
})

const port = parseInt(process.env.PORT ?? '3000')
const host = process.env.HOST ?? '0.0.0.0'

app.listen(port, host, () => {
  console.log(`Express API listening at http://${host}:${port}`)
})
