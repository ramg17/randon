'use client';


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = () => {

    const data = {
        datasets:[
            {
                label:'Banks',
                data:[7000000, 6500000, 7500000, 4500000, 5000000],
                backgroundColor: [
                    '#f903b3ff',
                    '#5448fbff',
                    '#36ebdfff',
                    '#4ef202ff',
                    '#f27405ff',
                ],
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4', 'Bank 5'],
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