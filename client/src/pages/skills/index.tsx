import { Layout } from '../../components/common/Layout'
import { routes } from '../../routes'
import { CustomHead } from '../../components/common/Head'


const Component: React.FC = () => {
  return (
    <Layout>
      <CustomHead pageUrl={routes.skills} pageTitle='武将スキル一覧' pageDescription='Skills Index | IXAnary' />
      <div className='container mx-auto px-6 py-8'>
        <h3 className='text-3xl font-medium'>スキル詳細</h3>
        <div className='mt-8'></div>
      </div>
    </Layout>
  );
}

export default Component
