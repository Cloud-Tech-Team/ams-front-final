import React, { useState } from "react";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  IconButton,
  Tooltip,
  CircularProgress,
  LinearProgress,
  Dialog,
  DialogTitle,
  Box,
} from "@mui/material";
import { Stepper, Step, StepLabel } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

function Personal() {
  const [course, setCourse] = useState("");
  const [eye, setEye] = useState(false);
  const steps = [
    "Personal Details",
    "Educational Details",
    "Declaration",
    "Final Verification",
    "Payment",
  ];
  const [loader, setLoader] = useState(false);
  const [check, setCheck] = useState(true);

  const handleEye = () => {
    setTimeout(setEye(!eye), 3000);
  };

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  function autofill() {
    setCheck(!check);
    console.log(check);
    //do autofill
  }

  return (
    <div className=" xl:w-[1180px] mx-auto flex items-center justify-center h-screen ">
      
      <div className="w-full bg-white rounded-md h-auto flex flex-col xl:flex-row shadow-md mt-6">
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
          <div className=" flex items-center  p-5  justify-between">
            <TextField
              label="Photo Upload"
              type="file"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <p className="text-center p-2 bg-red-100 rounded-md w-1/2 text-sm mx-3">
               Please select a passport size photo of file size less than 5mb
            </p>
            {/* <Tooltip arrow title={eye ? "preview" : "no preview"}>
              <IconButton
                sx={{ p: 1, mr: 1 }}
                onClick={handleEye}
                aria-label="upload picture"
                component="label"
              >
                {eye ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                {eye && <CircularProgress sx={{ position: "absolute" }} />}
              </IconButton>
            </Tooltip> */}
            {/* <Button variant="contained" type="submit">
              Upload
            </Button> */}
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
            <Checkbox
              className="ml-6"
              id="checkbox"
              onClick={autofill}
            ></Checkbox>
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
          <div className=" flex px-5 py-2 mt-5 space-x-5">
            <FormControl className="w-full" size="small">
              <InputLabel id="demo-select-small">Course</InputLabel>
              <Select
                id="demo-select-small"
                value={course}
                onChange={handleChange}
                label="Course"
              >
                <MenuItem value={10}>Computer Science and Engineering</MenuItem>
                <MenuItem value={20}>CSE (Artificial Intelligence)</MenuItem>
                <MenuItem value={30}>
                  Artificial Intelligence & Data Science
                </MenuItem>
                <MenuItem value={40}>Cyber Security</MenuItem>
                <MenuItem value={50}>
                  Electronics and Communications Engineering
                </MenuItem>
                <MenuItem value={60}>
                  Electrical and Electronics Engineering
                </MenuItem>
                <MenuItem value={70}>Mechanical Engineering</MenuItem>
                <MenuItem value={80}>Civil Engineering</MenuItem>
              </Select>
            </FormControl>
            <Button
              onClick={() => {
                setLoader(!loader);
                localStorage.setItem({step: "3"})
              }}
              variant="contained"
            >
              <Link to="/nriform/education">Save</Link>
            </Button>
            <Dialog
              open={loader}
              onClose={() => {
                setLoader(!loader);
              }}
            >
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9aYvIvK5n5XSvS1U-QsNAmEvuKL4DYb7dw&usqp=CAU" /> */}
              <div className="w-56 h-32 space-y-4 p-4 flex flex-col items-center justify-center">
                <p className="text-lg text-black">Saving...</p>
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
