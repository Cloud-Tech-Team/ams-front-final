import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Backdrop, Button, LinearProgress, TextField } from "@mui/material";
import Home from "./Icons/home.svg"

const Login = () => {
  const api = 'https://ams-backend-687825430145.asia-east1.run.app/'
  const [loading, setLoading] = useState(false);
  const [ForgotPassword, setForgotPassword] = useState(false);
  const nav = useNavigate();
  const handlelogin = (e) => {
    e.preventDefault();
    setLoading(true)

    const data = {
      applicationNo: document.getElementById("userID").value,
      password: document.getElementById("password").value,
    };
    console.log(data);
    axios
      .post(api+"user/login", data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoading(false)
          if(response.data.applicationCompleted){
              localStorage.setItem('dashboard',true)
              nav('/dashboard')
          }
          else{
            localStorage.setItem('dashboard',false)
            if(response.data.quota === 'Others' )
              nav("/supernumery");
            else
              nav("/nriform")
          }
          // window.alert("login success")
          localStorage.setItem("access_token", response.data.token);
          localStorage.setItem("user_id", data.applicationNo);
        } else {
          setLoading(false)
          window.alert("login failed");
        }
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
        window.alert("Something went wrong, try again");
      });
      
  };
  const recover = (e) => {
    e.preventDefault();
    const data = {
      applicationNo: document.getElementById("application").value,
    };

    axios
      .post("https://ams-backend-api.herokuapp.com/user/recover", data)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          window.alert("password forwared to reg email");
          document.getElementById("application").value = null;
          setForgotPassword(!ForgotPassword);
        } else {
          window.alert("invalid email");
        }
      })
      .catch((e) => {
        console.log(e);
        window.alert("error");
      });
  };
  return (
    <div className="min-w-screen relative  h-screen flex items-center justify-center bg-gradient-to-br  from-rock-blue-200 via-rock-blue-300 to-rock-blue-400">
      <div className="w-full top-1 h-14 absolute flex items-center justify-between px-8">
        <Link to="/">
        <img  src={Home} alt="home" />
        </Link>
        <p className="absolute text-right text-sm xl:text-md right-6 top-6"><b className="text-red-600">Note:</b>&nbsp;The login credentials<br/> has been sent to your <br/>registered email-id<br/><b className="text-red-600">Check the spam folder also</b></p>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <div className="w-screen absolute top-0"><LinearProgress color="primary"/></div>
        </Backdrop>
      </div>
      {ForgotPassword ? (
        <form
          action=""
          className="w-80 sm:w-96 p-4 sm:p-8  h-auto absolute z-20 shadow-2xl rounded-sm  bg-white"
        >
          <p className="text-2xl sm:text-3xl mt-3 uppercase text-center  sm:font-semibold">
            Forgot Password
          </p>
          <div className="w-full mt-5 space-y-7 p-2 h-auto ">
            <p className="h-auto text-center w-full border-[2px] text-red-700 bg-red-50 rounded-md p-3 text-md border-red-700 italic ">
              We will resend the the credentials to your registered email id
            </p>
            <TextField
              required
              label="Application No."
              type="email"
              id="application"
              size="small"
              fullWidth
            />
            <Button variant="contained" onClick={recover}>
              Resend
            </Button>
          </div>
          <p
            onClick={() => {
              setForgotPassword(!ForgotPassword);
            }}
            className="text-right  cursor-pointer hover:text-red-700 text-lg mr-4 "
          >
            Sign-In
          </p>
        </form>
      ) : (
        <form
          action=""
          onSubmit={Login}
          className="w-80 sm:w-[350px] p-4 sm:p-8  h-auto absolute z-20 shadow-2xl rounded-sm  bg-white"
        >
          <p className="text-4xl mt-3 text-center sm:font-semibold">SIGN-IN</p>
          <div className="w-full mt-5 space-y-8 p-2 h-auto ">
            <TextField
              required
              label="Registration No."
              type="text"
              id="userID"
              size="small"
              fullWidth
            />
            <TextField
              required
              label="Password"
              type="password"
              id="password"
              varient="outlined"
              size="small"
              fullWidth
            />
            <Button variant="contained" onClick={handlelogin}>
              Sign-In
            </Button>
          </div>
          <p
            onClick={() => {
              setForgotPassword(!ForgotPassword);
            }}
            className="text-right cursor-pointer hover:text-red-700 text-lg mr-4 "
          >
            Forgot Password!
          </p>
        </form>
       
      )}
          <Link to="/adminlogin" className="absolute z-50 bottom-10 right-10 underline" >Admin</Link>
       
    </div>
  );
};

export default Login;
