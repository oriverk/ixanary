import Image from 'next/image'

import { CardDataType } from '../../types/CardDataType'

type Props = {
  param: CardDataType['yari' | 'yumi' | 'kiba' | 'heiki']
}

export const CardParamIcon: React.FC<Props> = ({ param }) => {
  return (
    <Image src={`/assets/card/paramIcon/icon_${param}.png`}
      layout='fixed' width={19} height={19}
    />
  )
}