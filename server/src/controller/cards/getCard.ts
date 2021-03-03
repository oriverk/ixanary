import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Card } from '../../types/prisma'

const prisma = new PrismaClient()

// GET:/cards/:id
export const getCard = async (req: FastifyRequest<{ Params: Pick<Card, 'id'> }>, res: FastifyReply) => {
  const { id } = req.params

  if (typeof Number(id) !== 'number') {
    throw new Error('req.params.id is not a number.')
  }

  const card = await prisma.card.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      skill: true,
      unitSkill: true
    }
  })
  res.send(card)
}