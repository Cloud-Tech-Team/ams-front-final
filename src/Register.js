import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Icons/home.svg";
// import PhoneInput from 'react-phone-number-input'
import {
  Backdrop,
  Button,
  LinearProgress,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

function Register() {
  const nav = useNavigate();

  let nri = true;
  let mgmt = false;
  let gov = false;
  let opc = true;

  const [loader, setLoader] = useState(false);
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [quota, setQuota] = useState("");
  const [pgm, setPgm] = useState("");

  const nriregister = async (e) => {
    e.preventDefault();
    setLoader(true);
    const data = {
      firstName: document.getElementById("fname").value,
      middleName: document.getElementById("mname").value,
      lastName: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      gender: document.getElementById("gender").value,
      course: document.getElementById("program").value,
      quota: document.getElementById("quota").value,
      aadhaar: document.getElementById("aadhar").value,
      dob: document.getElementById("dob").value,
      acadamicYear: document.getElementById("apply-year").value,
    };
    console.log(data);
    axios
      // .post("https://ams-backend-368705.el.r.appspot.com/user/register", data)
      .post("https://ams-backend-api.herokuapp.com/user/register", data)
      .then((response) => {
        console.log(response);
        console.log(data);
        if (response.status === 200) {
          window.alert("Registration success");
          nav("/login");
        } else window.alert(response.statusText);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        window.alert(error.response.data.message);
        setLoader(false);
      });
  };
  return (
    // <div className="w-screen h-screen bg-gradient-to-tl from-rock-blue-300 flex items-center justify-center via-rock-blue-300 to-rock-blue-400 ">
    //   <Backdrop
    //       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    //       open={loader}
    //     >
    //       <div className="w-screen absolute top-0">
    //         <LinearProgress color="primary" />
    //       </div>
    //     </Backdrop>
    //     <form
    //     action=""
    //     className="w-[600px] absolute z-20 h-auto py-8 px-9 space-y-4 rounded-sm bg-white shadow-2xl shadow-zinc-900">
    //     <p className="text-3xl text-center font-semibold uppercase">
    //       Registration
    //     </p>

    //     {/* first_row_div */}
    //     <div className="w-full  h-auto ">
    //       <label htmlFor="name" className="text-lg ml-1 italic">
    //         Name*
    //       </label>

    //       <div className="w-full  h-auto flex space-x-6">
    //         <input
    //           placeholder="First"
    //           autoComplete="new-password"
    //           type="text"
    //           id="fname"
    //           className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
    //         />
    //         <input
    //           placeholder="Middle"
    //           autoComplete="new-password"
    //           type="text"
    //           id="mname"
    //           className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
    //         />
    //         <input
    //           placeholder="Last"
    //           autoComplete="new-password"
    //           type="text"
    //           id="lname"
    //           className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
    //         />
    //       </div>
    //     </div>

    //     {/* sec_row_div */}
    //     <div className="w-full  h-auto ">
    //       <div className="flex w-full justify-between">
    //         <label htmlFor="name" className="text-lg ml-1 italic">
    //           Email*
    //         </label>
    //         <label htmlFor="name" className="text-lg mr-28 italic">
    //           Phone
    //         </label>
    //       </div>

    //       <div className="w-full   h-auto flex space-x-6">
    //         <input
    //           placeholder="Email"
    //           autoComplete="new-password"
    //           type="text"
    //           id="email"
    //           className="h-11 w-2/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
    //         />
    //         <input
    //           placeholder="Phone"
    //           autoComplete="new-password"
    //           type="text"
    //           id="phone"
    //           className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
    //         />
    //       </div>
    //     </div>

    //     {/* third_row_div */}
    //     <div className="w-full  h-auto ">
    //       <div className="flex w-full justify-between">
    //         <label htmlFor="name" className="text-lg ml-1  italic">
    //           Gender*
    //         </label>
    //         <label htmlFor="name" className="text-lg mr-20 italic">
    //           Program*
    //         </label>
    //         <label htmlFor="name" className="text-lg italic">
    //           Quota*
    //         </label>
    //       </div>
    //       <div className="w-full  h-auto flex space-x-6">
    //       <select
    //           name="gender"
    //           autoComplete="new-password"
    //           className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
    //           id="gender"
    //         >
    //           <option value=""></option>
    //           <option value="Male">Male</option>
    //           <option value="Female">Female</option>
    //           <option value="Others">Others</option>
    //         </select>
    //         <select
    //           name="program"
    //           autoComplete="new-password"
    //           className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
    //           id="program"
    //         >
    //           <option value=""></option>
    //           <option value="BTech">BTech</option>
    //           <option value="MTech">MTech</option>
    //           <option value="MCA">MCA</option>
    //         </select>
    //         <select
    //           name="quota"
    //           autoComplete="new-password"
    //           className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
    //           id="quota"
    //         >
    //           <option value=""></option>
    //           {nri && <option value="NRI">NRI</option>}
    //           {gov && <option value="Government">Government</option>}
    //           {mgmt && <option value="Management">Management</option>}
    //           {opc && <option value="Others">OCI/PIO/CIWG</option>}
    //         </select>
    //       </div>
    //     </div>

    //     {/* fourth_row_div */}
    //     <div className="w-full  h-auto ">
    //       <div className="flex w-full justify-between">
    //         <label htmlFor="name" className="text-lg ml-1 italic">
    //           Aadhar Number
    //         </label>
    //         <label htmlFor="name" className="text-lg mr-36 italic">
    //           Date of Birth*
    //         </label>
    //       </div>
    //       <div className="w-full h-auto flex space-x-6">
    //         <input
    //           placeholder="Aadhar No."
    //           autoComplete="new-password"
    //           type="tel"
    //           id="aadhar"
    //           className="h-11 w-1/2 border-[2px] rounded-md pl-4 text-xl  focus:outline-none focus:border-pink-500 italic border-gray-500"
    //         />
    //         <input
    //           onClick={(e) => {
    //             e.target.type = "date";
    //           }}
    //           placeholder="DOB"
    //           autoComplete="new-password"
    //           type="date"
    //           id="dob"
    //           className="h-11 w-1/2 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
    //         />
    //       </div>
    //     </div>

    //     <div className="w-full ">
    //       <label className="text-lg  italic">Choose applying year</label>
    //     <select
    //           name="year"
    //           autoComplete="new-password"
    //           className="h-11 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
    //           id="apply-year"
    //         >
    //           <option value=""></option>
    //           <option value="2022">2022</option>
    //           <option value="2023">2023</option>
    //         </select>
    //     </div>

    //     {/* button_div */}
    //     <div className="w-full pt-2 flex items-center justify-between px-1">
    //       <button className="w-auto h-auto py-2 p-3 uppercase text-white rounded-md  hover:bg-red-700 bg-red-600"
    //       onClick={nriregister}>
    //       Submit
    //       </button>
    //       <p className="font-thin text-lg">Already Registered ? Try <Link className="font-semibold hover:text-blue-500" to="/login">Sign-in</Link></p>
    //     </div>
    //   </form>
    // </div>
    <div className="min-w-screen font-poppins relative min-h-screen py-20 xl:py-0 bg-gradient-to-br flex items-center justify-center from-rock-blue-200 via-rock-blue-300 to-rock-blue-400">
      <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
        >
          <div className="w-screen absolute top-0">
            <LinearProgress color="primary" />
          </div>
        </Backdrop>
      <Link to="/">
        <img className="absolute top-6 left-6" src={Home} alt="home" />
      </Link>
      <div className="w-11/12 sm:w-3/5 p-3 rounded-md shadow-xl xl:w-2/5  bg-white">
        <p className="text-center text-3xl my-6 font-semibold uppercase">
          Registration
        </p>
        <div className="grid grid-row-3 xl:py-5 p-3 lg:grid-cols-3 gap-3">
          <TextField
            required
            label="First Name"
            id="fname"
            size="small"
          />
          <TextField label="Middle Name" id="mname" size="small" />
          <TextField required label="Last Name" id="lname" size="small" />
        </div>

        <div className="grid grid-row-3 py-5 p-3 lg:grid-cols-3 gap-3">
          <TextField
            className="lg:col-span-2"
            required
            label="Email"
            type="email"
            id="email"
            size="small"
            fullWidth
          />

          <TextField
            required
            label="Mobile No.(in Kerala)"
            id="phone"
            size="small"
          />
        </div>

        <div className="grid grid-row-3 py-5 p-3 lg:grid-cols-3 gap-3">
          <FormControl size="small">
            <InputLabel id="gendr">Gender</InputLabel>
            <Select
              labelId="gendr"
              id="gender"
              value={gender}
              label="Gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel id="qta">Quota</InputLabel>
            <Select
              labelId="qta"
              id="quota"
              value={quota}
              label="Quota"
              onChange={(e) => setQuota(e.target.value)}
            >
              {nri && <MenuItem value="NRI">NRI</MenuItem>}
              {mgmt && <MenuItem value="Management">Management</MenuItem>}
              {gov &&  <MenuItem value="Government">Government</MenuItem>}
              {opc && <MenuItem value="Others">OCI/PIO/CIWG</MenuItem>}
            </Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel id="pgm">Program</InputLabel>
            <Select
              labelId="pgm"
              id="program"
              value={pgm}
              label="Program"
              onChange={(e) => setPgm(e.target.value)}
            >
              <MenuItem value="BTech">BTech</MenuItem>
              <MenuItem value="MTech">MTech</MenuItem>
              <MenuItem value="MCA">MCA</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="grid grid-row-3 py-5 p-3 lg:grid-cols-3 gap-3">
          <FormControl size="small">
            <InputLabel id="apply-year-label">Applying Year</InputLabel>
            <Select
              labelId="apply-year-label"
              id="apply-year"
              value={year}
              label="Applying year"
              onChange={(e) => setYear(e.target.value)}
            >
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Aadhar No." id="aadhar" size="small" />
          <TextField
            required
            label="Date of Birth"
            type="date"
            id="dob"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="p-3 flex items-center justify-between">
          <Button onClick={nriregister} variant="contained">Submit</Button>
          <p>
            Already Registered?{" "}
            <Link to="/login" className="text-blue-600">
              Sign-In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
