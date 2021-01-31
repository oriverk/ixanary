import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Layout } from '../../components/common/Layout'
import { CardType } from '../../types/CardType'
import { Cards } from '../../constant/cards'

export const getStaticProps: GetStaticProps = async () => {
  const cardsData = Cards
  return {
    props: {
      cardsData
    }
  }
}

type Props = {
  cardsData: CardType[]
}

const Component: React.FC<Props> = ({ cardsData }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const { innerHeight, innerWidth } = window
      console.log(innerHeight, innerWidth)
    }
  },[])
  return (
    <Layout>
      <div className='container mx-auto px-6 py-8'>
        <h3 className='text-gray-700 text-3xl font-medium'>武将一覧</h3>
        <div className='mt-8'></div>
        {/* <Table /> */}
        <div className='flex flex-col mt-8'>
          <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
            <div className='align-middle inline-block shadow overflow-hidden sm:rounded-lg border-gray-200'>
              <table className='text-center'>
                <thead>
                  <tr className='divide-x divide-y divide-gray-200 bg-gray-50 text-sm leading-4 font-medium tracking-wider text-gray-500'>
                    <th rowSpan={2} className='px-4.5 py-3 border-b'scope='col'>id</th>
                    <th rowSpan={2} className='px-4.5 py-3 text-gray-500' scope='col'>レア度</th>
                    <th rowSpan={2} className='px-4.5 py-3' scope='col'>職業</th>
                    <th rowSpan={2} className='px-4.5 py-3' scope='col'>名前</th>
                    <th rowSpan={2} className='px-4.5 py-3' scope='col'>スキル</th>
                    <th rowSpan={2} className='px-4.5 py-3' scope='col'>コスト</th>
                    <th rowSpan={2} className='px-4.5 py-3' scope='col'>指揮</th>
                    <th rowSpan={2} className='px-4.5 py-3' scope='col'>槍</th>
                    <th rowSpan={2} className='px-4.5 py-3' scope='col'>弓</th>
                    <th rowSpan={2} className='px-4.5 py-3' scope='col'>馬</th>
                    <th rowSpan={2} className='px-4.5 py-3' scope='col'>器</th>

                    <th colSpan={3} className='px-4.5 py-2' scope='colgroup'>初期値</th>
                    <th colSpan={3} className='px-4.5 py-2' scope='colgroup'>成長値</th>

                    <th rowSpan={2} className='px-4.5 py-3' scope='col'>部隊スキル</th>
                  </tr>
                  <tr className='divide-x divide-y divide-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium tracking-wider text-gray-500'>
                    <th className='px-4.5 py-3' scope='col'>攻</th>
                    <th className='px-4.5 py-3' scope='col'>防</th>
                    <th className='px-4.5 py-3' scope='col'>兵</th>
                    <th className='px-4.5 py-3' scope='col'>攻</th>
                    <th className='px-4.5 py-3' scope='col'>防</th>
                    <th className='px-4.5 py-3' scope='col'>兵</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {cardsData.map((card) => {
                    return (
                      <tr key={card.name} className='divide-x divide-y divide-gray-200 text-base leading-5 text-gray-500'>
                        <td className='px-4.5 py-3.5 border-b'>{card.id}</td>
                        <td className='px-4.5 py-3.5'>{card.rarelity}</td>
                        <td className='px-4.5 py-3.5'>{card.jobType}</td>
                        <td className='px-4.5 py-3.5 whitespace-nowrap'>
                          <Link href={`/cards/${card.id}`}>
                            <a>{card.name}</a>
                          </Link>
                        </td>
                        <td className='px-4.5 py-3.5 whitespace-nowrap'>
                          <Link href='/cards#'>
                            <a>{`${card.skill.type}: ${card.skill.name}`}</a>
                          </Link>
                        </td>
                        <td className='px-4.5 py-3.5'>{card.cost}</td>
                        <td className='px-4.5 py-3.5'>{card.capacity}</td>
                        <td className='px-4.5 py-3.5 uppercase'>{card.yari}</td>
                        <td className='px-4.5 py-3.5 uppercase'>{card.yumi}</td>
                        <td className='px-4.5 py-3.5 uppercase'>{card.kiba}</td>
                        <td className='px-4.5 py-3.5 uppercase'>{card.heiki}</td>
                        <td className='px-4.5 py-3.5'>{card.attack}</td>
                        <td className='px-4.5 py-3.5'>{card.defence}</td>
                        <td className='px-4.5 py-3.5'>{card.intelligence}</td>
                        <td className='px-4.5 py-3.5'>{card.attackGrowth}</td>
                        <td className='px-4.5 py-3.5'>{card.defenceGrowth}</td>
                        <td className='px-4.5 py-3.5'>{card.intGrowth}</td>
                        <td className='px-4.5 py-3.5 whitespace-pre'>
                          {card.unitSkill.map((unitSkill, index) => {
                            if (index === (card.unitSkill.length - 1)) {
                              return (
                                <Link href='/cards#'><a>{unitSkill}</a></Link>
                              )
                            }
                            return (
                              <>
                                <Link href='/cards#'><a>{unitSkill}</a></Link>
                                <br />
                              </>
                            )
                          })}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Component