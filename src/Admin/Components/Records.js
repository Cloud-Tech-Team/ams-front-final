import React from 'react'

const Records = (props) => {
  return (
    <div className='w-full flex items-center p-2 justify-between bg-white  rounded-md'>
        <img src={props.data.filePhotograph} className='w-9 h-9 rounded-full' alt='avatar' />
        <p className='w-1/9'>{props.data.applicationNo}</p>
        <p>{props.data.firstName +' '+props.data.lastName}</p>
        <p>{props.data.bp1 === null ? ' ': props.data.bp1 }</p>
        <p>BTech</p>
        <p>8848978215</p>
        <p className='text-green-500'>Payment completed</p>
        <p className='underline'>print</p>
        <p className='underline'>view more</p>
    </div>
  )
}

export default Records