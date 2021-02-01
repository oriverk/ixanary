export const routes = {
  top: '/',
  cards: '/cards',
  cardsDetail: (cardId: string | number) => `/cards/${cardId}`,
  skills: '/skills',
  // skillsDetail: (skillId: string) => `/cards/${skillId}`,
  skillsDetail: '/skills/show',
  unitSkills: '/unit-skills',
  unitSkillsDetail: '/unit-skills/show'
}