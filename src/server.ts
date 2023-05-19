import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
const app = fastify()

app.register(memoriesRoutes)
app.register(cors, {
  origin: true, // todas a UrLs de frontend poderão acessar o nosso backend
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
