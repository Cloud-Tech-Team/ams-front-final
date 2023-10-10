import Payment from "./Payment";
import Personal from "./Personal";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MobileStepper,
  Tooltip,
} from "@mui/material";
import { Stepper, Step, StepLabel } from "@mui/material";
import { color } from "@mui/system";

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
  const [page,setPage]  = useState();
  useEffect(() => {
    return () => {
      setPage(localStorage.getItem('pageNo'))
    };
  })
  const nav = useNavigate();
  const handleHelp = () => {
    setHelp(!help);
    console.log(help);
  };

  const signout = () => {
    localStorage.removeItem("access_token");
    nav("/login");
  };

  return (
    <div className="min-w-screen   h-auto bg-gradient-to-tl from-rock-blue-300 via-rock-blue-300 to-rock-blue-400 flex justify-center">
      <div className="w-full z-30  flex fixed top-0 bg-gradient-to-tl from-rock-blue-300 via-rock-blue-400 to-rock-blue-400 items-center justify-between p-4">
        <Tooltip title="Help">
          <button
            onClick={handleHelp}
            className=" bg-gray-100 rounded-full p-1 "
          >
            <ContactSupportIcon fontSize="large" />
          </button>
        </Tooltip>
        <div className="mx-auto lg:hidden">
          <p>{steps[page-1]}</p>
        </div>
        <Stepper
          className="w-[0px] lg:w-3/5 invisible lg:visible"
          activeStep={page}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* <MobileStepper 
      variant="dots"
      steps={steps.length}
      position="static"
      activeStep={2}
      sx={{
        width: "30%",
        position: "absolute",
        "background-color": "transparent",
        left : "50%",
      }}
      >
      </MobileStepper> */}

        <Tooltip title="Log out">
          <button onClick={signout} className=" bg-gray-200 rounded-full p-1 ">
            <AccountCircleIcon fontSize="large" />
          </button>
        </Tooltip>
        {help && (
          <Dialog open={help} onClose={handleHelp}>
            <DialogTitle>Help</DialogTitle>
            <DialogContent>
              Welcome to Muthoot Institute of Technology and Science(MITS).
              Kindly fill the following procedure in order to complete your application
              form. Please make sure you click the upload button to upload your image files.
              For any queries or problems happening in between, kindly contact our admission team 
              through the following ways:
              Phone: Mr. Binoy P K 9446717178
              Phone: Ms. Jeena Varghese 9946652762
              Phone: Ms. Rija Jose 6309387606
              Mail: mitsadmissions@mgits.ac.in
            </DialogContent>
            <DialogActions>
              <Button onClick={handleHelp}>Close</Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Form;
