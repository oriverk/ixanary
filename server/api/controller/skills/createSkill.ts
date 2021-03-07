import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Skill } from '../../types/prisma'

const prisma = new PrismaClient()

// POST:/skills
export const createSkill = async (req: FastifyRequest<{ Body: Omit<Skill, 'id'> }>, res: FastifyReply) => {
  const { name } = req.body

  if (!name) {
    throw new Error('The key "name" is required but missing.')
  }

  const skill = await prisma.skill.create({
    data: {
      ...req.body
    }
  })

  res.send(skill)
}
