import { CardDataType } from '../../types/CardDataType'

type Props = {
  data: CardDataType
}

export const AddSkillTable: React.FC<Props> = ({ data }) => {
  const CardData = data
  const caption = `${CardData.skill.type}: ${CardData.skill.name} [CardData.skill.rarelity] の合成テーブル`
  return (
    <table className='min-w-full text-center border border-gray-400 dark:border-gray-50'>
      <caption className='mb-2'>{caption}</caption>
      <thead className='bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
        <tr className='divide-x divide-y border-gray-800 dark:divide-gray-50 text-sm leading-4 span-medium tracking-wider'>
          <td className='px-4.5 py-3'></td>
          <th className='px-4.5 py-3' scope='col'>A</th>
          <th className='px-4.5 py-3' scope='col'>B</th>
          <th className='px-4.5 py-3' scope='col'>C</th>
          <th className='px-4.5 py-3' scope='col'>S1</th>
          <th className='px-4.5 py-3' scope='col'>S2</th>
        </tr>
      </thead>
      <tbody className='bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-300'>
        <tr className='divide-x divide-gray-200 text-base leading-5'>
          <th className='px-4.5 py-3.5'　scope='row'>一次候補</th>
          <td className='px-4.5 py-3.5'>攻：騎突 金剛 [C]</td>
          <td className='px-4.5 py-3.5'>攻：神将 [A]</td>
          <td className='px-4.5 py-3.5'>攻：神速 [A]</td>
          <td className='px-4.5 py-3.5'>攻：神算鬼謀 [A]</td>
          <td className='px-4.5 py-3.5'>攻：騎神 [G]</td>
        </tr>
        <tr className='divide-x divide-gray-200 text-base leading-5'>
          <th className='px-4.5 py-3.5' scope='row'>2次候補S1</th>
          <td className='px-4.5 py-3.5'>攻：剛勇無双 [B]</td>
          <td className='px-4.5 py-3.5'>攻：神将 [A]</td>
          <td className='px-4.5 py-3.5'>攻：神速 [A]</td>
          <td className='px-4.5 py-3.5'>攻：神算鬼謀 [A]</td>
          <td className='px-4.5 py-3.5'>攻：騎神 [G]</td>
        </tr>
       <tr className='divide-x divide-gray-200 text-base leading-5'>
          <th className='px-4.5 py-3.5' scope='row'>3次候補S1</th>
          <td className='px-4.5 py-3.5'>攻：剛勇無双 [B]</td>
          <td className='px-4.5 py-3.5'>攻：神将 [A]</td>
          <td className='px-4.5 py-3.5'>攻：神速 [A]</td>
          <td className='px-4.5 py-3.5'>攻：神算鬼謀 [A]</td>
          <td className='px-4.5 py-3.5'>攻：騎神 [G]</td>
        </tr>
      </tbody>
    </table>
  );
}
