import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Button = ({ color, setColor }) => {

  // Determine text color based on background
  const getTextColor = (bgColor) => {
    const lightColors = ['yellow', 'lavender', 'white', 'pink'];
    return lightColors.includes(bgColor.toLowerCase()) ? 'text-black' : 'text-white';
  };
  return (
    <button
      onClick={() => setColor(color)}
      className={`outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer  font-semibold hover:scale-[1.1] duration-300 ${getTextColor(color)}`}
      style={{ backgroundColor: color }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
};


function App() {
const [color, setColor] =  useState('olive');
// duration --> time in animation
//style = {{backgroundColor:"red"}}

  return (
    <div className='w-full h-screen duration-350 '
    style={{backgroundColor:color}}>
      
      {/* Can write basic classic css in this {{}} */}
      <div className='fixed flex flex-wrap justify-center bottom-30 inset-x-0 px-3'>

        <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-10 py-6 rounded-3xl' >

          <Button color='black' setColor={setColor} />
          <Button color='red' setColor={setColor} />
          {/* <button onClick={ ()=>{setColor('red')} }
          className='outline-none px-8 py-2 rounded-full shadow-stone-800 cursor-pointer text-white font-bold '
          style={{backgroundColor:"red"}}>Red</button> */}
          <Button color='lavender' setColor={setColor} />
          <Button color='green' setColor={setColor} />
          <Button color='blue' setColor={setColor} />
          <Button color='yellow' setColor={setColor} />
          <Button color='olive' setColor={setColor} />
          <Button color='gray' setColor={setColor} />
          <Button color='pink' setColor={setColor} />
          <Button color='purple' setColor={setColor} />
          <Button color='white' setColor={setColor} />
        </div>
      </div>
    </div>
  )
}

export default App;
