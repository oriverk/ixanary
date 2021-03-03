type SkillDataType = {
  name: string,
  rarity?: 'sss' | 'ss' | 's' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f',
  type: "攻" | "防" | "特",
  description?: string
}

export type CardDataType = {
  id: string, // i prefer string but this id will be used in params so...
  name: string,
  hiragana?: string,
  rarity: '天' | '極' | '特' | '上' | '序' | '祝' | '童' | '雅' | '化' ,
  jobType: '覇' | '将' | '姫' | '剣' | '文' | '童',
  illustrator?: string, // string | undefined
  description?: string,
  cost: number,
  capacity: number,
  yari: 'sss' | 'ss' | 's' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f',
  kiba: 'sss' | 'ss' | 's' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f',
  yumi: 'sss' | 'ss' | 's' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f',
  heiki: 'sss' | 'ss' | 's' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f',
  attack: number,
  defence: number,
  intelligence: number,
  attackGrowth: number,
  defenceGrowth: number,
  intGrowth: number,
  skill: SkillDataType,
  unitSkill: string[]
}