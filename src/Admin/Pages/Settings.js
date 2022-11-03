import { Switch } from "@mui/material";
import React from "react";
import Branch from "../Components/Branch";
import { useState } from "react";
import { useEffect } from "react";

function Settings() {
      const [nriActive,setNriActive] = useState(false)
      const [govActive,setGovActive] = useState(false)
      const [mgmtActive,setMgmtActive] = useState(false)
      
      useEffect(() => {
            localStorage.setItem('nri_active',nriActive)
            localStorage.setItem('gov_active',govActive)
            localStorage.setItem('mgmt_active',mgmtActive)
            console.log(nriActive)
      },[nriActive,govActive,mgmtActive])

      const handleToggle = (e) => {
            if(e.target.checked && e.target.id == 'nri')
                  setNriActive(true)
            else if(e.target.checked && e.target.id == 'gov')
                  setGovActive(true)
            else if(e.target.checked && e.target.id == 'mgmt')
                  setMgmtActive(true)
            else{
                  setNriActive(false)
                  setGovActive(false)
                  setMgmtActive(false)
            }
      }
      
  return (
     
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full h-[720px] w-[350px] sm:w-auto  rounded-md p-3 ">
      <h1 className="text-2xl font-semibold uppercase mx-4">Seat allocation</h1>
      <div className="w-full h-auto p-3 flex space-x-2 ">
        <Branch name="cse" />
        <Branch name="cse-ai" />
        <Branch name="ai&ds" />
      </div>
      <div className="w-full h-auto p-3 flex space-x-2 ">
        <Branch name="cyber security" />
        <Branch name="ce" />
        <Branch name="ece" />
      </div>
      <div className="w-full h-auto p-3 flex space-x-2 ">
        <Branch name="eee" />
        <Branch name="me" />
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
