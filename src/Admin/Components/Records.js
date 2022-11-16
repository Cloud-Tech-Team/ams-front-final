import React from 'react'

const Records = (props) => {
  let name = props.data.middleName ? props.data.firstName +" "+props.data.middleName+" "+props.data.lastName : props.data.firstName + ' ' + props.data.lastName
  return (
    <div className='w-full grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 items-center p-2 justify-between bg-white  rounded-md'>
        <img src={props.data.filePhotograph} className='w-9 object-cover h-9 rounded-full' alt='avatar' />
        <p>{props.data.applicationNo}</p>
        <p>{name}</p>
        <div>
          <p>{props.data.course}</p>
          <p>{props.data.bp1 === null ? ' ': props.data.bp1 }</p>
        </div>
        <div>
          <p>{props.data.phone}</p>
          <p>{props.data.email}</p>
        </div>
        {/* {props.data.paymentCompleted === true ? <p className='text-green-500'>Payment Completed</p> : <p className='text-red-500'>Payment pending</p> } */}
        <div className='flex flex-col'>
          <p className='underline flex justify-end'>print</p>
          <p className='underline flex justify-end'>view more</p>
        </div>
    </div>
  )
}

export default Records