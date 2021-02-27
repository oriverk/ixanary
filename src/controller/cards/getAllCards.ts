import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET:/cards
export const getAllCards = async (_req: FastifyRequest, res: FastifyReply) => {
  const cards = await prisma.card.findMany({
    orderBy: {
      id: "asc"
    },
    include: {
      skill: true,
      unitSkill: true
    }
  })
  res.send(cards)
}