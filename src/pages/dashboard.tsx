import { Layout } from '../components/dashboard/Layout'
import { Top } from '../components/dashboard/Top'
import { Table } from '../components/dashboard/Table'

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
        <div className="mt-8"></div>
        <Top />
        <Table />
      </div>
    </Layout>
  )
}

export default Dashboard