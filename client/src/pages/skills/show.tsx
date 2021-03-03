import { Layout } from '../../components/common/Layout'
import { routes } from '../../routes'
import { CustomHead } from '../../components/common/Head'


const Component: React.FC = () => {
  return (
    <Layout>
      <CustomHead pageUrl={routes.skillsDetail} pageTitle='武将スキル詳細' pageDescription='Skill Details | IXAnary' />
      <div className='container mx-auto px-6 py-8'>
        <h3 className='text-3xl font-medium'>スキル詳細</h3>
        <h3 className='text-3xl font-medium'>多分不要</h3>
        <div className='mt-8'></div>
      </div>
    </Layout>
  );
}

export default Component
