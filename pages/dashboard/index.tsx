import { useEffect } from 'react'
import LineAutoUpdate from './../../components/Charts/LineAutoUpdate'
import DoughnutAutoUpdate from './../../components/Charts/DoughnutAutoUpdate'
import LineChart from './../../components/LineChart'
import BarAutoUpdate from './../../components/Charts/BarAutoUpdate'
import LineAutoUpdate2 from './../../components/Charts/LineAutoUpdate2'
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
      <div className="flex flex-wrap">
        <div className="mb-12 w-full px-4 xl:mb-0 xl:w-4/12">
          <LineAutoUpdate chartId="autoupdateline-1" />
        </div>
        <div className="mb-12 w-full px-4 xl:mb-0 xl:w-4/12">
          <DoughnutAutoUpdate chartId="autoupdatedoughnut-1" />
        </div>
        <div className="mb-12 w-full px-4 xl:mb-0 xl:w-4/12">
          <BarAutoUpdate chartId="autoupdatebar-1" />
        </div>
        {/* <div className="w-full px-4 xl:w-4/12">
          <LineAutoUpdate chartId="autoupdateline-2" />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <LineAutoUpdate chartId="autoupdateline-3" />
        </div> */}
      </div>
      <div className="flex flex-wrap">
        <div className="mb-12 w-full px-4 xl:mb-0 xl:w-4/12">
          <LineAutoUpdate2 chartId="autoupdateline-2" />
        </div>
      </div>
    </>
  )
}
