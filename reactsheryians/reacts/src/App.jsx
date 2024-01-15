import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
  const [val, setVal] = useState(false)
  return (
    <div className='w-full h-screen bg-zink-300 flex justify-center items-center'>
      <div className=' relative w-60 h-32 rounded-md flex overflow-hidden'>
        <img className={`shrink-0 transition-transform ease-in-out duration-700 ${val === false ? "-translate-x-[0%]" :" -translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1705234897189-73a41dd41e33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={`shrink-0 transition-transform ease-in-out duration-700 ${val === false ? "-translate-x-[0%]" :" -translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1705107959309-ca7d26fbeb08?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span onClick={() => setVal(() => !val)} className=' w-8 h-8 flex items-center justify-center bg-[#dadada9b] rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]  '>
           <FaArrowRightLong size={".9em"}/>
        </span>
      </div>
    </div>
  )
}

export default App
