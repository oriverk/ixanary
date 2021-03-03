import { CardDataType } from '../types/CardDataType'

export const Cards: CardDataType[] = [
  {
    id: '1001',
    name: '織田信長',
    rarity: '天',
    jobType: '将',
    illustrator: '',
    cost: 3.5,
    capacity: 3500,
    yari: 'a',
    kiba: 'a',
    yumi: 'b',
    heiki: 's',
    attack: 745,
    defence: 710,
    intelligence: 465,
    attackGrowth: 19,
    defenceGrowth: 19,
    intGrowth: 2.5,
    skill: {
      type: '攻',
      name: '三段撃 激烈'
    },
    unitSkill:['']
  },
  {
    id: '2001',
    jobType: '将',
    rarity: '極',
    name: '本多忠勝',
    cost: 3.0,
    capacity: 2790,
    yari: 'a',
    yumi: 'b',
    kiba: 's',
    heiki: 'c',
    attack: 745,
    defence: 725,
    intelligence: 385,
    attackGrowth: 18,
    defenceGrowth: 17,
    intGrowth: 2.0,
    skill: {
      type: '攻',
      name: '剛勇無双'
    },
    unitSkill: ['葵の勇将', '東西無双']
  },
  {
    id: '3001',
    jobType: '剣',
    rarity: '特',
    name: '上泉信綱',
    cost: 2.0,
    capacity: 820,
    yari: 's',
    yumi: 'c',
    kiba: 'c',
    heiki: 'f',
    attack: 950,
    defence: 950,
    intelligence: 400,
    attackGrowth: 50,
    defenceGrowth: 50,
    intGrowth: 1.5,
    skill: {
      type: '攻',
      name: '新陰流'
    },
    unitSkill: ['剣の教え']
  },
  {
    id: '4001',
    jobType: '将',
    rarity: '上',
    name: '武田晴信',
    cost: 3.0,
    capacity: 2370,
    yari: 'b',
    yumi: 'c',
    kiba: 'b',
    heiki: 'd',
    attack: 625,
    defence: 625,
    intelligence: 425,
    attackGrowth: 16,
    defenceGrowth: 16,
    intGrowth: 2.0,
    skill: {
      type: '攻',
      name: '騎馬隊挟撃'
    },
    unitSkill: ['']
  },
]