import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Card } from '../../types/prisma'

const prisma = new PrismaClient()

interface GetCardPrams {
  id: Pick<Card, 'id'>
}

// GET:/cards/:id
export const getCard = async (req: FastifyRequest<{ Params: GetCardPrams }>, res: FastifyReply) => {
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