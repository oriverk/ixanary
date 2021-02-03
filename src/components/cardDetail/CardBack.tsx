import { CardDataType } from '../../types/CardDataType'

import { CardJobTypeIcon } from '../../libs/card'

type Props = {
  data: CardDataType
}

export const CardBack: React.FC<Props> = ({ data }) => {
  const CardData = data
  return (
    <div id='card_back' className='relative mx-auto' style={{ width:'224px', height: '315px'}}>
      <img src='/assets/card_back.jpg' className='absolute top-0 left-0' />
      <div className='absolute top-0 left-0'>
        <div className='flex flex-row'>
          <div className='jobtype text-center' style={{ margin: '11px 0 0 12px', width: '30px', height: '30px' }}>
            <CardJobTypeIcon job={CardData.jobType} />
          </div>
          <div className='hiragana flex-grow font-semibold' style={{ margin: '18px 0 0 16px' }}>
            {CardData.hiragana}
          </div>
        </div>
        <div className='skills border-2 border-black border-solid z-20 rounded-md bg-white' style={{ margin:'27px 0 0 10px', width:'205px',height:'233px'}}>
          <div className='skill border-b border-black border-solid' style={{height:'50%'}}>
            <p className='name border-b px-2 border-black border-solid p-0.5 text-sm' style={{backgroundColor:'#ece4aa'}}>
              {CardData.skill.name}
            </p>
            <p className='description p-2 text-xs'>
              {CardData.skill.name}
            </p>
          </div>
          <div className='skill border-b border-black border-solid' style={{ height: '50%' }}>
            <p className='name border-b px-2 border-black border-solid p-0.5 text-sm' style={{ backgroundColor: '#ece4aa' }}>
              焔槍雷戟LV10
            </p>
            <p className='description p-2 text-xs'>
              確率：+100%　/　対象
                <span color='#69821b'> 槍弓馬</span>
                <br />槍弓馬攻：20%上昇<br />槍弓馬速：45%上昇
                <br />（単独出陣時は速度効果10倍）
            </p>
          </div>
        </div>
      </div>
      <div className='illustrator absolute bottom-0 left-10'>
        <span className='block leading-none text-white text-sm'>
          {CardData.illustrator}
        </span>
      </div>
    </div>
  )
}