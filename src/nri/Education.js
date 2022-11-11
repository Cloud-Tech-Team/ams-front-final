import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {Backdrop, LinearProgress} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Education = () => {
  localStorage.setItem('pageNo',2)
  const [loader, setLoader] = useState(false)
  const nav = useNavigate();
  useEffect(() => {
    setLoader(true)
    axios
    .get("https://ams-backend-api.herokuapp.com/user/nri/application", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    })
    .then((res) => {
      setLoader(false);
      console.log(res);
      const plusTwo = res.data.user.grade12
      document.getElementById("hseschool").value = plusTwo.school
      document.getElementById("hseboard").value = plusTwo.board
      document.getElementById("plustworeg").value = plusTwo.registerNumber
      document.getElementById("plustwoyear").value = plusTwo.year
      document.getElementById("plustwoattempt").value = plusTwo.attemptNumber
      document.getElementById("plustwomark").value = plusTwo.mark
      document.getElementById("plustwomaxmark").value = plusTwo.maxMark
      document.getElementById("plustwopercent").value = plusTwo.percentage
      document.getElementById("+2eng").value = plusTwo.markEnglish
      document.getElementById("+2maths").value = plusTwo.markMaths
      document.getElementById("+2cs").value = plusTwo.markCS
      document.getElementById("+2phy").value = plusTwo.markPhy
      document.getElementById("+2chem").value = plusTwo.markChem
      document.getElementById("+2bio").value = plusTwo.markBio

      const tenTh = res.data.user.grade10
      document.getElementById("sslcschool").value = tenTh.school
      document.getElementById("sslcboard").value = tenTh.board
      document.getElementById("sslceng").value = tenTh.markEnglish
      document.getElementById("sslcmaths").value = tenTh.markMaths
      document.getElementById("sslccs").value = tenTh.markCS
      document.getElementById("sslcphy").value = tenTh.markPhy
      document.getElementById("sslcchem").value = tenTh.markChem
      document.getElementById("sslcbio").value = tenTh.markBio
      
      const keam = res.data.user.keam
      document.getElementById("keamyear").value = keam.year
      document.getElementById("keamroll").value = keam.rollNumber
      document.getElementById("keamrank").value = keam.rank
      document.getElementById("keamp1").value = keam.markPaper1
      document.getElementById("keamp2").value = keam.markPaper2
      document.getElementById("keamtotal").value = keam.totalMark
    });
  }, [])


  const markupload = async(e) =>{
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    console.log(e.target.id)
    formData.append(e.target.id,file);
    console.log(formData)
    try {
      await axios
        .patch("https://ams-backend-api.herokuapp.com/user/nri/application-page2/"+localStorage.getItem("user_id"),formData,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
              "Content-Type": "multipart/form-data",
            },
          })
        .then((res) => {
          console.log("this is the response \n"+res);
          if (res.data.status === "SUCCESS") {
            console.log("photo uploaded");
          } else {
            console.log("Something wrong happened");
          }
        });
    } catch (error) {
            window.alert("error wrong happened")
            console.log(error);
    }
  }


  const eduDetailUpload = async(e) =>{
        e.preventDefault();
        setLoader(true)
        const data = {
           plustwoschool : document.getElementById("hseschool").value,
           plustwoboard  : document.getElementById("hseboard").value,
           plustworegno  : document.getElementById("plustworeg").value,
           plustwoyear   : document.getElementById("plustwoyear").value,
           plustwoAttempt: document.getElementById("plustwoattempt").value,
           plustwomark   : document.getElementById("plustwomark").value,
           plustwomaxmark: document.getElementById("plustwomaxmark").value,
           plustwoperc   : document.getElementById("plustwopercent").value,
           plustwoengmark: document.getElementById("+2eng").value,
           plustwomtsmark: document.getElementById("+2maths").value,
           plustwocsmark : document.getElementById("+2cs").value,
           plustwophymark: document.getElementById("+2phy").value,
           plutwochemark : document.getElementById("+2chem").value,
           plustwobiomark: document.getElementById("+2bio").value,
          //  plustwofile   : document.getElementById("+2file").value,
           
           sslcschool    : document.getElementById("sslcschool").value,
           sslcboard     : document.getElementById("sslcboard").value,
           sslcengmark   : document.getElementById("sslceng").value,
           sslcmtsmark   : document.getElementById("sslcmaths").value,
           sslccsmark    : document.getElementById("sslccs").value,
           sslcphymark   : document.getElementById("sslcphy").value,
           sslcchemmark  : document.getElementById("sslcchem").value,
           sslcbiomark   : document.getElementById("sslcbio").value,
          //  sslcfile      : document.getElementById("sslcfile").value,

           keamyear      : document.getElementById("keamyear").value,
           keamrollno    : document.getElementById("keamroll").value,
           keamrank      : document.getElementById("keamrank").value,
           keampaper1    : document.getElementById("keamp1").value,
           keampaper2    : document.getElementById("keamp2").value,
           keamtotal     : document.getElementById("keamtotal").value,
          //  keamfile      : document.getElementById("keamfile").value
        }
        console.log(data);

        try{
          await axios
          .patch("https://ams-backend-api.herokuapp.com/user/nri/application-page2/"+localStorage.getItem("user_id"),data,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
              },
            })
          .then((res) => {
            console.log(res);
            if (res.data.status === "SUCCESS") {
              console.log(res) 
              setLoader(false)          
              nav("/nriform/declaration")   
            } else {
              console.log("something went wrong") 
              setLoader(false)          
            }
          });
        }catch(error){
          setLoader(false)          
           console.log(error);
        }
  };
  return (
    <div className="font-poppins mx-auto w-11/12 lg:w-3/4 py-10  xl:my-auto">
      <div className="h-auto w-full mt-10 bg-white rounded-[4px] ">
      <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
        >
          <div className="w-screen absolute top-0">
            <LinearProgress color="primary" />
          </div>
        </Backdrop>
        <div className="w-full  h-auto flex p-3 flex-col xl:flex-row  mt-3">
          <div className="xl:w-1/2   p-4 h-full">
            <p className="text-lg mb-3 text-center">12th Exam details </p>
            <div className="w-full mb-3 ">
              <input
                id="hseschool"
                type="text"
                placeholder=" Name of School/lnstitution attended for qualifying exam (+2/12th)*"
                className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />

              <input
                id="hseboard"
                type="text"
                placeholder="Board*"
                className="rounded-[4px]  border-[1px] w-full my-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />
            </div>
            <div className="w-full  space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-8">Reg No</label>
                <input
                  id="plustworeg"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Year of Passing</label>
                <input
                  id="plustwoyear"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Number of Attempts</label>
                <input
                  id="plustwoattempt"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Mark Obtained</label>
                <input
                  id="plustwomark"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Max. Marks</label>
                <input
                  id="plustwomaxmark"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">% of Marks</label>
                <input
                  id="plustwopercent"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
            </div>
          </div>
          <div className="xl:w-1/2   p-4 h-full">
            <p className="text-lg my-3 text-center">
              Marks obtained in Qualifying Examination [12th]{" "}
            </p>
            <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">1.</label>
                <label className="text-md  mr-6">English</label>
                <input
                  id="+2eng"
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">2.</label>
                <label className="text-md  mr-8">Maths</label>
                <input
                  id="+2maths"
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">3.</label>
                <label className="text-md  mr-6">Computer Science</label>
                <input
                  id="+2cs"
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">4.</label>
                <label className="text-md  mr-6">Physics</label>
                <input
                  id="+2phy"
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">5.</label>
                <label className="text-md  mr-6">Chemistry</label>
                <input
                  id="+2chem"
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">6.</label>
                <label className="text-md  mr-6">Biology</label>
                <input
                  id="+2bio"
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-md">Mark list upload [12th]</label>
              <input
                onChange= {markupload}
                id="file12th"
                type="file"
                className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />
              <label className="text-sm text-red-600">
                upload a pdf or image file of size less than 5mb*
              </label>
            </div>
          </div>
        </div>
        <div className="w-full  h-auto flex p-1 flex-col xl:flex-row shadow-md ">
          <div className="xl:w-1/2   p-4 h-full">
            <p className="text-lg mb-3  text-center">10th Marks Details*</p>
            <div className="w-full  ">
              <input
                id="sslcschool"
                type="text"
                placeholder=" Name of School/lnstitution attended for SSLC/AlSSE(10th)*"
                className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />

              <input
                id="sslcboard"
                type="text"
                placeholder="Board*"
                className="rounded-[4px]  border-[1px] w-full my-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />
            </div>
            <p className="text-lg my-3 text-center">Percentage obtained in 10th </p>
            <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">1.</label>
                <label className="text-md  mr-6">English</label>
                <input
                  id="sslceng"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">2.</label>
                <label className="text-md  mr-8">Maths</label>
                <input
                  id="sslcmaths"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">3.</label>
                <label className="text-md  mr-6">Science</label>
                <input
                  id="sslccs"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">4.</label>
                <label className="text-md  mr-6">Physics</label>
                <input
                  id="sslcphy"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">5.</label>
                <label className="text-md  mr-6">Chemistry</label>
                <input
                  id="sslcchem"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">6.</label>
                <label className="text-md  mr-6">Biology</label>
                <input
                  id="sslcbio"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-md">Mark list upload [10th]*</label>
              <input
                id="file10th"
                 onChange={markupload}
                type="file"
                className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />
              <label className="text-sm text-red-600">
                upload a pdf or image file of size less than 5mb*
              </label>
            </div>
          </div>
          <div className="xl:w-1/2 flex items-end  flex-col  p-4 h-full">
            <p className="text-lg mb-3 mx-auto ">
              Details of Common Entrance Test (KEAM)
            </p>
            <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Year</label>
                <input
                  id="keamyear"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-8">Roll No</label>
                <input
                  id="keamroll"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Rank</label>
                <input
                  id="keamrank"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper I score(Physics & chemistry)
                </label>
                <input
                  id="keamp1"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper II score(Mathematics)
                </label>
                <input
                  id="keamp2"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Total KEAM Score</label>
                <input
                  id="keamtotal"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-md">Mark list upload [KEAM]</label>
              <input
                id="fileKeam"
                 onChange={markupload}
                type="file"
                className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />
              <label className="text-sm text-red-600">
                upload a pdf or image file of size less than 5mb*
              </label>
            </div>
            {/* <div className="w-full flex flex-col items-end justify-end p-3"> */}
            <div className="w-full rounded-md my-4 bg-red-100 h-24"></div>
            <Button className="" variant="contained">
            <Link to="/nriform/payment" onClick = { eduDetailUpload }>Save</Link>
            {/* <Link to="/nriform/declaration">Save</Link> */}
            </Button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
