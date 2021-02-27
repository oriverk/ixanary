import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Card } from '../../types/prisma'

const prisma = new PrismaClient()

interface DeleteCardParams {
  id: Pick<Card, 'id'>
}

// DELETE:/cards/:id
export const deleteCard = async (req: FastifyRequest<{ Params: DeleteCardParams }>, res: FastifyReply) => {
  const { id } = req.params

  if (typeof Number(id) !== 'number') {
    throw new Error('req.params.id is not a number.')
  }

  const card = await prisma.card.delete({
    where: { id: Number(id) },
  })
  res.send(card)
}