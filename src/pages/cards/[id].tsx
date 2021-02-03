import { GetStaticProps, GetStaticPaths } from 'next'

import { Cards } from '../../constant/cards'
import { CardDataType } from '../../types/CardDataType'

import { Layout } from '../../components/common/Layout'
import { TableOuterLayout } from '../../components/common/TableOuterLayout'
import { AddSkillTable } from '../../components/cardDetail/AddSkillTable'
import { ParameterChangeTable } from '../../components/cardDetail/ParameterChangeTable'
import { CardFront } from '../../components/cardDetail/CardFront'
import { CardBack } from '../../components/cardDetail/CardBack'

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
      <div className='container mx-auto px-6 py-8'>
        <h3 className='text-gray-700 text-3xl span-medium'>No.{CardData.id}: {CardData.name}</h3>
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
          <TableOuterLayout marginBottom={2}>
            <table className='text-center min-w-full'>
              <thead>
                <tr className='divide-x divide-y divide-gray-200 bg-gray-50 text-sm leading-4 span-medium tracking-wider text-gray-500'>
                  <th className='px-4.5 py-3'scope='col'>id</th>
                  <th className='px-4.5 py-3' scope='col'>レア度</th>
                  <th className='px-4.5 py-3' scope='col'>職業</th>
                  <th className='px-4.5 py-3' scope='col'>名前</th>
                  <th className='px-4.5 py-3' scope='col'>名前</th>
                  <th className='px-4.5 py-3' scope='col'>名前</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr className='divide-x divide-y divide-gray-200 text-base leading-5 text-gray-500'>
                  <td className='px-4.5 py-3.5'>{CardData.id}</td>
                  <td className='px-4.5 py-3.5'>{CardData.rarelity}</td>
                  <td className='px-4.5 py-3.5'>{CardData.jobType}</td>
                  <td className='px-4.5 py-3.5'>{CardData.name}</td>
                  <td className='px-4.5 py-3.5'>{CardData.cost.toFixed(1)}</td>
                  <td className='px-4.5 py-3.5'>{CardData.capacity}</td>
                </tr>
              </tbody>
            </table> 
          </TableOuterLayout>
          <TableOuterLayout marginBottom={2}>
            <ParameterChangeTable data={CardData} />
          </TableOuterLayout>
          <TableOuterLayout marginBottom={2}>
            <AddSkillTable data={CardData} />
          </TableOuterLayout>
          <div className='border border-red-700 border-solid'>4</div>
        </div>
      </div>
    </Layout>
  )
}

export default Component
