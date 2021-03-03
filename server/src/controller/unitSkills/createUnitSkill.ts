import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { UnitSkill } from '../../types/prisma'

const prisma = new PrismaClient()

// POST:/unitSkills
export const createUnitSkill = async (req: FastifyRequest<{ Body: Omit<UnitSkill, 'id'> }>, res: FastifyReply) => {
  const { name, type, description } = req.body

  if (!name) {
    throw new Error('The key "name" is required but missing.')
  }

  const unitSkill = await prisma.unitSkill.create({
    data: {
      name, type, description
    }
  })

  res.send(unitSkill)
}
