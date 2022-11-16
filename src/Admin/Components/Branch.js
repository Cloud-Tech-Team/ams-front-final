import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LinearProgress } from '@mui/material';

function Branch(props) {
    const [loader,setLoader] = useState(false)
    const submit =(e)=>{
      e.preventDefault()
      setLoader(true)
      axios.patch('https://ams-backend-368705.el.r.appspot.com/branch/edit/'+props.name+'/2023',
      {
        NRISeats : document.getElementById(props.name+"nri").value,
        MgmtSeats: document.getElementById(props.name+"mgmt").value,
      }
      ,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("admin_access_token"),
        },
      }).then(res=>{
        console.log(res)
        setLoader(false)
      }).catch(e=>{
        console.log(e)
        setLoader(false)
      })
    }
  return <div key={props.keys} className="w-full h-auto bg-white p-3 shadow-xl rounded-md">
              <div className="w-full items-center justify-between py-4  flex">
                  <p className="text-xl font-semibold uppercase">{props.name}</p>
                  <div className="w-auto h-full space-x-2">
                      <button 
                      onClick={submit}
                      className='w-auto px-4 text-white text-lg rounded-md hover:bg-pink-700 bg-pink-800 h-7'>
                          save
                      </button>
                  </div>
              </div>
              <div className="w-full h-auto sapce-x-4 flex">
                  
                  <div className="w-auto h-auto p-1  flex flex-col space-y-2 ">
                    <p className="text-lg italic">NRI</p>
                  <input
                    type="text"
                    id={props.name+"nri"}
                    defaultValue = {props.data.NRISeats}
                    className="h-8 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                  </div>
                  <div className="w-auto h-auto p-1  flex flex-col space-y-2 ">
                    <p className="text-lg italic">Supernumery</p>
                  <input
                    type="text"
                    id={props.name+"gov"}
                    defaultValue = {props.data.totalSeats}
                    className="h-8 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                  </div>
                  <div className="w-auto h-auto p-1  flex flex-col space-y-2 ">
                    <p className="text-lg italic">MGMT</p>
                  <input
                    type="text"
                    id={props.name+"mgmt"}
                    defaultValue = {props.data.MgmtSeats}
                    className="h-8 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                  </div>
              </div>
              {loader&&<LinearProgress />}
          </div>;
}

export default Branch;
