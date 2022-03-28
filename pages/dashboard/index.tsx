import { useEffect } from 'react'
import LineChart from '../../components/LineChart'
// import BarChart from '../../components/BarChart'

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="mb-12 w-full px-4 xl:mb-0 xl:w-4/12">
          <LineChart chartId="line-1" />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <LineChart chartId="line-2" />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <LineChart chartId="line-3" />
        </div>
      </div>
    </>
  )
}
