import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Skill } from '../../types/prisma'

const prisma = new PrismaClient()

// PUT:/skills
export const updateSkill = async (req: FastifyRequest<{ Params: Pick<Skill, 'name'>, Body: Omit<Skill, 'id'> }>, res: FastifyReply) => {
  const { name } = req.params
  if (!name) {
    throw new Error('The key "name" is required but missing.')
  }

  const { type, rarity, description } = req.body
  const newName = req.body.name

  console.log('undecoded is ', name)
  console.log('decoded is', decodeURI(name))

  const skill = await prisma.skill.update({
    where: { name: decodeURIComponent(name) },
    data: {
      name: newName !== null ? newName : undefined,
      type: type !== null ? type : undefined,
      rarity: rarity !== null ? rarity : undefined,
      description: description !== null ? description : undefined
    }
  })
  res.send(skill)
  return { hello: 'world' }
}