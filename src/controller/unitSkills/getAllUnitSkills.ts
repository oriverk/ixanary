import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET:/cards
export const getAllUnitSkills = async (_req: FastifyRequest, res: FastifyReply) => {
  const skills = await prisma.unitSkill.findMany({
    orderBy: {
      id: "asc"
    },
    include: {
      cards: {
        select: {
          id: true,
          name: true
        }
      }
    }
  })
  res.send(skills)
}