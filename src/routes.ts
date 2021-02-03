import { CardDataType } from './types/CardDataType'

type CardID = CardDataType['id']

export const routes = {
  top: '/',
  search: '/search',
  cards: '/cards',
  cardsDetail: (cardId: CardID) => `/cards/${cardId}`,
  skills: '/skills',
  // skillsDetail: (skillId: string) => `/cards/${skillId}`,
  skillsDetail: '/skills/show',
  unitSkills: '/unit-skills',
  unitSkillsDetail: '/unit-skills/show'
}