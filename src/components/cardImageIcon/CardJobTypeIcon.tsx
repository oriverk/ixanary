import Image from 'next/image'

import { CardDataType } from '../../types/CardDataType'

type Props = {
  job: CardDataType['jobType']
}

export const CardJobTypeIcon: React.FC<Props> = ({ job }) => {
  if (job === '覇') {
    return (
      <Image src={`/assets/card/jobType/ha.png`}
        layout='fixed' width={30} height={30}
      />
    )
  } else if (job === '姫') {
    return (
      <Image src={`/assets/card/jobType/hime.png`}
        layout='fixed' width={30} height={30}
      />
    )
  } else if (job === '剣') {
    return (
      <Image src={`/assets/card/jobType/ken.png`}
        layout='fixed' width={30} height={30}
      />
    )
  } else if (job === '文') {
    return (
      <Image src={`/assets/card/jobType/bun.png`}
        layout='fixed' width={30} height={30}
      />
    )
  } else if (job === '童') {
    return (
      <Image src={`/assets/card/jobType/warabe.png`}
        layout='fixed' width={30} height={30}
      />
    )
  } else {
    // 将
    return (
      <Image src={`/assets/card/jobType/shou.png`}
        layout='fixed' width={30} height={30}
      />
    )
  }
}