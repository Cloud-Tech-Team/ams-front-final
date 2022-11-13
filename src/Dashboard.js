import React from "react";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SchoolIcon from "@mui/icons-material/School";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import { jsPDF } from "jspdf";
import nri from "./nri.jpg";
import application from "./application.pdf";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



const Dashboard = () => {
  const nav = useNavigate();
  const signout = () => {
    localStorage.removeItem("access_token");
    nav("/login");
  };

  const doc = new jsPDF("p", "mm", [297, 210]);
  const [user,setUser] = useState();
  const [img,setImg] = useState();

  function toDataUrl(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

  const handleClick = async(e) => {
    e.preventDefault();
      try {
        await axios
          .get("https://ams-backend-api.herokuapp.com/user/nri/application", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          })
          .then((res) => {
            console.log("this is the response \n" + res);
            if (res.status === 200) {
              setUser(res.data.user);
              toDataUrl(res.data.user.filePhotograph,function(myBase64) {setImg(myBase64.toString())})
            } else {
              window.alert("Something wrong happened");
            }
          });
      } catch (error) {
        window.alert("error wrong happened");
      }

    doc.setFontSize(15);
    doc.rect(8, 8, 194, 282); //border
    // doc.addImage(imgData, 'JPEG', 15, 12, 80, 18)
    doc.addImage(img,'JPEG', 160, 45, 35, 40)//photo goes here
    doc.rect(8, 8, 194, 25); //small box
    doc.text(120, 20, "Varikoli P.O, Puthencruz - 682308");
    doc.text(155, 28, "Ernakulam - Kerala");
    doc.text(60, 40, "Application for B-Tech NRI Quota 2023"); //Update year
    doc.rect(8, 8, 194, 80);
    doc.setFont("times", "bold");
    doc.text(12, 50, "Application No : ");
    doc.setFontSize(30);
    doc.setFont("times", "normal");
    doc.text(12, 65, user.applicationNo ); // user.applicationNo goes here
    doc.setFontSize(15);
  
    doc.setFont("times", "bold");
    doc.text(12, 95, "Personal Details : ");
    doc.setFont("times", "normal");
    doc.rect(10, 98, 190, 10 * 11); //presonal details small box
    doc.rect(10, 98, 90, 10 * 5); //presonal details partition
    for (
      let i = 0;
      i < 16;// i => no of rows
      i++ 
    )
      doc.rect(10, 98 + 10 * i, 190, 10);
  
    doc.text(12, 95 + 10 * 1, "1.Name of applicant : ");
    let name = ''
    if(user.middleName){
      name = user.firstName + ' ' + user.middleName + ' ' + user.lastName
    }else{
      name = user.firstName + ' ' + user.lastName
    }
    doc.text(102, 95 + 10 * 1,name); //user.fName+user.mName+user.lName
  
    doc.text(12, 113, "2.Date of Birth : ");
    doc.setFontSize(10);
    doc.text(12, 117, "(age proof to be attached)");
    doc.setFontSize(15);
    let dob = new Date(user.dob)
    doc.text(102, 95 + 10 * 2, dob.toISOString().split('T')[0] ); //user.dob
  
    doc.text(12, 95 + 10 * 3, "3.Name of the parent/guardian : ");
    doc.text(102, 95 + 10 * 3, user.guardianDetails.name.toString()); //user.guardian.name
  
    doc.text(12, 95 + 10 * 4, "4.Occupation of the parent/guardian : ");
    doc.text(102, 95 + 10 * 4, user.guardianDetails.occupation.toString()); //user.guardian.occupation
  
    doc.text(12, 95 + 10 * 5, "5.ADDRESS :"); //user.permanentAddress
    doc.text(40, 95 + 10 * 6, user.permanentAddress.addressL1.toString());
    doc.text(40, 95 + 10 * 7, user.permanentAddress.city.toString());
    doc.text(40, 95 + 10 * 8, user.permanentAddress.district.toString());
    doc.text(12, 95 + 10 * 9, "State :");
    doc.text(30, 95 + 10 * 9, user.permanentAddress.state.toString()); //user.address.state
  
    //doc.text(12,95,'Pin');
    doc.text(107, 95 + 10 * 9, "Pin :");
    doc.text(120, 95 + 10 * 9, user.permanentAddress.pincode.toString()); //user.address.pin
  
    doc.rect(10, 98 + 90, 90, 10 * 7); //presonal details partition
    doc.text(12, 95 + 10 * 10, "6.Email : ");
    doc.text(102, 95 + 10 * 10, user.email); //user.email
  
    doc.text(12, 95 + 10 * 11, "7.Phone No(Kerala): ");
    doc.text(102, 95 + 10 * 11, user.phone.toString()); //user.phoneK
  
    doc.text(12, 95 + 10 * 12, "8.Phone No(alternate): ");
    doc.text(102, 95 + 10 * 12, user.phone.toString()); //user.phoneM
  
    doc.text(12, 95 + 10 * 13, "9.Name of sponser :");
    doc.text(102, 95 + 10 * 13, user.NRIdetails.name.toString()); //user.sponser
  
    doc.text(12, 95 + 10 * 14, "10.Relation with applicant :");
    doc.text(102, 95 + 10 * 14, user.NRIdetails.relation.toString()); //usre.relation
  
    doc.text(12, 95 + 10 * 15, "11.Selected Branch :");
    doc.text(102, 95 + 10 * 15, user.bp1.toString()); //user.bp
  
    doc.text(12, 95 + 10 * 16, "12.Transaction ID :");
    doc.text(102, 95 + 10 * 16, user._id.toString()); //user.transactionId
    doc.setFontSize(10);
    doc.text(70, 288, "This file was generated on " + today);
    doc.text(95, 295, "page 1"); //page No
  
    //New Page
    doc.addPage();
    doc.setFontSize(15);
    doc.rect(8, 8, 194, 282); //border
    // doc.addImage(imgData, 'JPEG', 15, 12, 80, 18)
    doc.rect(8, 8, 194, 25); //small box
    doc.text(120, 20, "Varikoli P.O, Puthencruz - 682308");
    doc.text(155, 28, "Ernakulam - Kerala");
    doc.setFont("times", "bold");
    doc.text(80, 45, "UNDERTAKING");
    doc.text(12, 55, "GROUP A");
    doc.setFont("times", "normal");
    doc.text(
      12,
      65,
      'I am aware about the criteria followed by "Muthoot Institute of Technology and \nScience", for the B-Tech NRI Quota admission for the year 2023, such that my \nward has to attain 75% Marks for Mathematics individually and 75% put together \nin Physics, Chemistry & Mathematics, in the 12th stadard, for Qualifying \nexamination(CBSE/ISC) OR attain 75% Marks for Mathematics individually and \n75% put together in Physics, Chemistry & Mathematics, in the 12th stadard\n(Terminal-evaluation TE), for Qualifying examination(State Board).\nIf my ward failed to do so, there is no claim, from my side for the admission'
    );
    doc.setFont("times", "bold");
    doc.text(12, 120, "GROUP B");
    doc.setFont("times", "normal");
    doc.text(
      12,
      130,
      'I am aware about the criteria followed by "Muthoot Institute of Technology and \nScience", for the B-Tech NRI Quota admission for the year 2023, such that my \nward has to attain 70% Marks for Mathematics individually and 70% put together \nin Physics, Chemistry & Mathematics, in the 12th stadard, for Qualifying \nexamination(CBSE/ISC) OR attain 70% Marks for Mathematics individually and \n70% put together in Physics, Chemistry & Mathematics, in the 12th stadard\n(Terminal-evaluation TE), for Qualifying examination(State Board).\nIf my ward failed to do so, there is no claim, from my side for the admission'
    );
  
    doc.text(12, 85 + 10 * 11, "Name of the parent/guardian : ");
    doc.text(85, 85 + 10 * 11, "a"); //user.guardian.name
  
    doc.text(12, 85 + 10 * 12, "Date : ");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    doc.text(30, 85 + 10 * 12, "a"); //date of application
  
    doc.setFontSize(10);
    doc.text(70, 288, "This file was generated on " + today);
    doc.text(95, 295, "page 2"); //page No
  
    let pdf = doc.save("MITS_application");
      console.log(pdf)
  };

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
            <button
              onClick={signout}
              className="w-32 h-12 mr-2 font-bold rounded-md border-[2px] border-black hover:bg-gray-300"
            >
              Sign Out
            </button>
            <button
              onClick={handleClick}
              className="w-32 text-white text-center h-12 rounded-md bg-gray-800 hover:bg-gray-700"
            >
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
            City, District, State, pin: 364378
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
            City, District, State, pin: 364378
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
