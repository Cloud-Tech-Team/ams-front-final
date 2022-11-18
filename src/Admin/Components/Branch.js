import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LinearProgress } from '@mui/material';

function Branch(props) {
  const branch = {'CSE':'Computer Science and Engineering',
  'ECE':'Electronics and Communication Engineering',
  'EEE':'Electrical and Electronics Engineering',
  'ME':'Mechanical Engineering',
  'CE' : 'Civil Engineering',
  'CY':'Computer Science and Engineering(CY)',
  'AI':'Computer Science and Engineering(AI)',
  'AI&DS':'Artificial intelligence & Data Science'}
    const [loader,setLoader] = useState(false)
    const api = 'https://ams-backend-368717.el.r.appspot.com/'
    const submit =(e)=>{
      e.preventDefault()
      setLoader(true)
      axios.patch(api+'branch/edit/'+props.name+'/2023',
      {
        NRISeats : Number(document.getElementById(props.name+"nri").value),
        SuperSeats : Number(document.getElementById(props.name+"sup").value),
        MgmtSeats: Number(document.getElementById(props.name+"mgmt").value),
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
                  <p className="text-mg font-bold uppercase">{branch[props.name]}</p>
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
                    id={props.name+"sup"}
                    defaultValue = {props.data.SuperSeats}
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
