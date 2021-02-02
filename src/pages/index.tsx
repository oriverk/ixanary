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
      <div className='container mx-auto px-6 py-8'>
        <h3 className='text-gray-700 text-3xl font-medium'>index</h3>
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