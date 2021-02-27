import * as fastify from 'fastify'
import { getAllCards, getCard, createCard, updateCard, deleteCard } from "./controller/cards"

const app: fastify.FastifyInstance = fastify.fastify({ logger: true })

app.register(require('fastify-formbody'))

app.get('/', async (_req: fastify.FastifyRequest, _res: fastify.FastifyReply) => {
  return { hello: 'world' }
})

// cards
app.get('/cards', getAllCards)
app.get('/cards/:id', getCard)
app.post('/cards', createCard)
app.put('/cards/:id', updateCard)
app.delete('/cards/:id', deleteCard)

const start = async () => {
  try {
    await app.listen(3000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()