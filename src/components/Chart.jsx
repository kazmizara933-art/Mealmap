// Chart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js modules
ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Consumed',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#f3944c',   // 🔶 Orange bars
        borderColor: 'darkorange',
        borderWidth: 1,
      },
      {
        label: 'Burned',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: '#98bf6c',   // 🟩 Green bars
        borderColor: 'darkgreen',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    indexAxis: 'y',  // Horizontal
    responsive: true,
    maintainAspectRatio: false, // ✅ lets you control height/width via CSS
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Calories Activities',
      },
    },
  };

  // ✅ Responsive container: fills parent width to avoid overlap
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
