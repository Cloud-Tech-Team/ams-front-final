import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Backdrop, LinearProgress } from "@mui/material";
import FormData from "form-data";

const Declaration = () => {
  const api = 'https://ams-backend-368717.el.r.appspot.com/'
  const [loader, setLoader] = useState(false);
  const [msg,setMsg] = useState('');
  const [filesign, setFilesign] = useState();
  const [signPick,setSignPick] = useState(false)
  const [filesignP, setFilesignP] = useState();
  const [signPickP,setSignPickP] = useState(false);
  const [isChecked , setIschecked] = useState(false);
  const [issignuploaded, setIssignuploaded] = useState(false);
  const [parentSignuploaded, setParentsignuploaded] = useState(false);
  const [quota, setQuota] = useState()
  const [b, setB] = useState(false)
  const [branch,setBranch] = useState()
  const [disable,setDisable] = useState(true)

  const nav = useNavigate();
  localStorage.setItem("pageNo", 3);
  
  useEffect(() => {
    setLoader(true);

    axios
      .get(api+"user/nri/application", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setLoader(false);
        console.log(res);
        if(res.data.user.bp1!=null){
          setB(true);
          setBranch(res.data.user.bp1);
          document.getElementById("bp").value = res.data.user.bp1; 
        }
        res.data.user.bp1 ? setMsg(<p className="text-green-500 text-lg">Branch already selected</p>):setMsg(<p>Branch not selected</p>)
        if(res.data.user.imgSign != null){
             setSignPick(true)
             setIssignuploaded(true)
        }
        if(res.data.user.parentSign != null){
          setSignPickP(true);
          setParentsignuploaded(true);
        }
        setQuota(res.data.user.quota);
      });
  }, [b]);

  const handleBranch = async (e) => {
   e.preventDefault()
   setLoader(true)
  //  setB(!b)
   if(!b){
   const branch = document.getElementById("bp").value;
   console.log(branch);
   try{
    await 
    axios.post(api+"/branch/get",{},{
      headers:{
        Authorization:"Bearer " + localStorage.getItem("access_token"),
      }
    }).then((res) =>{
      console.log(res)
      setLoader(false)
      for(let i=0; i<res.data.list.length ; i++){
         if(res.data.list[i].name === branch){
             if(quota === "oci" || quota==="pio" || quota==="ciwg"){
              if(res.data.list[i].SuperOccupied < res.data.list[i].SuperSeats){
                setMsg(<p className="text-green-500 text-lg">Seat available</p>)
              }else{
                setMsg(<p className="text-red-500 text-lg">Seats in Preferred branch are filled..Please select another one</p>)
              }
             }else if(quota === "NRI"){
              if(res.data.list[i].NRIOccupied < res.data.list[i].NRISeats){
                setMsg(<p className="text-green-500 text-lg">Seat available</p>)
              }else{
                setMsg(<p className="text-red-500 text-lg">Seats in Preferred branch are filled..Please select another one</p>)
              }
             }else{
              if(res.data.list[i].MgmtOccupied < res.data.list[i].MgmtSeats){
                setMsg(<p className="text-green-500 text-lg">Seat available</p>)
              }else{
                setMsg(<p className="text-red-500 text-lg">Seats in Preferred branch are filled..Please select another one</p>)
              }
             }
         }
      }
    })
   }catch(error){
    console.log(error)
   }}else{
    window.alert("You cant Change the Branch Once Selected")
    document.getElementById("bp").value = branch;
    setLoader(false)
   }
  };
  
 
  const handlesign = async(e) =>{
    console.log(e.target.id);
    const file = (document.getElementById("sign").files[0]).name;
    console.log(file)
    const extension = file.split(".").pop();
    const validex = ["png","jpg","jpeg"]
    if(! validex.includes(extension)){
      window.alert("Please select an image file(.jpg/jpeg/png)")
      setDisable(true)
    }
    else{
      setDisable(false)
      setSignPick(true);
    }
    setFilesign(e.target.files[0]);
  }


  const signupload = async(e) =>{
     e.preventDefault()
     setLoader(true)
     const formData = new FormData();
     formData.append("imgSign", filesign);
     console.log(formData);
     if (signPick === true) {
      try {
        await axios
          .patch(api+"user/nri/application-page3/" +localStorage.getItem("user_id"),
            formData,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.data.status === "SUCCESS ") {
              window.alert("Signature Uploaded Successfully");
            } else {
              window.alert("Something Went Wrong..Upload Again");
            }
          });
      } catch (error) {
        window.alert("Technical Error..Try Again Later"+error.message);
      }
    } else {
      window.alert("Please selcet the Signature");
    }
    setLoader(false)
  }

  const handleParentSign = async(e) =>{
    console.log(e.target.id);
    const file = (document.getElementById("signP").files[0]).name;
    console.log(file)
    const extension = file.split(".").pop();
    const validex = ["png","jpg","jpeg"]
    if(! validex.includes(extension)){
      window.alert("Please select an image file(.jpg/jpeg/png)")
      setDisable(true)
    }
    else{
      setDisable(false)
      setSignPickP(true);
    }
    setFilesignP(e.target.files[0]);
  }

  const signuploadParent = async(e) =>{
    e.preventDefault()
    setLoader(true)
    const formData = new FormData();
    formData.append("parentSign", filesignP);
    console.log(filesignP)
    console.log(formData);
    if (signPickP === true && signPick === true) {
     try {
       await axios
         .patch(api+"user/nri/application-page3/" +localStorage.getItem("user_id"),
           formData,
           {
             headers: {
               Authorization: "Bearer " + localStorage.getItem("access_token"),
               "Content-Type": "multipart/form-data",
             },
           }
         )
         .then((res) => {
           console.log(res);
           if (res.data.status === "SUCCESS ") {
             window.alert("Signature Uploaded Successfully");
           } else {
             window.alert("Something Went Wrong..Upload Again");
           }
         });
     } catch (error) {
       window.alert("Technical Error..Try Again Later"+error.message);
     }
   } else {
     window.alert("Please selcet the Signature of Parent");
   }
   setLoader(false)
 }
  
  const handlecheck = async(e) =>{
    setIschecked(true)
    console.log(e.target.id)
  }
  const handleProceed = async(e) => {
    setLoader(true);
    e.preventDefault();
    const data = {
      bp1: document.getElementById("bp").value,
    };
    if(msg.props.children === 'Seats in Preferred branch are filled..Please select another one'){
      window.alert("Seats in Preferred branch are filled..Please select another one")
      setLoader(false)
    }
    else{
    if(isChecked === true && signPick === true && signPickP === true ){
    try{
    await axios
      .patch(api+"user/nri/application-page3/" +localStorage.getItem("user_id"),
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then((res) => {
        setLoader(false);
        nav("/nriform/verification");
        if (res.data.status === "SUCCESS") {
          console.log(res);
        } else {
          console.log(res);
          console.log("Something went wrong");
        }
      });
    }catch(error){
      console.log(error)
      window.alert("Technical Error..Try Again Later")
    }
  }else{
    setLoader(false)
    window.alert("Kindly undertake the regulations");
  }}
  };
  return (
    <div className="font-poppins py-20 h-auto min-h-screen  mx-auto w-11/12 lg:w-3/5 flex items-center xl:my-auto">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        {loader && <LinearProgress color="primary" />}
        <CircularProgress color="blue"/>
      </Backdrop>
      <div className="h-auto   w-full p-6 bg-white  rounded-[4px] ">
        <div className=" w-auto  rounded-md border-[2px] p-4 py-8 space-y-6">
          <p className="text-lg mb-4">Branch Preference</p>
          <div className="sm:space-x-3 xl:flex justify-between">
            <label>Select Branch</label>
            <select
              className="rounded-[4px] w-11/12 sm:w-auto  border-[1px] hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              id="bp"
              onChange={handleBranch}
            >
              <option value=""></option>
              <option value="CSE">Computer Science and Engineering</option>
              <option value="CY">CSE(Cyber Security)</option>
              <option value="AI">CSE(AI)</option>
              <option value="AI&DS">AI&DS</option>
              <option value="CE">Civil Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="EEE">Electrical and Electronics Engineering</option>
              <option value="ECE">Electronics and Communication Engineering</option>
            </select>
          </div>
          <label>{msg}</label>
        </div>
        <p className="text-xl my-6 text-center underline">Instructions</p>
        <div className="w-full space-y-4 p-2">
          <p className="font-semibold ">1.GROUP A branches [ECE, CSE, Artificial Intelligence, AI&DS, CyberSecurity]</p>
          <p>
            I am aware about the criteria followed by "Muthoot Institute
            of Technology and Science", for the B-Tech NRI Quota admission for
            the year 2025, such that my ward has to attain 80% Marks for
            Mathematics individually and 80% put together in Physics, Chemistry
            & Mathematics, in the 12th standard, for Qualifying
            examination(CBSE/ISC) OR attain 80% Marks for Mathematics
            individually and 80% put together in Physics, Chemistry &
            Mathematics, in the 12th standard(Terminal Evaluation TE), for
            Qualifying examination(State Board). If my ward failed to do so,
            there is no claim, from my side for the admission
          </p>
          <p className="font-semibold ">2.GROUP B branches [CE, ME, EEE,]</p>
          <p>
            I am aware about the criteria followed by "Muthoot Institute of
            Technology and Science", for the B-Tech NRI Quota admission for the
            year 2025, such that my ward has to attain 75% Marks for Mathematics
            individually and 75% put together in Physics, Chemistry &
            Mathematics, in the 12th standard, for Qualifying
            examination(CBSE/ISC) OR attain 75% Marks for Mathematics
            individually and 75% put together in Physics, Chemistry &
            Mathematics, in the 12th standard(Terminal Evaluation TE), for
            Qualifying examination(State Board). If my ward failed to do so,
            there is no claim, from my side for the admission
          </p>
        </div>

        <div className="w-full space-y-4 p-2 border-[3px] rounded-md mt-3 border-red-500">
          <p className="text-center font-semibold text-red-600 underline">EXIT OPTION </p>
          <p>
          1. A student can opt to <b className="bg-yellow-200">EXIT</b> from NRI quota before <b>5 </b>
          days, after the publication of <b className="bg-yellow-200">KEAM 2025 SCORE/answer key</b> whichever is earlier and will be reimbursed with
          the entire amount after deducting Rs
          <b> 1000</b> as processing fee. However, a student will be automatically
          considered for MITS Management Merit Quota from NRI quota if he desires so
          and has to <b className="bg-yellow-200">freeze</b> the registration in MITS by sending an email to admissions@mgits.ac.in .<b className="bg-yellow-200">Request for exit</b> should be
          mailed to <b className="bg-yellow-200">admissions@mgits.ac.in</b> within the stipulated time. There
          after the registered choice will be frozen and will not be eligible
          for any refund, if the admission is cancelled after 5 days from the
          date of KEAM SCORE publication.
          </p>
        
          <p>
          <b>2. </b> I hereby declare that I have read all the instructions,
          Exit options and undertake that all the information furnished above
          are true and correct and I will obey the rules and regulations of the
          institution if admitted
          </p>
        </div>
        <p className="mt-6 text-center"> <input id="proof" onChange={handlecheck} type="checkbox" className="w-4 h-4 accent-red-600 mr-2"/><label>I have clearly read the instructions mentioned above and would like to proceed further</label></p>

        <div className=" xl:flex items-center mt-3 gap-4 justify-center">
          <p className="font-semibold">Signature Upload (applicant)*</p>
          {/* {issignuploaded && <p className="text-green-500 text-center bg-green-200 rounded-md px-2 border-[2px] border-green-400">Already<br/>uploaded</p>} */}
          {/* {issignuploaded && <p className="text-green-500 text-center">Already uploaded</p>} */}
          <span className="sm:space-x-3">
          <input
            id="sign"
            onChange={handlesign}
            type="file"
            className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400  "
          />
          
          <Button
            disabled={disable} variant="contained" onClick={signupload}>Upload</Button>
          </span>
          
        </div>  
        {issignuploaded && <p className="text-green-500 text-center">Already uploaded</p>}
        <div className=" xl:flex items-center mt-3 gap-4 justify-center">
          <p className="font-semibold ">Signature Upload (Parent/Gaurdian)*</p>
         
          <span className="sm:space-x-3">
          <input
            id="signP"
            onChange = { handleParentSign }
            type="file"
            className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400  "
          />
          
          
          <Button
            disabled={disable} variant="contained" onClick={signuploadParent}>Upload</Button>
          </span>
        </div>        
        {parentSignuploaded && <p className="text-green-500 text-center">Already uploaded</p>}
       
        <p className="text-center my-4 text-red-600">
          upload an image file (jpeg/png) of size less than 2mb*
        </p>
        

        <Button
          
          sx={{
            color: "#fff",
            
          }}
          color="greenary"
          variant="contained"
          onClick={handleProceed}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default Declaration;
