import Image from 'next/image'

type Props = {
  id: string
}

export const CardFrontBaseImage: React.FC<Props> = ({ id }) => {
  if ('1951' <= id && id < '2000') {
    // 復刻天
    return (
      <Image src={`/assets/card/base/ten_fukkoku.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('2001' <= id && id < '2401') {
    // 普通極
    return (
      <Image src={`/assets/card/base/icon_kiwame.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('2401' <= id && id < '2501') {
    // 橙極
    return (
      <Image src={`/assets/card/base/goku_masago_expansion.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('2501' <= id && id < '2701') {
    // 復刻極
    return (
      <Image src={`/assets/card/base/goku_hukkoku.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else if ('2701' <= id && id < '2901') {
    // 紫極
    return (
      <Image src={`/assets/card/base/goku_secret.png`}
        layout='fixed' width={224} height={315}
      />
      )
  } else if ('5701' <= id && id < '5710') {
    // ランクアップ済みの序：高橋Pなど
    return (
      <Image src={`/assets/card/base/jo_secret.png`}
        layout='fixed' width={224} height={315}
      />
    )
  } else {
    return (
      <Image src={`/assets/card/base/parameter_base.png`}
        layout='fixed' width={224} height={315}
      />
    )
  }
}