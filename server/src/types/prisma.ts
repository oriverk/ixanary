import { Prisma } from '@prisma/client'

type Card = Prisma.CardGetPayload<{}>
type Skill = Prisma.SkillGetPayload<{}>
type UnitSkill = Prisma.UnitSkillGetPayload<{}>

type CardWithAll = Prisma.CardGetPayload<{
  include: {
    skill: true,
    unitSkill: true
  }
}>

export { Card, Skill, UnitSkill, CardWithAll }
