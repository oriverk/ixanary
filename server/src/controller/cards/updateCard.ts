import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Card } from '../../types/prisma'

const prisma = new PrismaClient()

interface UpdateCardParams {
  id: Pick<Card, 'id'>
}

interface UpdateCardBody extends Omit<Card, 'id'> {
  newId?: number
  newSkillName?: string
  newUnitSkillName?: string

  skillName?: string
  skillRarity?: string
  skillType?: string
  skillTarget?: string
  skillContent: string[]
  skillContent10: string[]
  skillExtra?: string
  skillFirst: string[]
  skillSecond: string[]
  skillThird: string[]

  unitSkillName?: string
  unitSkillTarget?: string
  unitSkillContent: string[]
  unitSkillContent10: string[]
}

// PUT:/cards/:id
export const updateCard = async (req: FastifyRequest<{ Params: UpdateCardParams, Body: UpdateCardBody }>, res: FastifyReply) => {
  const { id } = req.params

  if (typeof Number(id) !== 'number') {
    throw new Error('req.params.id is not a number.')
  }
  if (!id) {
    throw new Error('key "id" for new card number is missing. this is required.')
  }

  const {
    newId, newSkillName, newUnitSkillName,
    name, rarity, jobType, illustrator, cost, capacity, yari, kiba, yumi, heiki, attack, defence, intelligence, attackGrowth, defenceGrowth, intGrowth,
    skillName, skillRarity, skillType, skillTarget, skillContent, skillContent10, skillExtra, skillFirst, skillSecond, skillThird,
    unitSkillName, unitSkillTarget, unitSkillContent, unitSkillContent10,
  } = req.body

  
  let card = await prisma.card.update({
    where: { id: Number(id) },
    data: {
      id: newId !== null ? newId : undefined,
      name: name !== null ? name : undefined,
      rarity: rarity !== null ? rarity : undefined,
      jobType: jobType !== null ? jobType : undefined,
      illustrator: illustrator !== null ? illustrator : undefined,
      cost: cost !== null ? cost : undefined,
      capacity: capacity !== null ? capacity : undefined,
      yari: yari !== null ? yari : undefined,
      kiba: kiba !== null ? kiba : undefined,
      yumi: yumi !== null ? yumi : undefined,
      heiki: heiki !== null ? heiki : undefined,
      attack: attack !== null ? attack : undefined,
      defence: defence !== null ? defence : undefined,
      intelligence: intelligence !== null ? intelligence : undefined,
      attackGrowth: attackGrowth !== null ? attackGrowth : undefined,
      defenceGrowth: defenceGrowth !== null ? defenceGrowth : undefined,
      intGrowth: intGrowth !== null ? intGrowth : undefined
    }
  })



  if (skillName && newSkillName) {
    card = await prisma.card.update({
      where: {
        id: card.id
      },
      data: {
        skill: {
          connectOrCreate: {
            where: { name: skillName },
            create: {
              name: newSkillName,
              rarity: skillRarity,
              type: skillType,
              target: skillTarget,
              content: skillContent,
              content10: skillContent10,
              extra: skillExtra,
              first: skillFirst,
              second: skillSecond,
              third: skillThird
            }
          }
        }
      }
    })
  }

  if (unitSkillName && newUnitSkillName) {
    card = await prisma.card.update({
      where: {
        id: card.id
      },
      data: {
        unitSkill: {
          connectOrCreate: {
            where: { name: unitSkillName, },
            create: {
              name: newUnitSkillName,
              target: unitSkillTarget,
              content: unitSkillContent,
              content10: unitSkillContent10
            }
          }
        }
      }
    })
  }

  res.send(
    await prisma.card.findUnique({
      where: { id: card.id },
      include: {
        skill: true,
        unitSkill: true
      }
    })
  )
}