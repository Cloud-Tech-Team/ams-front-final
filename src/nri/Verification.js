import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Backdrop, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";


export const Verification = () => {
  localStorage.setItem("pageNo", 4);
  const [loader,setLoader] = useState(true)
  const [marklist10, setMarklist10] = useState();
  const [marklist12, setMarklist12] = useState();
  const [marklistKeam, setMarklistKeam] = useState();
  const [photo, setPhoto] = useState();
  const [sign, setSign] = useState();
  const [checked,setChecked] = useState(false)
  const [user,setUser] = useState({
    firstName:'',
    middleName: '',
    lastName : '',
    dob:'',
    gender:'',
    aadhaar:'',
    phone:'',
    aPhone:'',
    guardianDetails : {
      name:'',
      occupation : ''
    },NRIdetails :{
      name : '',
      relation : ''
    },contactAddress : {
      addressL1:'',
      city : '',
      district : '',
      state : '',
      pincode : ''
    },permanentAddress : {
      addressL1:'',
      city : '',
      district : '',
      state : '',
      pincode : ''
    },grade10:{
      school:'',
      board:''
    },grade12:{
      school:'',
      board:''
    },keam:{
    markPaper1: '',
    markPaper2: '',
    rank: '',
    rollNumber: "",
    totalMark:'',
    year:''
    },bp1:''
  });
  
  const nav = useNavigate()
  const branch = {'CSE':'Computer Science and Engineering',
                  'ECE':'Electronics and Communication Engineering',
                  'EEE':'Electrical and Electronics Engineering',
                  'ME':'Mechanical Engineering',
                  'CE' : 'Civil Engineering',
                  'CY':'Computer Science and Engineering(CY)',
                  'AI':'Computer Science and Engineering(AI)',
                  'AI&DS':'Artificial intelligence & Data Science'}
  const api = 'https://ams-backend-368717.el.r.appspot.com/'

  useEffect(() => {
    axios
      .get(api+"user/nri/application", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        console.log(res);
        let photograph = res.data.user.filePhotograph;
        let file10th = res.data.user.grade10.marksheet;
        let file12th = res.data.user.grade12.marksheet;
        let filekeam = res.data.user.keam.file;
        let signature = res.data.user.imgSign;
        setMarklist10(file10th);
        setMarklist12(file12th);
        setMarklistKeam(filekeam);
        setPhoto(photograph)
        setSign(signature)
        setUser(res.data.user)
      });
      setLoader(false)
  }, []);
  
  const handlecheck = (e) =>{
    setChecked(true)
  }
  const movetosubmit = async(e) =>{
    if(checked === true){
     nav("/nriform/payment")
    }else{
      window.alert("Confirm that You Have Reviweed The Details")
    }
  }

  return (
    <div className="font-poppins min-h-screen mx-auto w-11/12 lg:w-4/6 py-10  xl:my-auto">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="blue"/>
      </Backdrop>
      <div className="h-auto w-full mt-10 p-2 bg-white rounded-[4px] ">
        <div className="flex items-center px-6 justify-between">
          <img
            className="w-36"
            src={photo}
            alt="avatar"
          />
          <div className=" p-3 rounded-md border-[2px]  w-56">
          <img
            className="w-36"
            src={sign}
            alt="signature"
          />
          </div>
        </div>
        <div className="h-auto m-3 xl:flex xl:space-x-4">
          <div className="xl:w-1/2 space-y-3  p-4    rounded-md border-[2px] ">
            <div className="flex items-center justify-between">
              <label>Name of the applicant:</label>
              <label className="font-semibold">{user.firstName+' ' + (user.middleName ? (user.middleName+' ') : ' ') + user.lastName}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Date of Birth :</label>
              <label className="font-semibold">{user.dob.toString().slice(0,10)}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Gender:</label>
              <label className="font-semibold">{user.gender}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Aadhar:</label>
              <label className="font-semibold">{user.aadhaar}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Phone 1(M):</label>
              <label className="font-semibold">{user.aPhone}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Phone 2(In Kerala)):</label>
              <label className="font-semibold">{user.phone}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Name of parent/Gaurdian:</label>
              <label className="font-semibold">{user.guardianDetails.name}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Parent's Occupation:</label>
              <label className="font-semibold">{user.guardianDetails.occupation}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>NRI sponsor:</label>
              <label className="font-semibold">{user.NRIdetails.name}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Relation with applicant:</label>
              <label className="font-semibold">{user.NRIdetails.relation}</label>
            </div>
          </div>
          <div className="xl:w-1/2  p-4  space-y-3  rounded-md border-[2px] ">
            <p className="font-semibold">Contact Address</p>
            <div className="flex items-center justify-between">
              <label>House Name</label>
              <label className="font-semibold">{user.contactAddress.addressL1}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>State</label>
              <label className="font-semibold">{user.contactAddress.state}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>District,City</label>
              <label className="font-semibold">{user.contactAddress.district + ' , '+user.contactAddress.city}</label>
            </div>

            <div className="flex items-center justify-between">
              <label>Pin</label>
              <label className="font-semibold">{user.contactAddress.pincode}</label>
            </div>

            <p className="font-semibold">Permanent Address</p>
            <div className="flex items-center justify-between">
              <label>House Name</label>
              <label className="font-semibold">{user.permanentAddress.addressL1}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>State</label>
              <label className="font-semibold">{user.permanentAddress.state}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>District,City</label>
              <label className="font-semibold">{user.permanentAddress.district + ' , '+user.permanentAddress.city}</label>
            </div>

            <div className="flex items-center justify-between">
              <label>Pin</label>
              <label className="font-semibold">{user.permanentAddress.pincode}</label>
            </div>
          </div>
        </div>

        <div className="w-full  h-auto flex p-3  flex-col xl:flex-row  mt-3">
          <div className="xl:w-1/2  p-3  h-full">
            <p className="text-lg my-3 underline font-semibold">
              10th Marks Details-(Mandatory)
            </p>
            <label>Name of Institution*: <p>{user.grade10.school}</p></label>
            <br />
            <label>Board*: {user.grade10.board}</label>
            <div className="w-full mt-3  p-1 border-[2px] rounded-[4px]">
              <img src={marklist10} alt="mrklist10" />
            </div>
          </div>
          <div className="xl:w-1/2  p-3 ">
            <p className="text-lg my-3 underline font-semibold">
              12th Marks Details
            </p>
            <label>Name of Institution: <p>{user.grade12.school}</p></label>
            <br />
            <label>Board: {user.grade12.board}</label>
            <div className="w-full mt-3 h-auto p-1 border-[2px] rounded-[4px]">
              <img src={marklist12} alt="mrklist10" />
            </div>
          </div>
        </div>

        <div className="w-full  h-auto flex p-1 flex-col xl:flex-row">
          <div className="xl:w-1/2 flex items-end  flex-col  p-4 ">
            <p className="text-lg mb-3 underline font-semibold mx-auto ">
              Details of Common Entrance Test (KEAM)
            </p>
            <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Year</label>
                <label className="font-semibold">{user.keam.year}</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-8">Roll No</label>
                <label className="font-semibold">{user.keam.rollNumber}</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Rank</label>
                <label className="font-semibold">{user.keam.rank}</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper I score(Physics & chemistry)
                </label>
                <label className="font-semibold">{user.keam.markPaper1}</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper II score(Mathematics)
                </label>
                <label className="font-semibold">{user.keam.markPaper2}</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Total KEAM Score</label>
                <label className="font-semibold">{user.keam.totalMark}</label>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 px-4 ">
            <p className="text-lg my-3 text-center">KEAM Marklist </p>
            <div className="w-full p-1 border-[2px] rounded-[4px]">
              <img src={marklistKeam} alt="mrklist10" />
            </div>
          </div>
        </div>

        <div className="w-full mt-8 items-center px-5 xl:flex xl:space-x-6">
          <div className=" p-3 rounded-md border-[2px]   lg:w-1/2 ">
            <p className="text-lg font-semibold mb-2">Branch Preference</p>
            <div className="sm:space-x-3 xl:flex justify-between">
              {/* <label>Preference</label> */}
              <label>{branch[user.bp1]}</label>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-center my-6">
            <input type="checkbox" onChange={handlecheck} className="w-4 h-4 mr-2 accent-red-600" />I
            hereby declare that all the information furnished above are true and
            correct and we will obey the rules and regulations of the
            institution if admitted{" "}
          </p>
          <Button color="blue" sx={{color: "#FFF"}} variant="contained" onClick={movetosubmit}>Final Submit</Button>
        </div>
        
      </div>
    </div>
  );
};
