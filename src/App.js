import './App.css';

import { useEffect, useState } from 'react'

function App() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);


  useEffect(() => {
    let interval;
    if (running){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);


  return (
    <div className='max-w-nd flex flex-col items-center py-8'>
      <h1 className='text-2xl font-semibold'>Cronômetro-Thiago Sales</h1>
      <div className='text-xl font-semibold py-4'>
        <spam>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</spam>
        <spam>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</spam>
        <spam>{("0" + ((time / 10) % 100)).slice(-2)}</spam>
      </div>
      <div className='w-1/3 max-w-sm flex flex-row justify-evenly'>
        {running ? (
        
        <button 
          className='border rounded-lg py-1 px-3.5 bg-blue-300 font-semibold'
          onClick={() => {setRunning(false)}}
      
          >
            Parar
            </button>) : (
            
        <button 
          className='border rounded-lg py-1 px-3 bg-blue-300 font-semibold'    
          onClick={() => {setRunning(true)}}
          >
            Início
            
            </button>)
        }
        
        
        <button 
          className='border rounded-lg py-1 px-2.5 bg-blue-300 font-semibold'
          onClick={() => {setTime(0)}}
          >
            
            Zerar
          
          </button>
      </div>
    </div>    
  );
}

export default App;
