import React from 'react'
import { Link, Navigate, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import HomeIcon from '@mui/icons-material/Home';
import { Button ,TextField } from '@mui/material';

const Login = () => {
  const [ForgotPassword, setForgotPassword] = useState(false);
  const nav = useNavigate()
  const handlelogin=(e)=>{
    e.preventDefault()

    const data={
      applicationNo:document.getElementById("userID").value,
      password     :document.getElementById("password").value,
    }
    console.log(data)
    axios
    .post("https://ams-backend-api.herokuapp.com/user/login",data)
    .then((response) => {
      console.log(response)
      if(response.status === 200){
        nav("/nriform")
        window.alert("login success")
        localStorage.setItem("access_token", response.data.token);
        localStorage.setItem("user_id",data.applicationNo)
      }else{
        window.alert("login failed")
      }
    }).catch((error)=>{
      console.log(error)
      window.alert('login failed')
    })
  }

  return (
    <div className="min-w-screen relative  h-screen flex items-center justify-center bg-zinc-700">
      <div className="w-full top-1 h-14 absolute z-20 flex items-center justify-between px-8">
        <Link to="/">
        <HomeIcon fontSize='large' color="white"/>
        </Link>
      </div>
      {ForgotPassword ? (
        <form
          action=""
          className="w-80 sm:w-96 p-4 sm:p-8  h-auto absolute z-20 shadow-xl rounded-sm shadow-zinc-900 bg-white"
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
              label="Registered email"
              type="email"
              id="email-id"
              size="small"
              fullWidth />
           <Button variant='contained'>
                Resend
            </Button>
          </div>
          <p
            onClick={() => {
              setForgotPassword(!ForgotPassword);
            }}
            className="text-right cursor-pointer hover:text-red-700 text-lg mr-4 "
          >
            Sign-In
          </p>
        </form>
      ) : (
        <form
          action=""
          onSubmit={Login}
          className="w-80 sm:w-[350px] p-4 sm:p-8  h-auto absolute z-20 shadow-xl rounded-sm shadow-zinc-900 bg-white"
        >
          <p className="text-4xl mt-3 text-center sm:font-semibold">SIGN-IN</p>
          <div className="w-full mt-5 space-y-8 p-2 h-auto ">
          <TextField
            required
              label="Registration No."
              type="text"
              id="userID"
              size="small"
              fullWidth />
            <TextField
            required
              label="Password"
              type="password"
              id="password"
              varient="outlined"
              size='small'
              fullWidth
            />
            <Button variant='contained' onClick={handlelogin}>
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
    </div>
  )
}

export default Login