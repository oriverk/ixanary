export type CardRarelityType = '天' | '極' | '特' | '上' | '序' | '祝' | '童' | '雅' | '化' 
export type CardJobType = '覇' | '将' | '姫' | '剣' | '文' | '童'
export type SolParamType = 'sss' | 'ss' | 's' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
type SkillRarelityType = 'sss' | 'ss' | 's' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f'

export type CardDataType = {
  id: string, // i prefer string but this id will be used in params so...
  name: string,
  hiragana?: string,
  rarelity: CardRarelityType,
  jobType: CardJobType,
  illustrator?: string, // string | undefined
  description?: string,
  cost: number,
  capacity: number,
  yari: SolParamType,
  kiba: SolParamType,
  yumi: SolParamType,
  heiki: SolParamType,
  attack: number,
  defence: number,
  intelligence: number,
  attackGrowth: number,
  defenceGrowth: number,
  intGrowth: number,
  skill: {
    name: string,
    type: "攻" | "防" | "特",
    rarelity?: SkillRarelityType,
  },
  unitSkill: string[]
}