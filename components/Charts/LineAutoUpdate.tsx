import { useEffect, useState } from 'react'
import { Chart, Line } from 'react-chartjs-2'
import useFetch from '../UseFetch'
import BaseChartRegister from './../BaseChart'
// import useFetch from './../UseFetch'
import useSWR from 'swr'

function pushBack(data: number[], newValue: number): number[] {
  for (let i = 0; i < data.length - 1; i++) {
    data[i] = data[i + 1]
  }
  data[data.length - 1] = newValue
  return data
}

function pushBackLabel(data: string[]): string[] {
  for (let i = 0; i < data.length; i++) {
    data[i] = (parseInt(data[i]) + 1).toString()
  }
  return data
}

function dummy(): string[] {
  var dummy = []
  for (let i = 0; i < 100; i++) {
    dummy.push((i + 1).toString())
  }
  return dummy
}

type myChartType = {
  labels: string[]
  datasets: Array<{
    label: string
    backgroundColor: string
    borderColor: string
    borderWidth: number
    radius: number
    data: Array<number>
    fill: boolean
  }>
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'react-chart-2 with useSWR',
    },
  },
}

const url = 'https://www.randomnumberapi.com/api/v1.0/random?min=-100&max=100'
const oldData: number[] = Array(100).fill(0)
const oldLabel: string[] = dummy()
// let [oldData, setOldData] = useState(Array(100).fill(0))
// let [oldLabel, setOldLabel] = useState(dummy())
async function fetcher(): Promise<myChartType> {
  var result = await fetch(url)
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
        return {
          labels: pushBackLabel(oldLabel),
          datasets: [
            {
              label: 'My First dataset (error)',
              backgroundColor: '#ff618b',
              borderColor: '#ff618b',
              borderWidth: 1,
              data: pushBack(oldData, data[0]),
              fill: false,
              radius: 0,
            },
          ],
        } as myChartType
      }

      return {
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#ff618b',
            borderColor: '#ff618b',
            borderWidth: 1,
            data: pushBack(oldData, data[0]),
            fill: false,
            radius: 0,
          },
        ],
        labels: pushBackLabel(oldLabel),
      } as myChartType
    })
    .catch((error) => {
      return {
        datasets: [
          {
            label: 'My First dataset [catch block error] ' + error.message,
            backgroundColor: '#ff618b',
            borderColor: '#ff618b',
            borderWidth: 1,
            data: oldData,
            fill: false,
            radius: 0,
          },
        ],
        labels: oldLabel,
      } as myChartType
    })
  console.log('swr called')
  return result
}

export default function LineAutoUpdate(props: any) {
  BaseChartRegister()
  const url = 'https://www.randomnumberapi.com/api/v1.0/random?min=-100&max=100'
  let [clicked, setClicked] = useState('halo')

  // useEffect(() => {
  //   setInterval(() => {}, 500)
  // }, [])

  const initialData = {
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#ff618b',
        borderColor: '#ff618b',
        borderWidth: 1,
        data: oldData,
        fill: false,
        radius: 0,
      },
    ],
    labels: oldLabel,
  } as myChartType

  let { data, error } = useSWR<myChartType, any>(url, fetcher, {
    refreshInterval: 250,
    revalidateOnMount: true,
  })

  function handleClick() {
    clicked ? setClicked('hali') : setClicked('halu')
  }

  return (
    <>
      <div className="bg-blueGray-700 w-sfull relative mb-6 flex min-w-0 flex-col break-words rounded shadow-lg">
        <div className="mb-0 rounded-t bg-transparent px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-1 flex-grow">
              <h6 className="text-blueGray-100 mb-1 text-xs font-semibold uppercase">
                {props.chartId} Overview{' '}
                {data && data.datasets && data?.datasets[0].data[99]}
              </h6>
              <button onClick={handleClick}>{clicked} button</button>
              <h2 className="text-xl font-semibold text-white">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4">
          {/* Chart */}
          <div className="h-350-px relative">
            {error ? (
              'please wait there is some error'
            ) : typeof data === 'undefined' ? (
              <div>Loading...</div>
            ) : (
              <Line data={data} options={options} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
