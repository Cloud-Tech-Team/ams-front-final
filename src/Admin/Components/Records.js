import { Button, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { Verification } from "../../nri/Verification";
import { useState } from "react";
import { jsPDF } from "jspdf";

const Records = (props) => {
  const [viewMore, setViewMore] = useState(false);
  const [user, setUser] = useState(props.data);

  const branch = {
    CSE: "Computer Science and Engineering",
    ECE: "Electronics and Communication Engineering",
    EEE: "Electrical and Electronics Engineering",
    ME: "Mechanical Engineering",
    CE: "Civil Engineering",
    CY: "Computer Science and Engineering(CY)",
    AI: "Computer Science and Engineering(AI)",
    "AI&DS": "Artificial intelligence & Data Science",
  };

  const [img, setImg] = useState(
    toDataUrl(user.filePhotograph, function (myBase64) {
      setImg(myBase64.toString());
    })
  );
  const [signature, setSignature] = useState(
    toDataUrl(user.parentSign, function (myBase64) {
      setSignature(myBase64.toString());
    })
  );
  const [childSign, setChildSign] = useState(
    toDataUrl(user.imgSign, function (myBase64) {
      setChildSign(myBase64.toString());
    })
  );

  let name = props.data.middleName
    ? props.data.firstName +
      " " +
      props.data.middleName +
      " " +
      props.data.lastName
    : props.data.firstName + " " + props.data.lastName;
  let date = new Date(props.data.registrationTimeStamp);

  function toDataUrl(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

  const printPdf = () => {
    const doc = new jsPDF("p", "mm", [297, 210]);
    let logo =
      "data:image/jpg;base64,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";
    doc.setFontSize(15);
    doc.rect(8, 8, 194, 282); //border
    doc.addImage(logo, "JPEG", 15, 12, 80, 18);
    doc.addImage(img, "JPEG", 160, 45, 35, 40); //photo goes here
    doc.rect(8, 8, 194, 25); //small box
    doc.text(120, 20, "Varikoli P.O, Puthencruz - 682308");
    doc.text(155, 28, "Ernakulam - Kerala");
    const title =
      "Application for " +
      [
        user.course.slice(0, 1),
        "-",
        user.course.slice(1, user.course.length),
      ].join("") +
      " " +
      user.quota.toString().toUpperCase() +
      " Quota " +
      user.academicYear.toString();
    doc.text(60, 40, title); //Update year
    doc.rect(8, 8, 194, 80);
    doc.setFont("times", "bold");
    doc.text(12, 50, "Application No : ");
    doc.setFontSize(30);
    doc.setFont("times", "normal");
    doc.text(12, 65, user.applicationNo); // user.applicationNo goes here
    doc.setFontSize(15);

    doc.setFont("times", "bold");
    doc.text(12, 95, "Personal Details : ");
    doc.setFont("times", "normal");
    doc.rect(10, 98, 190, 10 * 11); //presonal details small box
    doc.rect(10, 98, 90, 10 * 5); //presonal details partition
    for (
      let i = 0;
      i < 16; // i => no of rows
      i++
    )
      doc.rect(10, 98 + 10 * i, 190, 10);

    doc.text(12, 95 + 10 * 1, "1.Name of applicant : ");
    let name = "";
    if (user.middleName) {
      name = user.firstName + " " + user.middleName + " " + user.lastName;
    } else {
      name = user.firstName + " " + user.lastName;
    }
    doc.text(102, 95 + 10 * 1, name); //user.fName+user.mName+user.lName

    doc.text(12, 113, "2.Date of Birth : ");
    doc.setFontSize(10);
    doc.text(12, 117, "(age proof to be attached)");
    doc.setFontSize(15);
    let dob = new Date(user.dob);
    console.log(dob.toLocaleDateString("en-GB"));
    doc.text(102, 95 + 10 * 2, dob.toLocaleDateString("en-GB")); //user.dob

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

    doc.text(12, 95 + 10 * 11, "7.Phone No.(Kerala): ");
    doc.text(102, 95 + 10 * 11, user.phone.toString()); //user.phoneK

    doc.text(12, 95 + 10 * 12, "8.Phone No.(alternate): ");
    doc.text(102, 95 + 10 * 12, user.aPhone.toString()); //user.phoneM

    doc.text(12, 95 + 10 * 13, "9.Name of sponsor :");
    doc.text(102, 95 + 10 * 13, user.NRIdetails.name.toString()); //user.sponser

    doc.text(12, 95 + 10 * 14, "10.Relation with applicant :");
    doc.text(102, 95 + 10 * 14, user.NRIdetails.relation.toString()); //usre.relation

    doc.text(12, 95 + 10 * 15, "11.Selected Branch :");
    doc.text(102, 95 + 10 * 15, branch[user.bp1]); //user.bp

    doc.text(12, 95 + 10 * 16, "12.Transaction ID :");
    doc.text(102, 95 + 10 * 16, user.transactionID.toString()); //user.transactionId
    doc.setFontSize(10);

    let today = new Date(user.registrationTimeStamp);
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    doc.text(70, 288, "This file was generated on " + today);
    doc.text(95, 295, "page 1"); //page No

    //New Page
    doc.addPage();
    doc.setFontSize(15);
    doc.rect(8, 8, 194, 282); //border
    doc.addImage(logo, "JPEG", 15, 12, 80, 18);
    doc.rect(8, 8, 194, 25); //small box
    doc.text(120, 20, "Varikoli P.O, Puthencruz - 682308");
    doc.text(155, 28, "Ernakulam - Kerala");
    doc.setFont("times", "bold");
    doc.text(80, 45, "UNDERTAKING");
    doc.text(12, 55, "GROUP A");
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text(
      12,
      60,
      'I am aware about the criteria followed by "Muthoot Institute of Technology and Science", for the B-Tech NRI \nQuota admission for the year 2024, such that my ward has to attain 80% Marks for Mathematics individually \nand 80% put together in Physics, Chemistry & Mathematics, in the 12th standard, for Qualifying examination\n(CBSE/ISC) OR attain 80% Marks for Mathematics individually and 80% put together in Physics, Chemistry \n& Mathematics, in the 12th standard(Terminal-evaluation TE), for Qualifying examination(State Board). \nIf my ward failed to do so, there is no claim, from my side for the admission'
    );
    doc.setFontSize(15);
    doc.setFont("times", "bold");
    doc.text(12, 100, "GROUP B");
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text(
      12,
      105,
      'I am aware about the criteria followed by "Muthoot Institute of Technology and Science", for the B-Tech NRI \nQuota admission for the year 2024, such that my ward has to attain 75% Marks for Mathematics individually \nand 75% put together in Physics, Chemistry & Mathematics, in the 12th standard, for Qualifying examination\n(CBSE/ISC) OR attain 75% Marks for Mathematics individually and 75% put together in Physics, Chemistry \n& Mathematics, in the 12th standard(Terminal-evaluation TE), for Qualifying examination(State Board). \nIf my ward failed to do so, there is no claim, from my side for the admission'
    );
    doc.setFontSize(15);
    doc.setFont("times", "bold");
    doc.text(12, 145, "EXIT OPTION");
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.setFillColor(234, 245, 22); //highligh colour
    doc.rect(51, 148, 10, 5, "F"); //exit
    doc.rect(155, 148, 36, 5, "F"); //keam 2023 score
    doc.rect(12, 148 + 15, 10, 5, "F"); //freze
    doc.rect(149, 148 + 15, 20, 5, "F"); //request for exit
    doc.rect(29, 148 + 20, 42, 5, "F"); //admissions@mgits.ac.in
    doc.text(
      12,
      152,
      "1. A student can opt to EXIT from NRI quota before 5 days, after the publication of KEAM 2024 SCORE/answer key(whichever is earlier) and \nwill be reimbursed with the entire amount after deducting Rs 1000 as processing fee. However, a student will \nbe automatically considered for MITS Management Merit Quota from NRI quota if he desires so and has to \nfreeze the registration in MITS by sending an email to admissions@mgits.ac.in . Request for exit should be \nmailed to admissions@mgits.ac.in within the stipulated time. There after the registered choice will be frozen \nand will not be eligible for any refund, if the admission is cancelled after 5 days from the date of \nKEAM SCORE publication."
    );
    doc.setFontSize(15);

    doc.text(12, 85 + 10 * 13, "Name of the parent/guardian : ");
    doc.text(12, 85 + 10 * 15, "Signature of parent/guardian");
    doc.addImage(signature, "JPEG", 12, 240, 40, 25);

    doc.text(140, 85 + 10 * 14, "Signature of applicant");
    doc.addImage(childSign, "JPEG", 150, 230, 40, 25);
    doc.text(80, 85 + 10 * 13, user.guardianDetails.name.toString()); //user.guardian.name

    doc.text(12, 85 + 10 * 14, "Date : ");
    doc.text(30, 85 + 10 * 14, today); //date of application

    doc.setFontSize(10);
    doc.text(70, 288, "This file was generated on " + today);
    doc.text(95, 295, "page 2"); //page No
    doc.save("MITS_application");
  };

  return (
    <div className="w-full  grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center p-2 justify-between bg-white  rounded-md">
      <img
        src={props.data.filePhotograph}
        className="w-9 hidden sm:flex object-cover h-9 rounded-full"
        alt="avatar"
      />
     <div>
     
      <p>{props.data.applicationNo}</p>
      <p>{date.toLocaleDateString("en-GB")}</p>
     </div>
      <p className="text-center hidden md:flex  tracking-tight">{name}</p>
      <div className="lg:flex flex-col items-center hidden" >
        <p>{props.data.course}</p>
        <p>{props.data.bp1 === null ? " " : props.data.bp1}</p>
      </div>
      <div className="hidden xl:flex flex-col">
        <p>{props.data.phone}</p>
        <p className="xl:tracking-tighter text-sm 2xl:text-[16px] 2xl:tracking-tight">{props.data.email}</p>
      </div>
      {/* {props.data.paymentCompleted === true ? <p className='text-green-500'>Payment Completed</p> : <p className='text-red-500'>Payment pending</p> } */}
      <div className="flex  items-center justify-end">
        <Button
          onClick={printPdf}
          color="greenary"
          size="small"
          sx={{ width: "20%", color: "#FFF" }}
          variant="contained"
        >
          Print
        </Button>
        <IconButton
          onClick={() => {
            setViewMore(!viewMore);
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
      
      {viewMore && (
        <div className="col-span-7 h-auto">
          <div className="h-auto w-full mt-10 p-2 bg-white rounded-[4px] ">
            <div className="flex items-center px-0 sm:px-6 space-x-2 justify-between">
              <a href={props.data.filePhotograph} target="_blank">
                <img
                  className="w-36"
                  src={props.data.filePhotograph}
                  alt="avatar"
                />
              </a>
              <div className=" p-1 rounded-md border-[2px] ">
                  <p>Transaction Slip</p>
                  <a href={props.data.fileTransactionID.toString().slice(0,-3)+'jpg'} target="_blank">
                  <img
                    className="w-36"
                    src={props.data.fileTransactionID.toString().slice(0,-3)+'jpg'}
                    alt="transaction slip"
                  />
                  </a>
                </div>
            </div>
            <div className="h-auto m-3 xl:flex xl:space-x-4">
              <div className="xl:w-1/2 space-y-3  p-4    rounded-md border-[2px] ">
                <div className="flex items-center justify-between">
                  <label>Name of the applicant:</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.firstName +
                      " " +
                      (props.data.middleName
                        ? props.data.middleName + " "
                        : " ") +
                      props.data.lastName}
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Date of Birth :</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.dob.toString().slice(0, 10)}
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Gender:</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">{props.data.gender}</label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Aadhar:</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">{props.data.aadhaar}</label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Phone 1(M):</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">{props.data.aPhone}</label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Phone 2(In Kerala)):</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">{props.data.phone}</label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Name of parent/Gaurdian:</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.guardianDetails.name === null
                      ? ""
                      : props.data.guardianDetails.name}
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Parent's Occupation:</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.guardianDetails.occupation}
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label>NRI sponsor:</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.NRIdetails.name}
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Relation with applicant:</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.NRIdetails.relation}
                  </label>
                </div>
              </div>
              <div className="xl:w-1/2  p-4  space-y-3  rounded-md border-[2px] ">
                <p className="font-semibold text-sm  sm:text-[16px]">Contact Address</p>
                <div className="flex items-center justify-between">
                  <label>House Name</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.contactAddress.addressL1}
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label>State</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.contactAddress.state}
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label>District,City</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.contactAddress.district +
                      " , " +
                      props.data.contactAddress.city}
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <label>Pin</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.contactAddress.pincode}
                  </label>
                </div>

                <p className="font-semibold text-sm  sm:text-[16px]">Permanent Address</p>
                <div className="flex items-center justify-between">
                  <label>House Name</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.permanentAddress.addressL1}
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label>State</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.permanentAddress.state}
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label>District,City</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.permanentAddress.district +
                      " , " +
                      props.data.permanentAddress.city}
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <label>Pin</label>
                  <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                    {props.data.permanentAddress.pincode}
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full  h-auto flex p-3  flex-col xl:flex-row  mt-3">
              <div className="xl:w-1/2  p-3  h-full">
                <p className="text-lg my-3 underline font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                  10th Marks Details{" "}
                </p>
                <label>
                  Name of Institution: <p><b>{props.data.grade10.school}</b></p>
                </label>
                <br />
                <label>Board: <b>{props.data.grade10.board}</b></label>
                <div className="w-full mt-3  p-1 border-[2px] rounded-[4px]">
                  <a href={props.data.grade10.marksheet.toString().slice(0,-3)+'jpg'} target="_blank">
                    <img src={props.data.grade10.marksheet.toString().slice(0,-3)+'jpg'} alt="mrklist10" />
                  </a>
                </div>
              </div>
              <div className="xl:w-1/2  p-3 ">
                <p className="text-lg my-3 underline font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                  12th Marks Details{" "}
                </p>
                <label>
                  Name of Institution: <p><b>{props.data.grade12.school}</b></p>
                </label>
                <br />
                <label>Board: <b>{props.data.grade12.board}</b></label>
                <div className="w-full mt-3 h-auto p-1 border-[2px] rounded-[4px]">
                  <a href={props.data.grade12.marksheet ? props.data.grade12.marksheet.toString().slice(0,-3)+'jpg' : 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'} target="_blank">
                    <img src={props.data.grade12.marksheet ? props.data.grade12.marksheet.toString().slice(0,-3)+'jpg' : 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'} alt="mrklist12" />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full  h-auto flex p-1 flex-col xl:flex-row">
              <div className="xl:w-1/2 flex items-end  flex-col  p-4 ">
                <p className="text-lg mb-3 underline font-semibold text-sm text-right sm:text-left sm:text-[16px] mx-auto ">
                  Details of Common Entrance Test (KEAM)
                </p>
                <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
                  <div className="w-auto justify-between sm:flex items-center">
                    <label className="text-md  mr-6">Year</label>
                    <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                      {props.data.keam.year}
                    </label>
                  </div>
                  <div className="w-auto justify-between sm:flex items-center">
                    <label className="text-md  mr-8">Roll No</label>
                    <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                      {props.data.keam.rollNumber}
                    </label>
                  </div>
                  <div className="w-auto justify-between sm:flex items-center">
                    <label className="text-md  mr-6">Rank</label>
                    <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                      {props.data.keam.rank}
                    </label>
                  </div>
                  <div className="w-auto justify-between sm:flex items-center">
                    <label className="text-md  mr-6">
                      Paper I score(Physics & chemistry)
                    </label>
                    <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                      {props.data.keam.markPaper1}
                    </label>
                  </div>
                  <div className="w-auto justify-between sm:flex items-center">
                    <label className="text-md  mr-6">
                      Paper II score(Mathematics)
                    </label>
                    <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                      {props.data.keam.markPaper2}
                    </label>
                  </div>
                  <div className="w-auto justify-between sm:flex items-center">
                    <label className="text-md  mr-6">Total KEAM Score</label>
                    <label className="font-semibold text-sm text-right sm:text-left sm:text-[16px]">
                      {props.data.keam.totalMark}
                    </label>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/2 px-4 ">
                <p className="text-lg my-3 text-center">KEAM Marklist </p>
                <div className="w-full p-1 border-[2px] rounded-[4px]">
                  <a href={props.data.keam.file ? props.data.keam.file.toString().slice(0,-3)+'jpg' : 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'} target="_blank">
                    <img src={props.data.keam.file ? props.data.keam.file.toString().slice(0,-3)+'jpg' : 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'} alt="mrklistkeam" />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full mt-8 items-center px-5 xl:flex space-y-3 xl:space-y-0 xl:space-x-6">
              <div className=" p-3 rounded-md border-[2px]  lg:w-1/2 ">
                <p className=" font-semibold text-sm sm:text-[16px] mb-2">Branch Preference</p>
                <div className="sm:space-x-3 xl:flex justify-between">
                  <label>{branch[props.data.bp1]}</label>
                </div>
              </div>
              <div className="xl:w-1/2 flex text-sm items-center space-x-3">
                
                <div className=" p-1 rounded-md border-[2px] ">
                <p>Parent Sign</p>
                  <a href={props.data.parentSign} target="_blank">
                    <img
                      className="w-36"
                      src={props.data.parentSign}
                      alt="parent-sign"
                    />
                  </a>
                </div>
                <div className=" p-1 rounded-md border-[2px] ">
                <p>Student Sign</p>
                  <a href={props.data.imgSign} target="_blank">
                    <img
                      className="w-36"
                      src={props.data.imgSign}
                      alt="student-sign"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Records;
