import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { UnitSkill } from '../../types/prisma'

const prisma = new PrismaClient()

// DELETE:/unitSkill/:name
export const deleteUnitSkill = async (req: FastifyRequest<{ Params: Pick<UnitSkill, 'name'> }>, res: FastifyReply) => {
  const { name } = req.params
  if (!name) {
    throw new Error('The key "name" is required but missing.')
  }

  const unitSkill = await prisma.unitSkill.delete({
    where: { name: decodeURI(name) }
  })
  res.send(unitSkill)
}