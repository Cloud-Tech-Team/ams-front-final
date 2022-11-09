import Payment from "./Payment";
import Personal from "./Personal";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import {Routes,Route,Navigate, useNavigate, Outlet} from 'react-router-dom'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import { Stepper, Step, StepLabel} from "@mui/material";


const steps = [
  "Personal Details",
  "Educational Details",
  "Declaration",
  "Final Verification",
  "Payment",
];

// const CssTextField = styled(TextField)({
//     '& input:valid + fieldset': {
//         // borderColor: 'black',
//         // borderWidth: 1,
//     },
// });

function Form() {
  const [help, setHelp] = useState(false);
  const [form, setForm] = useState(false);
  const nav = useNavigate()
  const handleHelp = () => {
    setHelp(!help);
    console.log(help);
  };

  const signout=()=>{
    localStorage.removeItem("access_token")
    nav("/login")
  }
  
  return (
    
    <div className="min-w-screen flex-col h-auto bg-gradient-to-tl from-rock-blue-300 via-rock-blue-300 to-rock-blue-400 flex justify-center">
      <div className="w-full h-16 flex fixed top-0 bg-gradient-to-tl from-rock-blue-300 via-rock-blue-400 to-rock-blue-400 items-center justify-between px-3">
      <Tooltip title="Help">
        <button onClick={handleHelp} className=" bg-gray-100 rounded-full p-1 right-8 top-8">
          <ContactSupportIcon fontSize="large" />
        </button>
      </Tooltip>
      <Stepper className="w-3/5 invisible lg:visible" activeStep={1}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Tooltip title="Log out">
        <button onClick={signout} className=" bg-gray-200 rounded-full p-1 left-8 top-8">
          <AccountCircleIcon fontSize="large" />
        </button>
      </Tooltip>
      {help && (
        <Dialog open={help} onClose={handleHelp}>
          <DialogTitle>Help</DialogTitle>
          <DialogContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </DialogContent>
          <DialogActions>
            <Button onClick={handleHelp}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
      </div>
      <Outlet/>

    </div>
  );
}

export default Form;
