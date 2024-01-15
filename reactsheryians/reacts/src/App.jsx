import React, { useState } from 'react'

function App() {
 const [val, setVal] = useState([
  {name: "Anish", age: 24}, 
  {name: "Sivam", age: 25}, 
  {name: "manish", age: 32},
]);

  return (
    <div className='p-10 font-bold'>
      {val.map(item => (
        <div>
      <h1>{item.name}</h1>
      <h1>{item.age}</h1>
      </div>
      ))}
      <button 
       onClick={()=>setVal (() => val.map(item => item.name === "Anish" ? ({name: "Anish", age: 100 }) : item )) }
       className="rounded-full px-5 py-1 bg-blue-600  text-white"
      >
         click
      </button>
    </div>
  )
}

export default App
