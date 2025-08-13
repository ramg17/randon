'use client';


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

    const data = {
        datasets:[
            {
                label:'Banks',
                data:[12500000, 5000000, 7500000, 3000000],
                backgroundColor: [
                    '#ff6384',
                    '#0747b6',
                    '#36a2eb',
                    '#4bc0c0',
                ],
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4'],
    }; 

  return <Doughnut 
    data={data}
    options={{
        cutout: '50%',
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: Tsh ${value.toLocaleString()}`;
                    }
                }
            }
        }
         
        }}
   />
}

export default DoughnutChart