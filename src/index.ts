import * as fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { resolve } from 'path'

const prisma = new PrismaClient()
const app: fastify.FastifyInstance = fastify.fastify({ logger: true })

app.register(require('fastify-formbody'))

app.get('/', async (_: fastify.FastifyRequest, __: fastify.FastifyReply) => {
  return { hello: 'world' }
})

app.get('/create', async (req, res) => {
  await prisma.card.create({
    data: {
      id: 1001,
      name: '織田信長',
      rarity: '天',
      jobType: '将',
      illustrator: '直良有祐',
      cost: 3.5,
      capacity: 3500,
      yari: 'a',
      kiba: 'a',
      yumi: 'b',
      heiki: 's',
      attack: 745,
      defence: 710,
      intelligence: 465,
      attackGrowth: 19,
      defenceGrowth: 19,
      intGrowth: 2.5,
    }
  })
})

// app.get(`/user`, async (_: FastifyRequest, res: FastifyReply) => {
//   const allUsers = await prisma.user.findMany()
//   res.send(allUsers)
// })

app.get('/card', async (_req, res) => {
  const allCards = await prisma.card.findMany()
  res.send(allCards)
})

interface Params {
  id?: string
}

app.get(`/card/:id`, async (req: fastify.FastifyRequest, res: fastify.FastifyReply) => {
  // @ts-ignore
  const { id } = req.params
  const card = await prisma.card.findUnique({
    where: {
      id: parseInt(id, 10)
    }
  })
  res.send(card)
})

const start = async () => {
  try {
    await app.listen(3000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()

// async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: 'hoge',
  //     email: 'hoge@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // })

  // const allUsers = await prisma.user.findMany({
    // include: {
    //   posts: true,
    //   profile: true,
    // },
  // })
  // console.dir(allUsers, { depth: null })

  // const post = await prisma.post.update({
  //   where: { id: 2 },
  //   data: { published: true },
  // })
  // console.log(post)
// }

// main()
//   .catch(e => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect
//   })