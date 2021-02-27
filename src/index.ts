import * as fastify from 'fastify'

import { getAllCards, getCard, createCard, updateCard, deleteCard } from "./controller/cards"
import { getAllSkills, getSkill, createSkill, updateSkill, deleteSkill } from './controller/skills'

const app: fastify.FastifyInstance = fastify.fastify({
  logger: true,
  ignoreTrailingSlash: true
})

app.register(require('fastify-formbody'))

app.get('/', async (_req: fastify.FastifyRequest, _res: fastify.FastifyReply) => {
  return { hello: 'world' }
})

const cards = '/cards'
// cards
app.get(cards, getAllCards)
app.get(`${cards}/:id`, getCard)
app.post(cards, createCard)
app.put(`${cards}/:id`, updateCard)
app.delete(`${cards}/:id`, deleteCard)

const skills = '/skills'
// skills
app.get(skills, getAllSkills)
app.get(`${skills}/:name`, getSkill)
app.post(skills, createSkill)
app.put(`${skills}/:name`, updateSkill)
app.delete(`${skills}/:name`, deleteSkill)


const start = async () => {
  try {
    await app.listen(3000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()