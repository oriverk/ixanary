import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Skill } from '../../types/prisma'

const prisma = new PrismaClient()

// GET:/skills/:name
export const getSkill = async (req: FastifyRequest<{ Params: Pick<Skill, 'name'> }>, res: FastifyReply) => {
  const { name } = req.params

  if (!name) {
    throw new Error('The Key "name" is missing. This is required.')
  }

  const skill = await prisma.skill.findUnique({
    where: {
      name: decodeURI(name)
    },
  })
  res.send(skill)
}