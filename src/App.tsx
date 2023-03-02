import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { userD, user } from './data/data';
import  UserList  from './components/userFiltered';

import React, { useRef,MouseEvent } from "react";
import { getElementAtEvent } from "react-chartjs-2";

import type { InteractionItem } from 'chart.js';
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2';


ChartJs.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

interface User {
  name: string;
  age: number;
}

interface UserD{
  age: number;
  count: number;
}



window.onstorage = () => {
  localStorage.setItem('load','true');
  
}

function App() {
  const [age,setAge] = useState<number>();
  let userData = user();
  let [userDataS , setUserData] = useState<UserD[]>([{age:23,count:1}]);
  const [showModal, setShowModal] = useState(false);
  
  if((userDataS as UserD[]).length == 1){
    userDataS = userData;
    setUserData(userDataS);
  }
  
 
  
  const data = {
    labels: (userDataS as UserD[]).map(row => row.age),
    datasets : [
      {
        label:'User Analytics',
        data: (userDataS as UserD[]).map(row => row.count),
        backgroundColor:'aqua',
        borderColor : 'aqua',
       
      }
    ]
};

const chartRef = useRef();

const setAgeByClick = (element: InteractionItem[]) => {
  if (!element.length) return;

  const { datasetIndex, index } = element[0];

  return data.labels[index];
};

const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
  const { current: chart } = chartRef;

  if (!chart) {
    return;
  }

 
  setAge((setAgeByClick(getElementAtEvent(chart, event)) as number));

  if(age){
    setShowModal(true);
  }  


};

  let userL:User[] = (userD() as User[]);

  
  

 

  return (
    <div className="App">
      <div className='line-chart'>
      <Line ref = {chartRef} data={data} onClick={onClick}></Line>
      </div>
      <button onClick={() => {setShowModal(false)}}>Close</button>
      <div className='users'>
          {showModal && <UserList age = {age as number} users = {userL}/>}
      </div>
      
       
    </div>
  )
}

export default App;
