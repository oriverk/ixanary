import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { UnitSkill } from '../../types/prisma'

const prisma = new PrismaClient()

// GET:/unitSkills/:name
export const getUnitSkill = async (req: FastifyRequest<{ Params: Pick<UnitSkill, 'name'> }>, res: FastifyReply) => {
  const { name } = req.params

  if (!name) {
    throw new Error('The Key "name" is missing. This is required.')
  }

  const unitSkill = await prisma.unitSkill.findUnique({
    where: {
      name: decodeURI(name)
    },
  })
  res.send(unitSkill)
}