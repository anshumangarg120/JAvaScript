import React from 'react'

function Card({data, handleClick, index}) {

  const {image, artist, name, added} = data;
 
  return (
    <>
     <div className="max-w-30 rounded overflow-hidden shadow-lg bg-white mt-10">
      <img src={image} alt="Music Image" className="w-full h-40 object-cover bg-orange-200"/>
     <div className="px-3 py-2">
      <div className="font-bold text-md mb-2 text-orange-500">{artist}</div>
       <p className="text-gray-700 text-base mb-4">
        {name}
       </p>
        <button onClick={() => handleClick (index)} className={`  ${added === false ? "bg-orange-500" : "bg-green-500"}  text-white font-bold py-1 px-2 rounded`}>
           {added === false ? "Add To Favourites" : "Added"}
        </button>
      </div>
     </div>
</>
  )
}

export default Card
