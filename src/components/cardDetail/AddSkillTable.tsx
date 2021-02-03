import { CardDataType } from '../../types/CardDataType'

type Props = {
  data: CardDataType
}

export const AddSkillTable: React.FC<Props> = ({ data }) => {
  const CardData = data
  const caption = `${CardData.skill.type}: ${CardData.skill.name} [CardData.skill.rarelity] の合成テーブル`
  return (
    <table className='min-w-full text-center'>
      <caption>{caption}</caption>
      <thead>
        <tr className='divide-x divide-y divide-gray-200 bg-gray-50 text-sm leading-4 font-medium tracking-wider text-gray-500'>
          <td className='px-4.5 py-3'></td>
          <th className='px-4.5 py-3' scope='col'>A</th>
          <th className='px-4.5 py-3' scope='col'>B</th>
          <th className='px-4.5 py-3' scope='col'>C</th>
          <th className='px-4.5 py-3' scope='col'>S1</th>
          <th className='px-4.5 py-3' scope='col'>S2</th>
        </tr>
      </thead>
      <tbody className='bg-white'>
        <tr className='divide-x divide-y divide-gray-200 text-base leading-5 text-gray-500'>
          <th className='px-4.5 py-3.5'　scope='row'>一次候補</th>
          <td className='px-4.5 py-3.5'>攻：騎突 金剛 [C]</td>
          <td className='px-4.5 py-3.5'>攻：神将 [A]</td>
          <td className='px-4.5 py-3.5'>攻：神速 [A]</td>
          <td className='px-4.5 py-3.5'>攻：神算鬼謀 [A]</td>
          <td className='px-4.5 py-3.5'>攻：騎神 [G]</td>
        </tr>
        <tr className='divide-x divide-y divide-gray-200 text-base leading-5 text-gray-500'>
          <th className='px-4.5 py-3.5' scope='row'>2次候補S1</th>
          <td className='px-4.5 py-3.5'>攻：剛勇無双 [B]</td>
          <td className='px-4.5 py-3.5'>攻：神将 [A]</td>
          <td className='px-4.5 py-3.5'>攻：神速 [A]</td>
          <td className='px-4.5 py-3.5'>攻：神算鬼謀 [A]</td>
          <td className='px-4.5 py-3.5'>攻：騎神 [G]</td>
        </tr>
        <tr className='divide-x divide-y divide-gray-200 text-base leading-5 text-gray-500'>
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
