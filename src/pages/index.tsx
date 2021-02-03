import { useEffect } from 'react'

import { Layout } from '../components/common/Layout'
import { CardDataType } from '../types/CardDataType'

type Props = {
  cardsData: CardDataType[]
}

const Component: React.FC<Props> = ({ cardsData }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const { innerHeight, innerWidth } = window
      console.log(innerHeight, innerWidth)
    }
  },[])
  return (
    <Layout>
      <div className='container mx-auto px-0 py-4 md:px-6 md:py-8'>
        <h3 className='text-2xl md:text-3xl font-medium'>index</h3>
        <div className='mt-8'></div>
        {/* <Table /> */}
        <div className='flex flex-col mt-8'>
          hoge
        </div>
      </div>
    </Layout>
  )
}

export default Component