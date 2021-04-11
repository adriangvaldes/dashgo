import { theme } from '@chakra-ui/react';

import dynamic from 'next/dynamic';


interface Series {
  name: string;
  data: number[];
}

interface ChartProps  {
  series: Series[]
}

const series1 = [  
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 209]}
];

const series2 = [  
{ name: 'series2', data: [10, 20, 40, 12, 36, 67, 80]}
];  

export function Chart() {
  const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
  })
  
  const options = {  //Chart's options
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTricks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2021-03-18T00:00:00:0000Z',
        '2021-03-19T00:00:00:0000Z',
        '2021-03-20T00:00:00:0000Z',
        '2021-03-21T00:00:00:0000Z',
        '2021-03-22T00:00:00:0000Z',
        '2021-03-23T00:00:00:0000Z',
        '2021-03-24T00:00:00:0000Z',
      ],
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      }
    },
  };
  
  return (
    <Chart options={options} series={series1} type="area" height={160} />
  );
}
