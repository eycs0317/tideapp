import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

const LineChart = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const data = {
    labels: ['0','1','2','3','4'],
    datasets: [
      {label: 'Dataset 1',
      data: [5,4,3,6],
      borderColor: 'rbg(255,99,132)',
      backgroundColor:'rgba(255, 99, 132, 0.5)'
      }
    ]
  }
  return (
    <div>
      <p>this is Line Chart Component</p>
      <Chart type='line' data={data} />

      {/* <Line
      options={options}
        height={400}
        width={600}
        data={{
          labels: ['AAAAA','BBBBB', 'CCCCC'],
          datasets: [
            {label: 'Dataset 1',
            data: [10,4,3],
            borderColor: 'rbg(255,99,132)',
            backgroundColor:'rgba(255, 99, 132, 0.5)'
            }
          ]
        }}
      /> */}
    </div>

  )
}

export default LineChart;