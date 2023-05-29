import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { income } from '../../mock/db.json';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    
    plugins: {
        legend: {
        position: 'top' as const,
        display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                  display: false
                }
              }],
              yAxes: [{
                gridLines: {
                  display: false
                }
              }]
        },
        title: {
        display: true,
        text: 'Chart.js Bar Chart',
        },
    },
};
const labels = Object.values(income).map((item) => {
    const res = item.day;
    return res
});


export const data = {
    labels,
    datasets: [
        {
        data: Object.values(income).map((item) => {
            const res = item.money;
            return res
        }),
        backgroundColor: '#000AFF',
        borderRadius: 4
        }
    ],
};

export function Gistogramma() {
    return <Bar options={options} data={data} />;
}
