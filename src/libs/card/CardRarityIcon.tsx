import Image from 'next/image'

import { CardDataType } from '../../types/CardDataType'

type Props = Pick<CardDataType, 'id'>

export const CardRarityIcon: React.FC<Props> = ({ id }) => {
  const image = {
    ten: 'ten',
    hukkoku_ten: 'hukkoku_ten',
    shuku: 'shuku',
    warabe: 'warabe',
    kiwame: 'kiwame',
    masago_kiwame: 'masago_kiwame',  // oudoiro such as yatsumond
    hukkoku_kiwame: 'hukkoku_kiwame', 
    secret_kiwame: 'secret_kiwame', // murasaki
    toku: 'toku',
    secret_toku: 'toku', // midori
    jou: 'jou',
    jo: 'jo',
    unnnei_jo: 'unnei_jo',  // such as takahashi producer
    miyabi: 'miyabi',
    bake: 'bake'
  }

  let rarity = ''

  if ('1001' <= id && id < '1200') {
    rarity = image.ten
  } else if ('1701' <= id && id < '1750') {
    rarity = image.shuku
  } else if ('1801' <= id && id < '1900') {
    rarity = image.warabe
  } else if ('1930' <= id && id <= '1950') {
    rarity = image.shuku
  } else if ('1951' <= id && id < '2000') {
    rarity = image.hukkoku_ten
  } else if ('2001' <= id && id < '2401') {
    rarity = image.kiwame
  } else if ('2401' <= id && id < '2501') {
    rarity = image.masago_kiwame
  } else if ('2501' <= id && id < '2701') {
    rarity = image.hukkoku_kiwame
  } else if ('2701' <= id && id < '2901') {
    rarity = image.secret_kiwame
  } else if ('2901' <= id && id <= '3001') {
    // グレー枠のただの極
    rarity = image.kiwame
  } else if ('3001' <= id && id < '3701') {
    rarity = image.toku
  } else if ('3701' <= id && id < '4001') {
    rarity = image.secret_toku
  } else if (id < '5001') {
    rarity = image.jou
  } else if (id < '5701') {
    rarity = image.jo
  } else if (id < '5710') {
    // ランクアップ済みの序：高橋Pなど
    rarity = image.unnnei_jo
  } else if ('6001' <= id && id < '6701') {
    rarity = image.miyabi
  } else if ('6701' <= id && id < '6801') {
    rarity = image.bake
  } else {
    // 6801：天下統一が雅
    rarity = image.miyabi
  }

  return (
    <Image src={`/assets/card/rarity/${rarity}.png`}
      layout='fixed' width={30} height={30}
    />
  )
}