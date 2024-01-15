import React, { useState } from 'react'

function App() {
 const [val, setVal] = useState([1,2,3,4,5,6]);

  return (
   <div className='p-10'>
    {val.map(item => <h1>{item}</h1> )}
    <button onClick={()  => setVal( () => {
      return val.filter((item, index) => index!=val.length-1 )
    }) } className="rounded-full px-5 py-1 bg-blue-600  text-white">-</button>
   </div>
  )
}

export default App
