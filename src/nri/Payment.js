import React from "react";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import { TextField, Checkbox, Button, Dialog } from "@mui/material";
import { Stepper, Step, StepLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const steps = ["Personal Details", "Payment"];
function Payment() {
  const [enable,setEnable] = useState(true);
  const handleCheck=()=>{
    if(document.getElementById("check").checked === true){
    console.log("something")
    setEnable(false)      
    }else{
      setEnable(true)
    }
  }
  return (
    <>
      <div className=" xl:w-[1180px] my-[30px] xl:my-auto">
        <Stepper className="xl:w-[780px] px-3 mx-auto" activeStep={1}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="w-full bg-white space-y-3 rounded-md h-auto py-6 font-poppins flex flex-col px-20 shadow-md mt-8">
          <div className="w-full flex justify-center space-x-4">
            <ErrorTwoToneIcon color="primary" />
            <label className="text-red-500 font-semibold ml-5 italic ">
              Pay advance Provisional registration fee of Rs 1,00,500 to the
              following bank account and upload the photo of transaction slip
              here
            </label>
          </div>

          <div className="w-full h-auto flex">
          <div className="w-1/2 space-y-5 flex flex-col ">
              <label>
                Name: <b>Muthoot Institute of Technolgy and Science</b>
              </label>
              <label>
                Address: <b>Varikoli, Puthencruz - 682308</b>
              </label>
              <label>
                Phone: <b>0484-2732100</b>
              </label>
              <label>
                Bank: <b>FEDERAL BANK</b>
              </label>
              <label>
                Address: <b>PUTHENCRUZ</b>
              </label>
              
          </div>
          <div className="w-1/2 space-y-5 flex flex-col ">
                <label>
                      Branch: <b>Puthencruz</b>
                    </label>
                <label>
                  Phone: <b>0484-2731259</b>
                </label>
                <label>
                  IFSC Code: <b>FDRL0001223</b>
                </label>
                <label>
                  MICR Code: <b>682049055</b>
                </label>
          </div>
          </div>
          <label className="py-5">Branch Selected: Computer Science</label>
          <div className="w-full flex justify-center ">
            <label className="text-md mr-3">Transaction Slip:</label>
            <TextField
              label="Photo Upload"
              type="file"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
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
              // onClick={() => {
              //   window.alert(
              //     "After final Submit no further changes can be made, Proceed ?"
              //   );
              // }}
              variant="contained"
              type="submit"
              id="submitButton"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
