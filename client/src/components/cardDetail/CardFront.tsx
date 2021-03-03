import { useState } from 'react'
import Image from 'next/image'

import { CardDataType } from '../../types/CardDataType'
import { CardFrontFrameImage, CardFrontBaseImage, CardRarityIcon, CardParamIcon } from '../cardImageIcon'

type Props = {
  data: CardDataType
}

export const CardFront: React.FC<Props> = ({ data }) => {
  const [cardState, setCardState] = useState(0)
  // cardState%3 === 0 then dipaly all, if 1 then with frame, else then without frame image
  const CardData = data
  
  return (
    <div id='card_front' className={`relative mx-auto`} style={{ width: '224px', height: '315px' }}
      onClick={() => setCardState(cardState + 1)}
    >
      <div className='absolute top-0 left-0'>
        <Image src='/assets/1066_back.png'
          layout='fixed' width={224} height={315} loading='eager' />
      </div>
      {/* <img src='/assets/1066_back.png' className='absolute top-0 left-0' /> */}
      <div className={`absolute top-0 left-0 ${cardState % 3 === 2 ? 'hidden' : ''}`}>
        <CardFrontFrameImage id={CardData.id} />
      </div>
      <div className='absolute top-0 left-0'>
        <Image src='/assets/1066.png'
          layout='fixed' width={224} height={315} loading='eager' />
      </div>
      <div className={`absolute top-0 left-0 ${cardState % 3 !== 0 ? 'hidden' : ''}`}>
        <CardFrontBaseImage id={CardData.id} />
      </div>
      <div className={`absolute top-0 left-0 w-full h-full text-gray-100 ${cardState % 3 !== 0 ? 'hidden' : ''}`}>
        <div className='rarity absolute' style={{ top: '10px', left: '2px', width: '30px', height: '30px' }}>
          <span>
            <CardRarityIcon id={CardData.id} />
          </span>
        </div>
        <div className='cost absolute text-center' style={{ top: '48px', left: '2px', width: '30px', height: '30px' }}>
          <span>
            {CardData.cost}
          </span>
        </div>
        <div className='name absolute text-center py-3' style={{ top: '23px', right: '4px', width: '43px', height: '132px' }}>
          <span className='whitespace-pre font-medium'>
            {CardData.name.split('').join(`\n`)}
          </span>
        </div>
        <div className='absolute' style={{top:'157px', right:'0', width:'85px', height:'49px'}}>
          <span className='yari absolute' style={{ top: '7px', left: '15px', width: '33px', height: '19px' }}>
            <CardParamIcon param={CardData.yari} />
          </span>
          <span className='yumi absolute' style={{ top: '30px', left: '15px', width: '33px', height: '19px' }}>
            <CardParamIcon param={CardData.yumi} />
          </span>
          <span className='kiba absolute' style={{ top: '7px', right: '-5px', width: '33px', height: '19px' }}>
            <CardParamIcon param={CardData.kiba} />
          </span>
          <span className='heiki absolute' style={{ top: '31px', right: '-5px', width: '33px', height: '19px' }}>
            <CardParamIcon param={CardData.heiki} />
          </span>
        </div>
        <div className='id absolute' style={{ bottom: '42px', left: '20px', width: '30px', height: '20px' }}>
          <span className=' text-base'>
            {CardData.id}
          </span>
        </div>
        <div className='params absolute text-center text-sm ' style={{ bottom: '31px', right: '4px', width: '57px', height: '73px' }}>
          <div className='attack'>
            {CardData.attack}
          </div>
          <div className='defence mt-1'>
            {CardData.defence}
          </div>
          <div className='intelligence mt-1'>
            {CardData.intelligence.toFixed(1)}
          </div>
        </div>
        <div className='capacity absolute text-center text-lg' style={{ bottom: '2px', right: '8px', width: '90px', height: '30px' }}>
          <span className='text-base'>
            0 / {CardData.capacity}
          </span>
        </div>
      </div>
    </div>
  )
}

