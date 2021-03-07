import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Skill } from '../../types/prisma'

const prisma = new PrismaClient()

// PUT:/skills/:name
export const updateUnitSkill = async (req: FastifyRequest<{ Params: Pick<Skill, 'name'>, Body: Omit<Skill, 'id'> }>, res: FastifyReply) => {
  const { name } = req.params
  if (!name) {
    throw new Error('The key "name" is required but missing.')
  }

  const { target, content, content10 } = req.body
  const newName = req.body.name

  const skill = await prisma.skill.update({
    where: { name: decodeURI(name) },
    data: {
      name: newName !== null ? newName : undefined,
      target: target !== null ? target : undefined,
      content: content !== null ? content : undefined,
      content10: content10 !== null ? content10 : undefined,
    }
  })
  res.send(skill)
}