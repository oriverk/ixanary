export type CardType = {
  id: string, // i prefer string but this id will be used in params so...
  name: string,
  rarelity: '天' | '極' | '特' | '上' | '序' | '祝' | '童' | '雅' | '化',
  jobType: '覇' | '将' | '姫' | '剣' | '文' | '童',
  illustrator?: string, // string | undefined
  cost: number,
  capacity: number,
  yari: string,
  kiba: string,
  yumi: string,
  heiki: string,
  attack: number,
  defence: number,
  intelligence: number,
  attackGrowth: number,
  defenceGrowth: number,
  intGrowth: number,
  skill: {
    type: "攻" | "防" | "特",
    name: string
  },
  unitSkill: string[]
}