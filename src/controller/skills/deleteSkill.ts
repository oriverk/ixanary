import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Skill } from '../../types/prisma'

const prisma = new PrismaClient()

// DELETE:/skill/:name
export const deleteSkill = async (req: FastifyRequest<{ Params: Pick<Skill, 'name'> }>, res: FastifyReply) => {
  const { name } = req.params
  if (!name) {
    throw new Error('The key "name" is required but missing.')
  }

  const skill = await prisma.skill.delete({
    where: { name: decodeURI(name) }
  })
  res.send(skill)
}