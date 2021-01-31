import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

import { CardType } from '../../types/CardType'
import { Layout } from '../../components/common/Layout'

import { Cards } from '../../constant/cards'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await Cards.map((card) => {
    return {
      params: {id: card.id}
    }
  })
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cardData = await Cards.find((card) => params.id === card.id)
  return {
    props: {
      cardData
    }
  }
}

type CardProps = {
  cardData: CardType
}

const Component: React.FC<CardProps> = ({ cardData }) => {
  const CardData: CardType = {
    id: '1001',
    name: '織田信長',
    rarelity: '天',
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
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 text-3xl font-medium">武将詳細</h3>
        <div className="mt-8"></div>
        <div className="mt-8">{CardData.id}</div>
        <div className="mt-8">{CardData.name}</div>
      </div>
    </Layout>
  )
}

export default Component
