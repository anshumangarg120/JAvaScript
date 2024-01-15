import React, { useState } from 'react'

function App() {
 const [val, setVal] = useState({name: "Anish", isBanned: false});

  return (
   <div className='p-4'>
    <h1>name: {val.name}</h1>
    <h2>banned: {val.isBanned.toString()}</h2>
    <button onClick={()=> setVal({...val, isBanned: !val.isBanned})} className={`rounded px-3 py-1 ${val.isBanned ? "bg-blue-600" : "bg-red-600"}  text-white`}>Banned</button>
   </div>
  )
}

export default App
