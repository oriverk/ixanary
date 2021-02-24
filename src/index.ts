import fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app: FastifyInstance = fastify({ logger: true })

app.register(require('fastify-formbody'))

app.get('/', async (_: FastifyRequest, __: FastifyReply) => {
  return { hello: 'world' }
})

app.get(`/user`, async (_: FastifyRequest, res: FastifyReply) => {
  const allUsers = await prisma.user.findMany()
  res.send(allUsers)
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