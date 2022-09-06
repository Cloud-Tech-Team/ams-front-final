import React from "react";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import { TextField, Checkbox ,Button} from "@mui/material";

function Payment() {
  return (
    <>
      <div className="w-full bg-white space-y-3 rounded-md h-auto py-6 font-inter flex flex-col items-center shadow-md mt-6">
        <div className="w-full flex justify-center space-x-4">
          <ErrorTwoToneIcon color="primary" />
          <label className="text-red-500 font-semibold ml-5 italic ">
            Pay advance Provisional registration fee of Rs 1,00,500 to the
            following bank account and upload the photo of transaction slip here
          </label>
        </div>

        <label className="text-lg">
          Name: <b>Muthoot Institute of Technolgy and Science</b>
        </label>
        <label className="text-lg">
          Address: <b>Varikoli, Puthencruz - 682308</b>
        </label>
        <label className="text-lg">
          Phone: <b>0484-2732100</b>
        </label>
        <label className="text-lg">
          Bank: <b>FEDERAL BANK</b>
        </label>
        <label className="text-lg">
          Address: <b>PUTHENCRUZ</b>
        </label>
        <label className="text-lg">
          Branch: <b>Puthencruz</b>
        </label>
        <label className="text-lg">
          Phone: <b>0484-2731259</b>
        </label>
        <label className="text-lg">
          IFSC Code: <b>FDRL0001223</b>
        </label>
        <label className="text-lg">
          MICR Code: <b>682049055</b>
        </label>
        <label className="text-lg">Branch Selected: Computer Science</label>
        <div className="w-full flex justify-center ">
          <label className="text-lg mr-3">Transaction Slip:</label>
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
              <Checkbox className="ml-6"></Checkbox>
              <label>I agree that I have reviewed the form, and is proceeding for final Submit</label>
            </div>
            <div className="w-full flex space-x-4 justify-center items-center">
            
              <Button variant="outlined" type="submit">
                Back
              </Button>
              <Button onClick={()=>{window.alert("After final Submit no further changes can be made, Proceed ?")}} variant="contained" type="submit">
                Submit
              </Button>
              </div>
      </div>
     
    </>
  );
}

export default Payment;
