
import { Switch } from '@mui/material';
import React from 'react';
import Branch from '../Components/Branch';

function Settings() {
  return <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full h-[720px] w-[350px] sm:w-auto  rounded-md p-3 ">
            <h1 className='text-2xl font-semibold uppercase mx-4'>Seat allocation</h1>
     <div className="w-full h-auto p-3 flex space-x-2 ">
            <Branch name="cse"/>
            <Branch name="cse-ai"/>
            <Branch name="ai&ds"/>
      </div>
      <div className="w-full h-auto p-3 flex space-x-2 ">
      <Branch name="cyber security"/>   
            <Branch name="ce"/>    
            <Branch name="ece"/>    
      </div>
      <div className="w-full h-auto p-3 flex space-x-2 ">
      <Branch name="eee"/>
      <Branch name="me"/>
           
             
              
      </div>
      <div className='w-full font-poppins p-3'>
            <hr className='bg-black h-1 mb-4'></hr>
            <div className='w-1/3 p-5 gap-y-3 flex flex-col bg-white rounded-md h-auto'>
            <h1 className='text-2xl font-semibold uppercase mx-4'>Form Activation</h1>

                  <div className='w-full flex gap-3'>
                        <Switch name='nri' />
                        <label className='text-xl'>NRI</label>
                  </div>
                  <div className='w-full  flex gap-3'>
                        <Switch name='nri' />
                  <label className='text-xl'>Management</label>
                  </div>
                  <div className='w-full flex gap-3'>
                        <Switch name='nri' />
                  <label className='text-xl'>Government</label>
                  </div>
            </div>
      </div>
  </div>;
}

export default Settings;

