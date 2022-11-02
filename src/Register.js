import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Register() {
  const nav = useNavigate()
  const nriregister = async(e) =>{
     e.preventDefault();
     const data ={
       firstName:document.getElementById("fname").value,
       middleName:document.getElementById("mname").value,
       lastName:document.getElementById("lname").value,
       email:document.getElementById("email").value,
       phone:document.getElementById("phone").value,
       gender:document.getElementById("gender").value,
       course:document.getElementById("program").value,
       quota:document.getElementById("quota").value,
       aadhaar:document.getElementById("aadhar").value,
       dob:'2000-10-10',
       age:20
     }
     console.log(data);

     axios.post("https://ams-backend-api.herokuapp.com/user/register",data)
     .then((response)=>{
        console.log(response);
        if(response.status===200){
          window.alert("Registration success");
          nav('/login')
        }
     }).catch((error)=>{
      console.log(error)
      window.alert("Registration Failed")
    })
  }
  return (
    <div className="w-screen h-screen bg-gradient-to-tl from-rock-blue-300 flex items-center justify-center via-rock-blue-300 to-rock-blue-400 ">
        <form
        action=""
        className="w-[600px] absolute z-20 h-auto py-8 px-9 space-y-4 rounded-sm bg-white shadow-2xl shadow-zinc-900">
        <p className="text-3xl text-center font-semibold uppercase">
          Registration
        </p>

        {/* first_row_div */}
        <div className="w-full  h-auto ">
          <label htmlFor="name" className="text-lg ml-1 italic">
            Name*
          </label>

          <div className="w-full  h-auto flex space-x-6">
            <input
              placeholder="First"
              type="text"
              id="fname"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Middle"
              type="text"
              id="mname"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Last"
              type="text"
              id="lname"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
          </div>
        </div>

        {/* sec_row_div */}
        <div className="w-full  h-auto ">
          <div className="flex w-full justify-between">
            <label htmlFor="name" className="text-lg ml-1 italic">
              Email*
            </label>
            <label htmlFor="name" className="text-lg mr-28 italic">
              Phone
            </label>
          </div>

          <div className="w-full   h-auto flex space-x-6">
            <input
              placeholder="Email"
              type="text"
              id="email"
              className="h-11 w-2/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Phone"
              type="text"
              id="phone"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
          </div>
        </div>

        {/* third_row_div */}
        <div className="w-full  h-auto ">
          <div className="flex w-full justify-between">
            <label htmlFor="name" className="text-lg ml-1  italic">
              Gender*
            </label>
            <label htmlFor="name" className="text-lg mr-20 italic">
              Program*
            </label>
            <label htmlFor="name" className="text-lg italic">
              Quota*
            </label>
          </div>
          <div className="w-full  h-auto flex space-x-6">
          <select
              name="gender"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
              id="gender"
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <select
              name="program"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
              id="program"
            >
              <option value=""></option>
              <option value="BTech">BTech</option>
              <option value="MTech">MTech</option>
            </select>
            <select
              name="quota"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
              id="quota"
            >
              <option value=""></option>
              <option value="NRI">NRI</option>
              <option value="Government">Government</option>
              <option value="Management">Management</option>
            </select>
          </div>
        </div>

        {/* fourth_row_div */}
        <div className="w-full  h-auto ">
          <div className="flex w-full justify-between">
            <label htmlFor="name" className="text-lg ml-1 italic">
              Aadhar Number
            </label>
            <label htmlFor="name" className="text-lg mr-36 italic">
              Date of Birth*
            </label>
          </div>
          <div className="w-full h-auto flex space-x-6">
            <input
              placeholder="Aadhar No."
              type="tel"
              id="aadhar"
              className="h-11 w-1/2 border-[2px] rounded-md pl-4 text-xl  focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              onClick={(e) => {
                e.target.type = "date";
              }}
              placeholder="DOB"
              type="date"
              id="dob"
              className="h-11 w-1/2 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
          </div>
        </div>

        {/* button_div */}
        <div className="w-full pt-2 flex items-center justify-between px-1">
          <button className="w-auto h-auto p-3 text-xl text-white rounded-md italic hover:bg-pink-600 bg-pink-800"
          onClick={nriregister}>
          Submit
          </button>
          <p className="font-thin text-lg">Already Registered ? Try <Link className="font-semibold hover:text-blue-500" to="/login">Sign-in</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
