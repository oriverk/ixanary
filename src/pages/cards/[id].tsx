import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

import { CardType } from '../../types/CardType'
import { Layout } from '../../components/common/Layout'

import { Cards } from '../../constant/cards'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await Cards.map((card) => {
    return {
      params: {id: card.id}
    }
  })
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cardData = await Cards.find((card) => params.id === card.id)
  return {
    props: {
      cardData
    }
  }
}

type CardProps = {
  cardData: CardType
}

const Component: React.FC<CardProps> = ({ cardData }) => {
  const CardData: CardType = {
    id: '1001',
    name: '織田信長',
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
        <h3 className='text-gray-700 text-3xl font-medium'>武将詳細</h3>
        <div className='mt-8'></div>
        <div className='mt-8'>{CardData.id}</div>
        <div className='mt-8'>{CardData.name}</div>
        <div className='mt-8'></div>

        <div className='flex flex-row sm:flex-col'>
          <div className='cardfront border border-red-600 border-solid '>
            <div id='id_deck_card_front' className='relative'>
              <img src='/assets/1066_back.png' className='absolute top-0 left-0' />
              <img src='/assets/ten_frame.png' className='block absolute top-0 left-0'/>
              <img src='/assets/1066.png' className='absolute top-0 left-0' />
              <img src='/assets/parameter_base.png' className='block absolute top-0 left-0' />
              <div className='parameters block relative z-10 text-white' style={{ width: '224px', height:'315px'}}>
                <span className='rarelity'>
                  <img src='/assets/ten.png' style={{left: '4px', top:'10px', width:'30px', height: '30px'}} />
                </span>
							  <span className='cost font-bold' style={{top:'54px', left:'8px'}}>{CardData.cost}</span>
                {/* <span className='rank'></span> */}
	            	{/* <span className='name' title='みよしちょうけい'>三<br />好<br />長<br />慶</span> */}
                <span className='name flex flex-col bold text-center' style={{right:'5px', top:'34px', width:'40px'}} title='みよしちょうけい'>
                  {CardData.name.split('').map((n) =>  <div>{n}</div>)}
                </span>
                <span className='yari'>{CardData.yari}</span>
                <span className='kiba'>{CardData.kiba}</span>
                <span className='yumi'>{CardData.yumi}</span>
                <span className='heiki'>{CardData.heiki}</span>
                <span className='hp'>100/100</span>
                <span className='hp_bar'></span> 
                <span className='attack_status'>{CardData.attack}</span>
                <span className='defence_status'>{CardData.defence}</span>
                <span className='intelligence_status'>{CardData.intelligence.toFixed(1)}</span>
                <span className='id'>{CardData.id}</span>
                <span className='commandsol_yumi3' id='card_commandsol_16392906'></span>
                <span className='capacity'><span id='card_commandsol_cnt_16392906' className=''>0</span>{`/${CardData.capacity}`}</span>
              </div>
            </div>
          </div>
          <div className='cardback border border-blue-500 border-solid'>
            <div id='id_deck_card_back' className='ig_card_cardStatusBack visible relative'>
              <img src='https://cache.sengokuixa.jp/world/20210114-01/img/card/background/back.jpg' alt='' className='ig_card_back absolute' />
              <div className='parameta_area_back relative' data-card_max_skill_count='3'>
                <span className='jobtype_1'></span>
                <span className='ig_card_hiragana font-bold text-black' style={{fontSize:'14px', top:'24px', left:'57px'}}>みよしちょうけい</span>
                <span className='ig_card_exp'></span>
                <span className='ig_card_nextexp'>--</span>
                <div className='ig_skill_box_wrap ig_skill_box_wrap--3skill'>
                  <div className='ig_skill_box skill1 skill_open'>
                    <div className='ig_skill_box_title '>
                      <span className='ig_skill_name skill_rare s'>天哭傀儡LV10</span>
                    </div>
                    <div className='ig_skill_box_body'>
                      <span className='ig_skill_desc_1_16392906'>
                        確率：+100%　/　対象
                        <span color='#69821b'>追加スキル</span><br />このスキルを持つ武将カードは、<br />追加スキルの攻撃効果が2倍となる<br />（模倣不可）
                      </span>
                      <input type='hidden' className='ig_skill_rarity' value='0.4' />
                    </div>
                  </div>
								<div className='ig_skill_box skill2 skill_close'>
                  <div className='ig_skill_box_title '>
                    <span className='ig_skill_name skill_rare b'>深閑六連結陣LV10</span>
                  </div>
                  <div className='ig_skill_box_body'>
                    <span className='ig_skill_desc_2_16392906'>確率：+100%　/　対象　<span color='#69821b'>槍/弓/砲</span><br />攻撃：112%上昇<br /><span color='#69821b'>卓越</span>：追加確率30%で攻撃効果が1.5倍</span>
                    <input type='hidden' className='ig_skill_rarity' value='0.6' />
                  </div>
                </div>
                  <div className='ig_skill_box skill3 skill_close skill_empty'>
                    <div className='ig_skill_box_title '>
                      <span className='ig_skill_name'>&nbsp;</span>
                    </div>
                    <div className='ig_skill_box_body'>
                      <span className='ig_skill_desc'>&nbsp;</span>
                      <input type='hidden' className='ig_skill_rarity' value='' />
                    </div>
                  </div>
                </div>
              </div>
              <span className='ig_illustrator'>直良有祐</span>
              <span className='has_transfer'>譲与済み</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Component
