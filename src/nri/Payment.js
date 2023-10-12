import React from "react";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import { TextField, Checkbox, Button, CircularProgress, Backdrop } from "@mui/material";
import { Stepper, Step, StepLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Payment() {
  localStorage.setItem("pageNo", 5);
  const [enable, setEnable] = useState(true);
  // const [disable, setDisable] = useState(true);
  const nav = useNavigate()
  const [loader,setLoader] = useState(false)

  useEffect(() => {
    axios
      .get("https://ams-backend-368717.el.r.appspot.com/user/nri/application", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        console.log(res)
        document.getElementById("TransactionId").value = res.data.user.transactionID === undefined ? " " : res.data.user.transactionID ;
        if(res.data.user.fileTransactionID != null){
            setslipselect(true)
        }
      });
  }, []);

  const handleCheck = () => {
    if (document.getElementById("check").checked === true) {
      console.log("something");
      setEnable(false);
    } else {
      setEnable(true);
    }
  }

  const [slipselect, setslipselect] = useState(false)
  const handleslip = async(e) =>{
    // console.log(e.target.id)
    // const file = (document.getElementById("Transactionslip").files[0]).name;
    // console.log(file)
    // const extension = file.split(".").pop();
    // const validex = ["png","jpg","jpeg"]
    // if(! validex.includes(extension)){
    //   window.alert("Please select an image file(.jpg/jpeg/png)")
    //   setDisable(true)
    // }
    // else{
    //   setDisable(false)
      setslipselect(true)
    // }
  }
  const finalsubmit = async(e) =>{
    setLoader(true)
    const api = 'https://ams-backend-368717.el.r.appspot.com/'
      e.preventDefault()
      const formData= new FormData()
      formData.append("fileTransactionID", document.getElementById('Transactionslip').files[0]);
      formData.append("transactionID",document.getElementById("TransactionId").value);
      console.log(formData);
      if(slipselect === true){
        try{
        await axios
        .patch(api+"user/nri/application-page5/" +localStorage.getItem("user_id"),
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) =>{
          console.log(res)
          if(res.data.status === "SUCCESS"){
            window.alert("Your Application Was Submitted")
            nav("/dashboard")
          }else{
            window.alert("Something Went Wrong..Try again")
          }
        })
      }catch(error){
        console.log(error)
        window.alert("Technical Error..Try Again Later")
      }
     }else{
      window.alert("Please Fill The Required Fields")
     }
     setLoader(false)
  }

    
    return(
    <div className="font-poppins min-h-screen  w-11/12 lg:w-3/5 py-20">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="blue"/>
      </Backdrop>
      <div className="h-auto w-full mt-10 p-6 space-y-3 bg-white rounded-[4px] ">
        <p className="text-center mb-4 font-semibold text-red-500">
          Pay  Provisional registration fee of Rs 1,50,500 for CSE ,Rs 1,00,500 for CS(AI),AI & DS,CS(CY),ECE and Rs 50,500 for Group-B programmes to the
          following bank account and upload the photo of transaction slip here
        </p>
        <div className="w-full sm:flex  p-2 ">
          <div className="sm:w-1/2 space-y-5">
            <p>
              Name: <b>Muthoot M George Institute of Technology</b>
            </p>
            <p>
              Address: <b>Varikoli, Puthencruz - 682308</b>
            </p>
            <p>
              Phone: <b>0484-2732100</b>
            </p>
            <p>
              Bank: <b>FEDERAL BANK</b>
            </p>
            <p>
              Address: <b>PUTHENCRUZ</b>
            </p>
          </div>

          <div className="sm:w-1/2 space-y-5">
            <p>
              Branch: <b>Puthencruz</b>
            </p>
            <p>
              Phone: <b>0484-2731259</b>
            </p>
            <p>
              IFSC Code: <b>FDRL0001223</b>
            </p>
            <p>
              MICR Code: <b>682049055</b>
            </p>
            <p>
              Account No.: <b>12230200217387</b>
            </p>
          </div>
          </div>
          <div className="w-full flex justify-center ">
              <p className="text-md mr-3">Transaction No:</p>
              <input
                id="TransactionId"
                type="text"
                className="rounded-[4px] p-1  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400  "
              />
            </div>
          <div className="w-full flex justify-center ">
            <label className="text-md mr-3">Transaction Slip:</label>
            <input
              id="Transactionslip"
              onChange = {handleslip}
              type="file"
              required
            />
          </div>
          <p className="text-center text-red-600">Upload an <b>image</b> file of size less than 2mb</p>
          <div className="w-full flex justify-center items-center">
            <Checkbox id="check" onClick={handleCheck} required className="ml-6"></Checkbox>
            <label>
              I agree that I have reviewed the form, and is proceeding for final
              Submit
            </label>
          </div>
          <div className="w-full flex space-x-4 justify-center items-center">
            <Button variant="contained" type="submit">
              <Link to="/nriform">Back</Link>
            </Button>
            <Button
            disabled = {enable} 
              
              onClick={finalsubmit}
              variant="contained"
              type="submit"
              id="submitButton"
            >
              Submit
            </Button>
          </div>
        </div>
    </div>
    
  );
}

export default Payment;
