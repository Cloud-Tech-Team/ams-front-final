import React from "react";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SchoolIcon from '@mui/icons-material/School';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import { jsPDF } from "jspdf"
import nri from "./nri.jpg"

const doc = new jsPDF();
const handle_click = () => {
   doc.addImage(nri,0,0,210,297)
    doc.save("dash.pdf")
}

const Dashboard = () => {
  return (
    <div className="w-screen overflow-x-hidden h-screen bg-slate-200">
      <div className="w-full relative bg-white h-[140px] sm:h-[230px]">
        <img
          src="https://th.bing.com/th/id/R.4b016087bef1cdb837ae3cf6a366de59?rik=u5ZKGPBtamCH2w&riu=http%3a%2f%2fmgmits.ac.in%2fwp-content%2fuploads%2f2019%2f05%2fmits.jpg&ehk=8%2b0FtsP83SD2uVTuQmjohvP5frJoWmAcW8lB8%2f7nJ8g%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="w-screen h-full object-cover "
        />
      </div>
      <div className=" m-8 lg:absolute top-24 right-10 rounded-md bg-gray-100 shadow-2xl h-auto w-auto">
        <div className="w-full h-3/5 rounded-md flex pt-8 items-center justify-center ">
          <div className="w-44 h-44 rounded-full border-[3px] border-black">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              alt=""
              className="object-cover h-full rounded-full w-full"
            />
          </div>
        </div>
        <div className="w-full p-4 rounded-md h-2/5 ">
          <p className="text-center font-bold text-lg uppercase ">
            Marc Benedict
          </p>
          <div className="w-full font-semibold text-center text- italic h-auto py-6">
            Dob:&nbsp;&nbsp;12/02/2001
            <br />
            dhjgchx@gmail.com
            <br />
            Ph1: 8923-398-329
            <br />
            Ph2: 4923-598-129
          </div>
          <div className="flex space-x-2 items-center justify-center w-full h-auto">
            <button className="w-32 h-12 mr-2 font-bold rounded-md border-[2px] border-black hover:bg-gray-300">
              Sign Out
            </button>
            <button onClick={handle_click} className="w-32 text-white text-center h-12 rounded-md bg-gray-800 hover:bg-gray-700">
              Print
            </button>
          </div>
        </div>
      </div>
      <div className="xl:w-4/6 lg:flex lg:space-x-8 lg:space-y-0 space-y-4 lg:p-8 m-8 h-auto">
        <div className="xl:w-1/2 p-8 space-y-2 shadow-xl bg-white rounded-md">
          <div className="w-full flex items-center space-x-3">
          <SupervisorAccountIcon />
          <p className="text-2xl sm:text-3xl mb-2 ">Parental Details</p>
          </div>
          <p className="text-lg font-light mb-2 italic ">
            {" "}
            Parent/Gaurdian: <b>Benedict</b>
            <br />
            Occupation: <b>Advocate</b>
            <br />
            Relation with Applicant: <b>Father</b>
            <br />
            NRI Sponsor: <b>Nil</b>
          </p>
          <div className="w-full flex items-center space-x-3">
          <HomeIcon />
          <p className="text-2xl sm:text-3xl mb-2 ">Permanent Address</p>
          </div>
          <p className="text-lg font-light italic ">
            {" "}
            123 Main Street, New York, NY 10030
            <br />
            City, District, State,
            pin: 364378
          </p>
        </div>
        <div className="xl:w-1/2 p-8 shadow-xl bg-white rounded-md">
        <div className="w-full flex items-center space-x-3">
          <CallIcon />
          <p className="text-2xl sm:text-3xl mb-2 ">Contact Address</p>
          </div>
          <p className="text-lg font-light italic ">
            {" "}
            123 Main Street, New York, NY 10030
            <br />
            City, District, State,
            pin: 364378
          </p>
          <div className="w-full flex pt-8 items-baseline space-x-3">
          <SchoolIcon />
          <p className="text-2xl sm:text-3xl  ">Course Details</p>
          </div>
          <p className="text-lg font-light mt-2 italic ">
            {" "}
            Course: <b>B-Tech</b>
            <br />
            Quota: <b>NRI</b>
            <br />
            Branch Opted: <b>Computer Science (waiting list 1)</b>
            <br />
            Academic Year: <b>2021-2025</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
