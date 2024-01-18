import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';




function App() {
 
  return (
    <>
    <div className='w-full h-screen bg-zinc-300  gap-4 items-center justify-center'> 
    <Navbar/>
      <Card />
    </div>
  
    </>
  )
}

export default App
