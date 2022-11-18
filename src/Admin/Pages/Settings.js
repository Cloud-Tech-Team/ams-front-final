import { Switch } from "@mui/material";
import React from "react";
import Branch from "../Components/Branch";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {Backdrop,LinearProgress} from "@mui/material";

function Settings() {
      const api = 'https://ams-backend-368717.el.r.appspot.com/'
      const [loader,setLoader] = useState(false)
      const branch = {'CSE':'Computer Science and Engineering',
                      'ECE':'Electronics and Communication Engineering',
                      'EEE':'Electrical and Electronics Engineering',
                      'ME':'Mechanical Engineering',
                      'CE' : 'Civil Engineeting'}
      const [seats,setSeats] = useState([]);
        useEffect(()=>{
          setLoader(true)
          axios.post(api+'branch/get',{},{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("admin_access_token"),
            },
          }).then(res => {
            console.log(res)
            setSeats(res.data.list)
          }).catch(e=>{
            console.log(e)
          });
          setLoader(false)
        },[])

      const handleToggle = (e) => {
      }
      
  return (
     
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full h-[720px] w-[350px] sm:w-auto  rounded-md p-3 ">
      <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
        >
          <div className="w-screen absolute top-0">
            <LinearProgress color="primary" />
          </div>
        </Backdrop>
      <h1 className="text-2xl font-semibold uppercase mx-4">Seat allocation</h1>
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 h-auto gap-3">
        {/* <Branch name="cse" /> */}
        {seats.map((index)=>{
          return(
            <Branch keys={index} name={seats[seats.indexOf(index)].name} data={index}/>
          )
        })}
      </div>
      <div className="w-full font-poppins p-3">
        <hr className="bg-black h-1 mb-4"></hr>
        <div className="w-1/3 p-5 gap-y-3 flex flex-col bg-white rounded-md h-auto">
          <h1 className="text-2xl font-semibold uppercase mx-4">
            Form Activation
          </h1>

          <div className="w-full flex gap-3">
            <Switch id="nri" onClick={handleToggle} />
            <label className="text-xl">NRI</label>
          </div>
          <div className="w-full  flex gap-3">
            <Switch id = "mgmt" onClick={handleToggle} />
            <label className="text-xl">Management</label>
          </div>
          <div className="w-full flex gap-3">
            <Switch id="gov" onClick={handleToggle} />
            <label className="text-xl">Government</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
