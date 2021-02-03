
import { Layout } from '../components/common/Layout'

const Component: React.FC = () => {
  return (
    <Layout>
      <div className='container mx-auto px-0 py-4 md:px-6 md:py-8'>
        <h3 className='text-2xl md:text-3xl font-medium'>Search</h3>
        <div className='mt-8'></div>
        <div className='flex flex-col mt-8'>
          <div>
            <form action='#' className='flex flex-col space-y-5'>
              <div className='flex flex-col space-y-1'>
                <input type='search' autoFocus placeholder='キーワードを入力'
                  className='px-4 py-2 transition duration-300 border border-gray-300 rounded dark:bg-gray-700 dark:text-gray-300
                  focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
                />
              </div>
          </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Component