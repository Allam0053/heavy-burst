import { useEffect, useState } from 'react'
import { Chart, ChartItem } from 'chart.js'
import BaseChartRegister from './../BaseChart'
// import useFetch from './../UseFetch'
// import useSWR from 'swr'

function pushBack(data: number[], newValue: number): number[] {
  for (let i = 0; i < data.length - 1; i++) {
    data[i] = data[i + 1]
  }
  data[data.length - 1] = newValue
  return data
}

function dummy(): string[] {
  var dummy = []
  for (let i = 0; i < 100; i++) {
    dummy.push((i + 1).toString())
  }
  return dummy
}

export default function DoughnutAutoUpdate(props: any) {
  BaseChartRegister()
  const url = 'https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100'

  let ctx: HTMLCanvasElement | null = null
  let myChart: Chart | null = null
  var chartData = Array(5).fill(100)
  var [isLoaded, setIsLoaded] = useState(false)

  var MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const DATA_COUNT = 5
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 }

  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: chartData,
        backgroundColor: [
          '#FFAEBC',
          '#A0E7E5',
          '#B4F8C8',
          '#FBE7C6',
          '#75E6DA',
        ],
      },
    ],
  }

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    },
  }

  useEffect(() => {
    if (myChart == null && isLoaded == false) {
      ctx = document.getElementById(props.chartId) as HTMLCanvasElement
      myChart = new Chart(ctx.getContext('2d') as ChartItem, config)
      window.myLine = myChart
    }
    setIsLoaded(true)

    setInterval(() => {
      addData(myChart!!, 'july')
    }, 500)
  }, [])

  function addData(chart: Chart, label: string) {
    fetch(url)
      .then(async (res) => {
        if (!res.ok) {
          const error = new Error('An error occurred while fetching the data.')
          return { data: 0, error: error }
        }
        var resJson = await res.json()
        return { data: resJson, error: null }
      })
      .then(({ data, error }) => {
        if (error?.message == 'An error occurred while fetching the data.') {
          return 1
        }
        chart?.data?.datasets?.forEach((dataset) => {
          dataset.data = pushBack(dataset.data as number[], data[0])
        })
        chart.update()
        return 0
      })
      .then((res) => {
        if (res == 1) {
          console.log('update failed')
        } else if (res == 0) {
          console.log('update success')
        } else {
          console.log('unexpected error')
        }
      })
  }

  return (
    <>
      <div className="bg-blueGray-700 relative mb-6 flex w-full min-w-0 flex-col break-words rounded shadow-lg">
        <div className="mb-0 rounded-t bg-transparent px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-1 flex-grow">
              <h6 className="text-blueGray-100 mb-1 text-xs font-semibold uppercase">
                {props.chartId} Overview
              </h6>
              <h2 className="text-xl font-semibold text-white">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4">
          {/* Chart */}
          <div className="h-350-px relative">
            <canvas id={props.chartId}></canvas>
          </div>
        </div>
      </div>
    </>
  )
}
