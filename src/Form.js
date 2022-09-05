import React, { useState } from "react";
import {
  TextField,
  styled,
  Stepper,
  Step,
  StepLabel,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// const CssTextField = styled(TextField)({
//     '& input:valid + fieldset': {
//         // borderColor: 'black',
//         // borderWidth: 1,
//     },
// });
const steps = ["Personal Details", "Payment"];

function Form() {
  const [age, setAge] = React.useState("");
  const [eye, setEye] = useState(false);

  const handleEye = () => {
    setTimeout(setEye(!eye),3000)
  };
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="w-screen h-auto xl:h-screen bg-gradient-to-tl from-rock-blue-300 via-rock-blue-300 to-rock-blue-400 flex justify-center">
      <div className=" xl:w-[1180px] my-[30px] xl:my-auto">
        <Stepper className="xl:w-[780px] px-3 mx-auto" activeStep={0}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* <form className="w-full rounded-md bg-white h-full shadow-md  p-8 justify-center space-x-2 mt-8">
         
          
          <TextField
            label="DOB"
            type="date"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
         
          <TextField
            label="Photo Upload"
            type="file"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
         
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Course</InputLabel>
            <Select
              id="demo-select-small"
              value={age}
              onChange={handleChange}
              label="Course"
            >
              <MenuItem value={10}>BTech</MenuItem>
              <MenuItem value={20}>MTech</MenuItem>
              <MenuItem value={30}>MCA</MenuItem>
            </Select>
          </FormControl>
        </form> */}
        <div className="w-full bg-white rounded-md h-auto flex flex-col xl:flex-row shadow-md mt-8">
          <div className="xl:w-1/2 h-[584px] pt-6 ">
            <div className="flex items-center justify-center p-5 space-x-2">
              <TextField label="First Name" type="text" size="small" required />
              <TextField label="Middle Name" type="text" size="small" />
              <TextField label="Last Name" type="text" size="small" />
            </div>

            <div className=" flex  p-5 space-x-2">
              <TextField
                label="Contact Ph. No(M)"
                type="text"
                size="small"
                required
              />
              <TextField
                label="Contact Ph. No(Kerala)"
                type="text"
                size="small"
                required
              />
              <TextField
                label="DOB"
                type="date"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className=" flex  p-5  justify-between">
              <TextField
                label="Photo Upload"
                type="file"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <Tooltip arrow title={eye ? "preview" : "no preview"}>
                <IconButton
                  sx={{ p: 1, mr: 1 }}
                  onClick={handleEye}
                  aria-label="upload picture"
                  component="label"
                >
                  {eye ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                  {eye && <CircularProgress sx={{ position: "absolute" }}/>}
                </IconButton>
              </Tooltip>
              <Button onClick={handleEye} variant="contained">Upload</Button>
            </div>
            <div className=" flex flex-col space-y-2 p-5 mt-4 ">
              <label className="text-xl ml-2">Contact Address</label>
              <TextField
                fullWidth
                label="House Name"
                type="text"
                size="small"
                required
              />
            </div>
            <div className=" flex items-center p-5 space-x-2">
              <TextField
                className="w-1/2"
                label="State"
                type="text"
                size="small"
                required
              />
              <TextField
                className="w-1/2"
                label="District"
                type="text"
                size="small"
              />
            </div>
            <div className=" flex items-center p-5 space-x-2">
              <TextField
                className="w-1/2"
                label="City"
                type="text"
                size="small"
                required
              />
              <TextField
                className="w-1/2"
                label="Pincode"
                type="text"
                size="small"
              />
            </div>
          </div>
          <div className="xl:w-1/2  h-[584px]">
            <div className=" flex flex-col space-y-2 p-5 mt-1 ">
              <label className="text-xl ml-2">Permanent Address</label>
              <TextField
                fullWidth
                label="House Name"
                type="text"
                size="small"
                required
              />
            </div>
            <div className=" flex items-center p-5 space-x-2">
              <TextField
                className="w-1/2"
                label="State"
                type="text"
                size="small"
                required
              />
              <TextField
                className="w-1/2"
                label="District"
                type="text"
                size="small"
              />
            </div>
            <div className=" flex items-center p-5 space-x-2">
              <TextField
                className="w-1/2"
                label="City"
                type="text"
                size="small"
                required
              />
              <TextField
                className="w-1/2"
                label="Pincode"
                type="text"
                size="small"
              />
            </div>
            <div className="w-full px-3">
              <Checkbox className="ml-6"></Checkbox>
              <label>Use Contact address as Permanent address</label>
            </div>

            <div className=" flex items-center p-5 space-x-2">
              <TextField
                className="w-1/2"
                label="Parent/Gaurdian"
                type="text"
                size="small"
                required
              />
              <TextField
                className="w-1/2"
                label="Occupation"
                type="text"
                size="small"
              />
            </div>
            <div className=" flex items-center p-5 space-x-2">
              <TextField
                className="w-1/2"
                label="NRI Sponsor"
                type="text"
                size="small"
                required
              />
              <TextField
                className="w-1/2"
                label="Relation with applicant"
                type="text"
                size="small"
              />
            </div>
            <div className=" flex px-5 py-2 mt-5 justify-between ">
              <FormControl className="w-96" size="small">
                <InputLabel id="demo-select-small">Course</InputLabel>
                <Select
                  id="demo-select-small"
                  value={age}
                  onChange={handleChange}
                  label="Course"
                >
                  <MenuItem value={10}>Computer Science</MenuItem>
                  <MenuItem value={20}>Electronics and Communications</MenuItem>
                  <MenuItem value={30}>Electrical and Electronics</MenuItem>
                  <MenuItem value={40}>Mechanical</MenuItem>
                  <MenuItem value={50}>Civil</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
