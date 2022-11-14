import React from "react";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import { TextField, Checkbox, Button, Dialog } from "@mui/material";
import { Stepper, Step, StepLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Payment() {
  const nav = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('dashboard'))
      nav('/dashboard')
  }, [])
  const [enable, setEnable] = useState(true);
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
    console.log(e.target.id)
    setslipselect(true)
  }
  const finalsubmit = async(e) =>{
      e.preventDefault()
      // window.confirm("After final submit no changes can be made, Proceed?")
      const formData= new FormData()
      formData.append("fileTransactionID", document.getElementById('Transactionslip').files[0]);
      formData.append("transactionID",document.getElementById("TransactionId").value);
      console.log(formData);
      if(slipselect === true){
        try{
        await axios
        .patch("https://ams-backend-api.herokuapp.com/user/nri/application-page5/" +localStorage.getItem("user_id"),
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) =>{
          console.log(res)
          if(res.data.status === "SUCCESS "){
            window.alert("Your Application Was Submitted")
            nav("/dashboard")
          }else{
            window.alert("Something Went Wrong..Try again")
          }
        })
      }catch(error){
        console.log(error)
      }
     }
  }

    
    return(
    <div className="font-poppins min-h-screen  w-11/12 lg:w-3/5 py-20">
      <div className="h-auto w-full mt-10 p-6 space-y-5 bg-white rounded-[4px] ">
        <p className="text-center mb-4 font-semibold text-red-500">
          Pay advance Provisional registration fee of Rs 1,00,500 to the
          following bank account and upload the photo of transaction slip here
        </p>
        <div className="w-full sm:flex  p-2 ">
          <div className="sm:w-1/2 space-y-5">
            <p>
              Name: <b>Muthoot Institute of Technolgy and Science</b>
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
            <div className="w-full sm:flex items-center ">
              <p className="text-md mr-3">Transaction No:</p>
              <input
                id="TransactionId"
                type="text"
                className="rounded-[4px] p-1  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400  "
              />
            </div>
          </div>
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
