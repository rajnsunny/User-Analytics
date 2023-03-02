import React, { useState, useRef,MouseEvent } from "react";
import { Line, getElementAtEvent } from "react-chartjs-2";
import { user } from "../data/data";
import type { InteractionItem } from 'chart.js';



type User = {
    name : string ,
    count : number 
}

let userData = user();

const LineChart: React.FC = () => {
    const data = {
        labels: userData.map(row => row.age),
        datasets : [
          {
            label:'User Analytics',
            data: userData.map(row => row.count),
            backgroundColor:'aqua',
            borderColor : 'aqua',
            tension : 0.4
    
          }
        ]
  };

  const chartRef = useRef();

  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

   
    printElementAtEvent(getElementAtEvent(chart, event));
  
  };

  

  return (
    <div>
      <Line ref = {chartRef}data={data} onClick={onClick} />
    </div>
  );
};

export default LineChart;
