import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

import { Card } from '../../types/prisma'

const prisma = new PrismaClient()

interface CreateCardBody extends Card {
  skillName?: string,
  skillRarity?: string,
  skillType?: string,
  skillDescription?: string,

  unitSkillName?: string,
  unitSkillType?: string,
  unitSkillDescription?: string
}

// POST:/cards
export const createCard = async (req: FastifyRequest<{ Body: CreateCardBody }>, res: FastifyReply) => {
  const {
    id, name, rarity, jobType, illustrator, cost, capacity, yari, kiba, yumi, heiki, attack, defence, intelligence, attackGrowth, defenceGrowth, intGrowth,
    skillName, skillRarity, skillType, skillDescription,
    unitSkillName, unitSkillType, unitSkillDescription
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

  if (skillName) {
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
              type: skillType,
              rarity: skillRarity,
              description: skillDescription
            }
          }
        }
      }
    })
  }

  if (unitSkillName && unitSkillType) {
    card = await prisma.card.update({
      where: {
        id: card.id
      },
      data: {
        unitSkill: {
          connectOrCreate: {
            where: {
              unitSkillNameWithType: {
                name: unitSkillName,
                type: unitSkillType
              }
            },
            create: {
              name: unitSkillName,
              type: unitSkillType,
              description: unitSkillDescription
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