import React from "react";
import { useEffect } from "react";
import axios from "axios";

export const Verification = () => {
  localStorage.setItem('pageNo',4)
  
  useEffect(() => {
    axios
      .get("https://ams-backend-api.herokuapp.com/user/nri/application", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        console.log(res);
        let photograph = res.data.user.filePhotograph
        let file10th = res.data.user.grade10.marksheet
        let file12th = res.data.user.grade12.marksheet
        let filekeam = res.data.user.keam.file
        let sign = res.data.user.imgSign
        console.log(photograph)
        console.log(file10th)
        console.log(file12th)
        console.log(filekeam)
        console.log(sign)
      });
  }, []);

  return (
    <div className="font-poppins min-h-screen mx-auto w-11/12 lg:w-4/6 py-10  xl:my-auto">
      <div className="h-auto w-full mt-10 bg-white rounded-[4px] ">
        {/* <div className="w-full grid grid-cols-2 p-4">
            <div className="w-full flex flex-col bg-red-200">
            <label>Name of the applicant: here</label>
            <label>Name of parent/Gaurdian: here</label>
            <label>Date of Birth : here</label>
            <label>Gende: here</label>
            </div>
            <div className="w-full bg-red-300"></div>
        </div> */}
        <p className="text-lg font-semibold underline text-center">
          12th Exam details{" "}
        </p>
        <div className="w-full  h-auto flex px-3  flex-col xl:flex-row  mt-3">
          <div className="xl:w-1/2  p-3 h-full">
            <div className="w-full mb-3 ">
              <label>Name of institution: here</label>
              <br />
              <label>Board: here</label>
            </div>
            <div className="w-full  space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-8">Reg No</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Year of Passing</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Number of Attempts</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Mark Obtained</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Max. Marks</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">% of Marks</label>
                <label>here</label>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 p-4 h-full">
            <p className="text-lg my-3 text-center">
              Marks obtained in Qualifying Examination [12th]{" "}
            </p>
            <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">1.</label>
                <label className="text-md  mr-6">English</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">2.</label>
                <label className="text-md  mr-8">Maths</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">3.</label>
                <label className="text-md  mr-6">Computer Science</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">4.</label>
                <label className="text-md  mr-6">Physics</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">5.</label>
                <label className="text-md  mr-6">Chemistry</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">6.</label>
                <label className="text-md  mr-6">Biology</label>
                <label>here</label>
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-md">Mark list upload [12th]*</label>
              <label>here</label>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 px-6 ">
          <p className="text-lg my-3 underline font-semibold">
            10th Marks Details{" "}
          </p>
          <label>Name of Institution: </label>
          <br />
          <label>Board: </label>
        </div>
        <div className="w-full  h-auto flex p-1 flex-col xl:flex-row shadow-md ">
          <div className="xl:w-1/2 px-4 h-full">
            <p className="text-lg my-3 text-center">Marks obtained in 10th </p>
            <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">1.</label>
                <label className="text-md  mr-6">English</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">2.</label>
                <label className="text-md  mr-8">Maths</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">3.</label>
                <label className="text-md  mr-6">Science</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">4.</label>
                <label className="text-md  mr-6">Physics</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">5.</label>
                <label className="text-md  mr-6">Chemistry</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">6.</label>
                <label className="text-md  mr-6">Biology</label>
                <label>here</label>
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-md">Mark list upload [10th]*</label>
              <label>here</label>
            </div>
          </div>
          <div className="xl:w-1/2 flex items-end  flex-col  p-4 h-full">
            <p className="text-lg mb-3 underline font-semibold mx-auto ">
              Details of Common Entrance Test (KEAM)
            </p>
            <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Year</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-8">Roll No</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Rank</label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper I score(Physics & chemistry)
                </label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper II score(Mathematics)
                </label>
                <label>here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Total KEAM Score</label>
                <label>here</label>
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-md">Mark list upload [KEAM]*</label>
              <label> preview</label>
            </div>
          </div>
        </div>
        <div className="h-auto   w-full p-6 bg-white   ">
          <div className="w-full items-center xl:flex">
            <div className=" w-full rounded-md border-[2px] p-2 mx-16 space-y-6">
              <p className="text-lg font-semibold mb-4">Branch Preference</p>
              <div className="sm:space-x-3 xl:flex justify-between">
              <label>Preference</label>
              {/* <label>here</label> */}
              </div>
              {/* <div className="sm:space-x-3 w-full xl:flex justify-between">
              <label>Preference II</label>
               
              </div>
              <div className="sm:space-x-3 w-full xl:flex justify-between">
                <label>Preference III</label>
                
              </div> */}
            </div>
            
          </div>
         
                <p className="text-center my-6">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2 accent-red-600"
                />
                I hereby declare that all the information furnished
                above are true and correct and we will obey the rules and
                regulations of the institution if admitted{" "}
                </p>
        </div>
      </div>
    </div>
  );
};
