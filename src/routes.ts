export const routes = {
  top: '/',
  search: '/search',
  cards: '/cards',
  cardsDetail: (cardId: string | number) => `/cards/${cardId}`,
  skills: '/skills',
  // skillsDetail: (skillId: string) => `/cards/${skillId}`,
  skillsDetail: '/skills/show',
  unitSkills: '/unit-skills',
  unitSkillsDetail: '/unit-skills/show'
}