import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET:/cards
export const getAllUnitSkills = async (_req: FastifyRequest, res: FastifyReply) => {
  const skills = await prisma.unitSkill.findMany({
    orderBy: {
      id: "asc"
    }
  })
  res.send(skills)
}