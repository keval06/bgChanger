import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

          <button onClick={ ()=>{setColor('red')} }
          className='outline-none px-8 py-2 rounded-full shadow-stone-800 cursor-pointer text-white font-bold '
          style={{backgroundColor:"red"}}>Red</button>

          <button onClick={ ()=>{setColor('green')} }
          className='outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer text-white font-bold'
          style={{backgroundColor:"green"}}>Green</button>

          <button onClick={ ()=>{setColor('blue')} }
          className='outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer text-white font-bold'
          style={{backgroundColor:"blue"}}>Blue</button>


          <button onClick={ ()=>{setColor('olive')} }
          className='outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer text-white font-bold'
          style={{backgroundColor:"olive"}}>Olive</button>
          
          <button onClick={ ()=>{setColor('gray')} }
          className='outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer text-white font-bold'
          style={{backgroundColor:"gray"}}>Gray</button>

          <button onClick={ ()=>{setColor('yellow')} }
          className='outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer text-black font-bold'
          style={{backgroundColor:"yellow"}}>Yellow</button>
          
          <button onClick={ ()=>{setColor('pink')} }
          className='outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer text-white font-bold'
          style={{backgroundColor:"pink"}}>Pink</button>

          <button onClick={ ()=>{setColor('purple')} }
          className='outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer text-white font-bold'
          style={{backgroundColor:"purple"}}>Purple</button>

          <button onClick={ ()=>{setColor('lavender')} }
          className='outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer text-black font-bold'
          style={{backgroundColor:"lavender"}}>Lavender</button>

          <button onClick={ ()=>{setColor('white')} }
          className='outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer text-black font-bold'
          style={{backgroundColor:"white"}}>White</button>
          
          <button onClick={ ()=>{setColor('black')} }
          className='outline-none px-6 py-2 rounded-full shadow-lg cursor-pointer text-white font-bold'
          style={{backgroundColor:"black"}}>Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
