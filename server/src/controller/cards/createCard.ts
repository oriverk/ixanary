import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Card } from '../../types/prisma'

const prisma = new PrismaClient()

interface CreateCardBody extends Card {
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

// POST:/cards
export const createCard = async (req: FastifyRequest<{ Body: CreateCardBody }>, res: FastifyReply) => {
  const {
    id, name, rarity, jobType, illustrator, cost, capacity, yari, kiba, yumi, heiki, attack, defence, intelligence, attackGrowth, defenceGrowth, intGrowth,
    skillName, skillRarity, skillType, skillTarget, skillContent, skillContent10, skillExtra, skillFirst, skillSecond, skillThird,
    unitSkillName, unitSkillTarget, unitSkillContent, unitSkillContent10
  } = req.body

  if (!id) {
    throw new Error('key "id" for new card number is missing. this is required.')
  }

  if (typeof id !== 'number') {
    throw new Error('key "id" is not number type.')
  }

  let card = await prisma.card.create({
    data: {
      id, name, rarity, jobType, illustrator, cost, capacity, yari, kiba, yumi, heiki,
      attack, defence, intelligence, attackGrowth, defenceGrowth, intGrowth
    }
  })

  if (typeof skillName === 'string') {
    card = await prisma.card.update({
      where: {
        id: card.id
      },
      data: {
        skill: {
          connectOrCreate: {
            where: { name: skillName },
            create: {
              name: skillName,
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

  if (unitSkillName) {
    card = await prisma.card.update({
      where: {
        id: card.id
      },
      data: {
        unitSkill: {
          connectOrCreate: {
            where: { name: unitSkillName, },
            create: {
              name: unitSkillName,
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