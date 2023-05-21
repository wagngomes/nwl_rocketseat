import 'dotenv/config'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'
const app = fastify()

app.register(memoriesRoutes)
app.register(authRoutes)

app.register(cors, {
  origin: true, // todas a UrLs de frontend poderão acessar o nosso backend
})
app.register(jwt, {
  secret: 'spacetime',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
