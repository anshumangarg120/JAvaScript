import React, { useState } from 'react'

function Card() {
  const [val, setVal] = useState(false);
  return (
    <div className='p-10 font-bold'>
     <h1>
      {val === false ? "bahar jao" : "bahar mat jao"}
     </h1>
     <button onClick={() => setVal( ()=> !val) } className='px-2 py-1 bg-red-300 rounded-full'> click </button>
    </div>
  )
}

export default Card
