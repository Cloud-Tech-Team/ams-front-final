import React from "react";
import { useEffect } from "react";
import axios from "axios";

export const Verification = () => {
  localStorage.setItem("pageNo", 4);
  
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

        <div className="w-full  h-auto flex p-3  flex-col xl:flex-row  mt-3">
          <div className="xl:w-1/2  p-3  h-full">
           
              <p className="text-lg my-3 underline font-semibold">
                10th Marks Details{" "}
              </p>
              <label>Name of Institution: </label>
              <br />
              <label>Board: </label>
              <div className="w-full mt-3  p-1 border-[2px] rounded-[4px]">
                jk
              </div>
            
          </div>
          <div className="xl:w-1/2  p-3 ">
           
              <p className="text-lg my-3 underline font-semibold">
                12th Marks Details{" "}
              </p>
              <label>Name of Institution: </label>
              <br />
              <label>Board: </label>
              <div className="w-full mt-3 h-auto p-1 border-[2px] rounded-[4px]">
                jk
              </div>
            
          </div>
          
        </div>

        <div className="w-full  h-auto flex p-1 flex-col xl:flex-row">
        <div className="xl:w-1/2 flex items-end  flex-col  p-4 ">
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
            
          </div>
          <div className="xl:w-1/2 px-4 ">
            <p className="text-lg my-3 text-center">KEAM Marklist </p>
            <div className="w-full p-2 border-[2px] rounded-[4px]">
             jghghj
            </div>
            
          </div>
        
        </div>
   
          <div className="w-full items-center px-5 xl:flex space-x-6">
            <div className=" p-3 rounded-md border-[2px]   lg:w-1/2 ">
              <p className="text-lg font-semibold mb-2">Branch Preference</p>
              <div className="sm:space-x-3 xl:flex justify-between">
                <label>Preference</label>
                <label>Computer science and Enginerring</label>
              </div>
              
            </div>
            <p>Signature</p>
            <div className=" p-3 rounded-md border-[2px]  w-56">
           
            </div>
          </div>
          <div className="p-6">
          <p className="text-center my-6">
            <input type="checkbox" className="w-4 h-4 mr-2 accent-red-600" />I
            hereby declare that all the information furnished above are true and
            correct and we will obey the rules and regulations of the
            institution if admitted{" "}
          </p>
          </div>
        </div>
      
    </div>
  );
};
