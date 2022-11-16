
import React from 'react'
import Records from '../Components/Records'
const cards = [0,1,2,3,4,5,7]

const Nri = () => {
  return (
    <div className="overflow-x-auto scrollbar-thin space-y-3 border-[1px] p-4 border-black scrollbar-thumb-rounded-full scrollbar-thumb-black ">
        {cards.map((index)=>{
            return(<Records key={index} />)
          
        })}
    </div>
  )
}

export default Nri