import { CardDataType } from '../../types/CardDataType'

type Props = {
  data: CardDataType
}

function getParamAfterDistribution(init: number, growth: number, rank: number): number {
  let status: number = init
  if (rank < 0) {
    throw new Error(
      `Given argument as rank: ${rank} is invalid. The rank must be positive number.`
    )
  }

  const distribution = [80, 80, 100, 100, 120, 120, 30, 30]
  distribution.splice(rank + 1)
  distribution.forEach((val) => {
    status += val * growth
  })

  return status
}

export const ParameterChangeTable: React.FC<Props> = ({ data }) => {
  const { rarity, attack, defence, intelligence, attackGrowth, defenceGrowth, intGrowth } = data
  
  return (
    <table className='text-center min-w-full'>
      <caption className='mb-2 font-semibold'>ランクアップによる武将パラメータの変化</caption>
      <thead className='bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
        <tr className='text-sm leading-4 span-medium tracking-wider'>
          <td className='px-4.5 py-3 border border-gray-500'></td>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>初期値</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>成長値</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>Lv20</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>★1</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>★2</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>★3</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>★4</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>★5</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>限界突破</th>
          <th className='px-4.5 py-3 border border-gray-500' scope='col'>極限突破</th>
        </tr>
      </thead>
      <tbody className='bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-300'>
        <tr className='text-base leading-5'>
          <th className='px-4.5 py-3 border border-gray-500'　scope='row'>攻撃力</th>
          <td className='px-4.5 py-3 border border-gray-500'>{attack}</td>
          <td className='px-4.5 py-3 border border-gray-500'>+ {attackGrowth}</td>
          {[...Array(8)].map((val, index) => {
            return (
              <td className='px-4.5 py-3 border border-gray-500'>
                {getParamAfterDistribution(attack, attackGrowth, index)}
              </td>
            )
          })}
        </tr>
        <tr className='text-base leading-5'>
          <th className='px-4.5 py-3 border border-gray-500'　scope='row'>防御力</th>
          <td className='px-4.5 py-3 border border-gray-500'>{defence}</td>
          <td className='px-4.5 py-3 border border-gray-500'>+ {defenceGrowth}</td>
          {[...Array(8)].map((val, index) => {
            return (
              <td className='px-4.5 py-3 border border-gray-500'>
                {getParamAfterDistribution(defence, defenceGrowth, index)}
              </td>
            )
          })}
        </tr>
        <tr className='text-base leading-5'>
          <th className='px-4.5 py-3 border border-gray-500'　scope='row'>兵法</th>
          <td className='px-4.5 py-3 border border-gray-500'>{intelligence}</td>
          <td className='px-4.5 py-3 border border-gray-500'>+ {intGrowth.toFixed(1)}</td>
          {[...Array(8)].map((val, index) => {
            return (
              <td className='px-4.5 py-3 border border-gray-500'>
                {getParamAfterDistribution(intelligence, intGrowth, index).toFixed(1)}
              </td>
            )
          })}
        </tr>
      </tbody>
    </table> 
  )
}