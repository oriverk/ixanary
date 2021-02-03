import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

import { Cards } from '../../constant/cards'
import { CardDataType } from '../../types/CardDataType'

import { Layout } from '../../components/common/Layout'
import { TableOuterLayout } from '../../components/common/TableOuterLayout'
import { ParameterTable } from '../../components/cardDetail/ParameterTable'
import { ParameterChangeTable } from '../../components/cardDetail/ParameterChangeTable'
import { AddSkillTable } from '../../components/cardDetail/AddSkillTable'
import { CardFront } from '../../components/cardDetail/CardFront'
import { CardBack } from '../../components/cardDetail/CardBack'
import { CustomHead } from '../../components/common/Head'
import { routes } from '../../routes'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await Cards.map((card) => {
    return {
      params: { id: card.id }
    }
  })
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const cardData = await Cards.find((card) => params.id === card.id)
  return {
    props: {
      cardData
    }
  }
}

type CardProps = {
  cardData: CardDataType
}

const Component: React.FC<CardProps> = ({ cardData }) => {  
  const CardData: CardDataType = {
    id: '1001',
    name: '織田信長',
    hiragana: 'おだのぶなが',
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
      <CustomHead pageUrl={routes.cardsDetail(CardData.id)} pageTitle={`${CardData.id} : ${CardData.name}`}
        pageDescription={`${CardData.name} | IXAnary`} />
      <div className='container mx-auto px-0 py-4 md:px-6 md:py-8'>
        <h3 className='text-2xl md:text-3xl span-medium'>No.{CardData.id}: {CardData.name}</h3>
        <div className='mb-8'></div>
        <div className='flex flex-col'>
          <div className='flex flex-col sm:flex-row mb-4'>
            <div className='cardFrontDisplay p-2 mb-2'>
              <CardFront data={CardData} />
            </div>
            <div className='cardBackDisplay p-2 mb-2'>
              <CardBack data={CardData} />
            </div>
          </div>
          <TableOuterLayout marginTop={8}>
            <ParameterTable data={CardData} />
          </TableOuterLayout>
          <TableOuterLayout marginTop={8}>
            <ParameterChangeTable data={CardData} />
          </TableOuterLayout>
          <TableOuterLayout marginTop={8}>
            <AddSkillTable data={CardData} />
          </TableOuterLayout>
          {/* <div className='border border-red-700 border-solid'>4</div> */}
        </div>
      </div>
    </Layout>
  )
}

export default Component
