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

export default function LineAutoUpdate(props: any) {
  BaseChartRegister()
  const url = 'https://www.randomnumberapi.com/api/v1.0/random?min=-100&max=100'

  let ctx: HTMLCanvasElement | null = null
  let myChart: Chart | null = null
  var chartData = Array(100).fill(0)
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

  var config = {
    type: 'line',
    data: {
      labels: dummy(),
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#ff618b',
          borderColor: '#ff618b',
          borderWidth: 1,
          radius: 0,
          data: chartData,
          fill: false,
        },
      ],
    },
    options: {
      animation: {
        duration: 0,
      },
      responsive: true,
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      scales: {
        y: {
          min: -200,
          max: 200,
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
