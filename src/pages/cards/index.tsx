import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { routes } from '../../routes'

import { Layout } from '../../components/common/Layout'
import { TableOuterLayout } from '../../components/common/TableOuterLayout'
import { CardDataType } from '../../types/CardDataType'
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
  cardsData: CardDataType[]
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
      <div className='container mx-auto px-0 py-4 md:px-6 md:py-8'>
        <h3 className='text-2xl md:text-3xl font-medium'>武将一覧</h3>
        <div className='mt-8'></div>
        {/* <Table /> */}
        <div className='flex flex-col mt-8'>
          <TableOuterLayout marginBottom={4} paddingBottom={4}>
            <table className='text-center min-w-full border border-gray-400 dark:border-gray-50'>
              <thead className='bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
                <tr className='divide-x border-gray-800 dark:divide-gray-50 text-sm leading-4 span-medium tracking-wider'>
                  <th rowSpan={2} className='px-4.5 py-3' scope='col'>id</th>
                  <th rowSpan={2} className='px-4.5 py-3' scope='col'>レア度</th>
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
                <tr className='divide-x divide-y border-gray-800 dark:divide-gray-50 text-sm leading-4 span-medium tracking-wider'>
                  <th className='px-4.5 py-3' scope='col'>攻</th>
                  <th className='px-4.5 py-3' scope='col'>防</th>
                  <th className='px-4.5 py-3' scope='col'>兵</th>
                  <th className='px-4.5 py-3' scope='col'>攻</th>
                  <th className='px-4.5 py-3' scope='col'>防</th>
                  <th className='px-4.5 py-3' scope='col'>兵</th>
                </tr>
              </thead>
              <tbody className='bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-300'>
                {cardsData.map((card) => {
                  return (
                    <tr key={card.name} className='text-base leading-5'>
                      <td className='px-4.5 py-3.5'>{card.id}</td>
                      <td className='px-4.5 py-3.5'>{card.rarelity}</td>
                      <td className='px-4.5 py-3.5'>{card.jobType}</td>
                      <td className='px-4.5 py-3.5 whitespace-nowrap'>
                        <Link href={routes.cardsDetail(card.id)}>
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
          </TableOuterLayout>
        </div>
      </div>
    </Layout>
  )
}

export default Component