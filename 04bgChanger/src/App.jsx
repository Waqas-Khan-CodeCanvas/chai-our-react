
import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState("black")
  return (
    <>
      <section className='h-screen flex items-end justify-center duration-400 ' style={{backgroundColor : color}}>
        <div className='text-white fixed bottom-20 flex items-center justify-center p-2 bg-white rounded-3xl'>
          <button className='bg-red-600   px-3 py-1 text-white border-none rounded-2xl mx-1 cursor-pointer 'onClick={()=>setColor("red")}>Red</button>  
          <button className='bg-green-600 px-3 py-1 text-white border-none rounded-2xl mx-1 cursor-pointer 'onClick={()=>setColor("green")}>Green</button>  
          <button className='bg-yellow-400 px-3 py-1 text-white border-none rounded-2xl mx-1 cursor-pointer 'onClick={()=>setColor("yellow")}>Yellow</button>  
          <button className='bg-blue-600 px-3 py-1 text-white border-none rounded-2xl mx-1 cursor-pointer 'onClick={()=>setColor("blue")}>Blue</button>  
          <button className='bg-pink-500 px-3 py-1 text-white border-none rounded-2xl mx-1 cursor-pointer 'onClick={()=>setColor("pink")}>Pink</button>  
          <button className='bg-slate-500 px-3 py-1 text-white border-none rounded-2xl mx-1 cursor-pointer 'onClick={()=>setColor("grey")}>Slate</button>  
        </div>
      </section>
    </>
  )
}

export default App
