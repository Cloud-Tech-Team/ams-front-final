
import React from 'react'
import Records from '../Components/Records'
const cards = [0,1,2,3,5,7]

const Nri = () => {
  return (
    <div className="overflow-x-auto scrollbar-thin space-y-3 border-[1px] p-4 border-black scrollbar-thumb-rounded-full scrollbar-thumb-black ">
        <div className='w-full flex space-x-4 items-end justify-end h-auto'>
            <div className='w-auto h-8 rounded-full bg-white'>
                {/* <input */}
            </div>
            <div className='w-9 h-9 rounded-full bg-white'></div>

        </div>
        {cards.map((index)=>{
            return(<Records key={index} />)
          
        })}
    </div>
  )
}

export default Nri