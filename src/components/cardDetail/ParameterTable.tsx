import Link from 'next/link'
import { CardDataType } from '../../types/CardDataType'

type Props = {
  data: CardDataType
}

export const ParameterTable: React.FC<Props> = ({ data }) => {
  const CardData = data
  
  return (
    <table className='text-center min-w-full'>
      <caption className='mb-2 font-semibold'>武将パラメータ</caption>
      <thead className='bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
        <tr className='text-sm leading-4 span-medium tracking-wider'>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500' scope='col'>id</th>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500 whitespace-pre' scope='col'>{`レ\nア`}</th>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500 whitespace-pre' scope='col'>{`職\n業`}</th>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500' scope='col'>名前</th>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500' scope='col'>スキル</th>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500 whitespace-pre' scope='col'>{`コ\nス\nト`}</th>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500' scope='col'>指揮</th>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500' scope='col'>槍</th>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500' scope='col'>弓</th>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500' scope='col'>馬</th>
          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500' scope='col'>器</th>

          <th colSpan={3} className='px-4.5 py-2 border border-gray-500' scope='colgroup'>初期値</th>
          <th colSpan={3} className='px-4.5 py-2 border border-gray-500' scope='colgroup'>成長値</th>

          <th rowSpan={2} className='px-4.5 py-3 border border-gray-500' scope='col'>部隊スキル</th>
        </tr>
        <tr className='text-sm leading-4 span-medium tracking-wider'>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>攻</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>防</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>兵</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>攻</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>防</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>兵</th>
        </tr>
      </thead>
      <tbody className='bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-300'>
        <tr key={CardData.name} className='text-base leading-5'>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.id}</td>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.rarelity}</td>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.jobType}</td>
          <td className='px-4.5 py-3.5 border border-gray-500 whitespace-nowrap'>{CardData.name}</td>
          <td className='px-4.5 py-3.5 border border-gray-500 whitespace-nowrap'>
            <Link href='/cards#'>
              <a>{`${CardData.skill.type}: ${CardData.skill.name}`}</a>
            </Link>
          </td>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.cost.toFixed(1)}</td>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.capacity}</td>
          <td className='px-4.5 py-3.5 border border-gray-500 uppercase'>{CardData.yari}</td>
          <td className='px-4.5 py-3.5 border border-gray-500 uppercase'>{CardData.yumi}</td>
          <td className='px-4.5 py-3.5 border border-gray-500 uppercase'>{CardData.kiba}</td>
          <td className='px-4.5 py-3.5 border border-gray-500 uppercase'>{CardData.heiki}</td>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.attack}</td>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.defence}</td>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.intelligence}</td>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.attackGrowth}</td>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.defenceGrowth}</td>
          <td className='px-4.5 py-3.5 border border-gray-500'>{CardData.intGrowth}</td>
          <td className='px-4.5 py-3.5 border border-gray-500 whitespace-pre'>
            {CardData.unitSkill.map((unitSkill, index) => {
              if (index === (CardData.unitSkill.length - 1)) {
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
      </tbody>
    </table>
  )
}