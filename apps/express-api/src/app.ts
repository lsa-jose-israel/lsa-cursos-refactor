import type { Request as ExRequest, Response as ExResponse } from 'express'
import express, { json, urlencoded } from 'express'
import { generateHTML, serve } from 'swagger-ui-express'
import { RegisterRoutes } from '../generated/routes'

export const app = express()

app.use(
  urlencoded({
    extended: true,
  }),
)
app.use(json())

app.use('/docs', serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(generateHTML(await import('../generated/swagger.json')))
})

RegisterRoutes(app)
