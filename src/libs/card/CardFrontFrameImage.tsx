import Image from 'next/image'

type Props = {
  id: string
}

export const CardFrontFrameImage: React.FC<Props> = ({ id }) => {
  if ('1001' <= id && id < '1200') {
    // 普通天
    return (
      <Image src={`/assets/card/frame/lv5_ten.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('1701' <= id && id < '1750') {
    // 祝
    return (
      <Image src={`/assets/card/frame/lv_shuku.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('1801' <= id && id < '1900') {
    // 童
    return (
      <Image src={`/assets/card/frame/lv_warabe.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('1930' <= id && id <= '1950') {
    // 祝2
    return (
      <Image src={`/assets/card/frame/lv_shuku.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('1951' <= id && id < '2000') {
    // 復刻天
    return (
      <Image src={`/assets/card/frame/lv5_fukkoku_ten.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('2001' <= id && id < '2401') {
    // 普通極
    return (
      <Image src={`/assets/card/frame/lv4_kiwame.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('2401' <= id && id < '2501') {
    // 橙極
    return (
      <Image src={`/assets/card/frame/lv4_masago_expansion_kiwame.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('2501' <= id && id < '2701') {
    // 復刻極
    return (
      <Image src={`/assets/card/frame/lv4_hukkoku_kiwame.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('2701' <= id && id < '2901') {
    // 紫極
    return (
      <Image src={`/assets/card/frame/lv4_secret_kiwame.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('2901' <= id && id <= '3001') {
    // グレー枠のただの極 ??
    return (
      <Image src={`/assets/card/frame/lv4_kiwame.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('3001' <= id && id < '3701') {
    // 普通特
    return (
      <Image src={`/assets/card/frame/lv3_toku.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('3701' <= id && id < '4001') {
    // シクレ緑特
    return (
      <Image src={`/assets/card/frame/lv3_secret_toku.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if (id < '5001') {
    // 上
    return (
      <Image src={`/assets/card/frame/lv2_jou.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if (id < '5701') {
    // 普通序
    return (
      <Image src={`/assets/card/frame/lv1_jo.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if (id < '5710') {
    // ランクアップ済みの序：高橋Pなど
    return (
      <Image src={`/assets/card/frame/lv1_secret_jo.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('6001' <= id && id < '6701') {
    // 雅
    return (
      <Image src={`/assets/card/frame/lv_miyabi.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('6701' <= id && id < '6801') {
    // 化
    return (
      <Image src={`/assets/card/frame/lv_bake.png`}
      layout='fixed' width={224} height={315}
      />
      )
  } else {
    return (
      // 6801：天下統一が雅
      <Image src={`/assets/card/frame/lv_miyabi.png`}
        layout='fixed' width={224} height={315}
      />
    )
  }
}