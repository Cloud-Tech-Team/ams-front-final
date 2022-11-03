import React from "react";
import { Link } from "react-router-dom";
import logo from "./Icons/logo.png";
// import reg from "./Icons/reg.png";
import Typewriter from "typewriter-effect";
import video from "./videos/muthoot-video.mp4"
import mits_logo from "./Icons/MITS.png"

function AMS() {
  return (
    <div className="w-screen h-screen  bg-shade">
      <div className="w-screen z-10 h-screen opacity-70 bg-gray-900 absolute"></div>
      <div className="flex fixed z-20 font-poppins items-center text-white cursor-pointer space-x-8 justify-between p-8 w-screen h-16">
       <div className="w-auto flex gap-8">
       <p className="text-xl hover:text-red-600">Home</p>
        <p className="text-xl hover:text-red-600">About</p>
        <Link
          to="/register"
          className="text-xl  hover:text-red-600 underline"
        >
          Register
        </Link>
        <Link to="/login" className="text-xl  hover:text-red-600 underline">
          Login
        </Link>
       </div>
        <img className="h-20 mt-3" src={mits_logo}/>
      </div>
      {/* <div className="bg-shade w-full  sm:flex sm:flex-col md:flex-row justify-between p-8 h-full"> */}
        <div className="w-[380px] absolute z-50 mt-20 xl:mt-14 xl:ml-40 2xl:mt-24 h-[520px] 2xl:ml-20">
          <div className="h-[300px]  rounded-md w-[400px]  shadow-xl bg-slate-300 top-8 -right-10 absolute"></div>
          <div className="h-[300px]  rounded-md w-[400px]  shadow-xl bg-slate-200 top-12 -right-16 absolute"></div>
          <div className="h-[300px] rounded-md w-[400px] shadow-xl  bg-slate-50 top-16 -right-24 absolute">
            <div className="w-full  bg-slate-400 h-6 flex items-center p-3 space-x-2 justify-start rounded-tr-md rounded-tl-md">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
            </div>
            <div className="w-1/2 h-1/2 sm:w-full  italic sm:h-full py-4 px-5 text-lg ">
              <Typewriter
                options={{
                  strings: [
                    "<u>Registration</u> <br/> Lorem ipsum – These words tell the brain to focus all attention on the visual design and safely ignore the content. The purpose of lorem ipsum is to create a natural looking, though nonsensical, text that doesn't distract from the layout.",
                    "<u>Login</u> <br/> Lorem ipsum – These words tell the brain to focus all attention on the visual design and safely ignore the content.",
                    "<u>Forms</u> <br/> Lorem ipsum – These words tell the brain to focus all attention on the visual design and safely ignore the content.",
                    "<u>Payment</u> <br/> Lorem ipsum – These words tell the brain to focus all attention on the visual design and safely ignore the content.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 20,
                  deleteSpeed: 20,
                  pauseFor: 10000,
                }}
              />
            </div>
          </div>
        </div>
        <video className="object-cover object-bottom h-screen w-full" src={video} autoPlay loop muted />
      {/* </div> */}
    </div>
  );
}

export default AMS;
