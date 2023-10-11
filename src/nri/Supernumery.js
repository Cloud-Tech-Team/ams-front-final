import React from "react";
import { useState } from "react";
import { Button, Backdrop, LinearProgress, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Supernumery = () => {
  const [relation, setRelation] = useState(false);
  const [loader, setloader] = useState(false);

  const nav = useNavigate();
  const api = 'https://ams-backend-368717.el.r.appspot.com/'
  useEffect(() => {
    axios
      .get(api+"user/nri/application", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        if(res.data.user.quota !== 'Others'){
          nav('/nriform')
        }
      });
  }, []);
  const handleQuota = (e) => {
    if (e.target.value === "ciwg") setRelation(true);
    else setRelation(false);
  };


  function checkFill() {
    if (document.getElementById("quota-select").value === "") {
      window.alert("Please fill out all fields");
      return 1;
    }
    if(document.getElementById("quota-select").value !== "ciwg")
      return 0;
    if (
      (document.getElementById("quota-select").value === "ciwg" &&
        document.getElementById("relation-select").value === "") ||
      document.getElementById("parent-name").value === ""
    ) {
      window.alert("Please fill out all fields");
      return 1;
    }
    return 0;
  }


  const handleProceed = async(e) => {
    if (checkFill()) 
       return;
    setloader(true);
    let data;
    if(document.getElementById("quota-select").value !== "ciwg"){
      data = {
        quota : document.getElementById("quota-select").value
      }
    }else{
      data = {
        quota : document.getElementById("quota-select").value,
        NRIdetails :{
          name : document.getElementById("parent-name").value,
          relation: document.getElementById("relation-select").value
        }
      }
    }
    console.log(data)
    await 
    axios.patch(api+"user/quota_edit/",data,
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }).then((res) =>{
      console.log(res)
      if(res.data.status === "SUCCESS"){
        setloader(false)
        nav("/nriform");
      }
    })
  };

  
  return (
    <div className="h-screen w-screen bg-gradient-to-tl from-rock-blue-300 via-rock-blue-300 to-rock-blue-400 flex items-center justify-center">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <div className="w-screen absolute top-0">
          <LinearProgress color="primary" />
        </div>
      </Backdrop>

      <Tooltip title="Log out">
        <button className=" absolute top-3 right-6 bg-gray-200 rounded-full p-1 ">
          <AccountCircleIcon fontSize="large" />
        </button>
      </Tooltip>
      <p className="absolute text-lg text-right bottom-6 right-6">
        <b>Contact Support</b>
        <br />
        Ms.Rija : 6309387606
        <br />
        Mr.Binoy : 9446717178
      </p>
      <div className="w-9/12 sm:w-3/5 rounded-md xl:w-2/6 bg-white space-y-4 h-auto p-4">
        <p>Select Quota*</p>
        <select
          className="rounded-[4px] border-[1px] w-full hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
          id="quota-select"
          onChange={handleQuota}
          required
        >
          <option value=""></option>
          <option value="oci">OCI</option>
          <option value="pio">PIO</option>
          <option value="ciwg">CIWG</option>
        </select>
        {relation && (
          <div className="pb-2">
            <p className="mb-4">CIWG - Relation with applicant</p>
            <select
              required
              className="rounded-[4px] border-[1px] w-full hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              id="relation-select"
            >
              <option value=""></option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
            </select>
          </div>
        )}
         {relation && 
          
            <input
              className="rounded-[4px] border-[1px] w-full hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              id="parent-name"
              placeholder="Name of Parent"
           / >
             
        }
        <Button
          onClick={handleProceed}
          color="greenary"
          sx={{ color: "#FFF" }}
          variant="contained"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default Supernumery;
