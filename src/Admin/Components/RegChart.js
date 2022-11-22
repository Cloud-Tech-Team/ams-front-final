import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";
import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  BarElement,
  LineElement
);

const RegChart = (props) => {
  const data = {
    labels: ["CSE","AI","AI&DS","CY","CE","ME","EEE","ECE"],
    datasets: [
      {
        label: "Registration's",
        data: props.labeldata,
        
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "rgb(125,97,186)",
          "rgb(125,17,186)",
          "rgb(200,97,186)"
        ],
        hoverOffset: 4,
      },
    ],
  };
  var options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        display: true,
      },
      yAxes: {
        display: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return (
       <>
        {(props.graph===0)&&<Bar  data={data} height={400} options={options} />}  
        {(props.graph===1)&&<Doughnut  data={data} height={400} options={options} />}  
        {(props.graph===2)&&<Line  data={data} height={400} options={options} />}  
        {(props.graph===3)&&<Pie  data={data} height={400} options={options} />}  
        {(props.graph===4)&&<PolarArea  data={data} height={400} options={options} />}  
       </> 
  );
};

export default RegChart;
