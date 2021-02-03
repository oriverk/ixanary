import { useEffect } from 'react'

import { CardDataType } from '../types/CardDataType'
import { Layout } from '../components/common/Layout'
import { CustomHead } from '../components/common/Head'
import { routes } from '../routes'

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
      <CustomHead pageUrl={routes.top} pageTitle='Top' pageDescription='Top | IXAnary' />
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