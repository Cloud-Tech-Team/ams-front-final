import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";

export const Verification = () => {
  localStorage.setItem("pageNo", 4);
  const [marklist10, setMarklist10] = useState();
  const [marklist12, setMarklist12] = useState();
  const [marklistKeam, setMarklistKeam] = useState();
  const [photo, setPhoto] = useState();
  const [sign, setSign] = useState();

  useEffect(() => {
    axios
      .get("https://ams-backend-api.herokuapp.com/user/nri/application", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        console.log(res);
        let photograph = res.data.user.filePhotograph;
        let file10th = res.data.user.grade10.marksheet;
        let file12th = res.data.user.grade12.marksheet;
        let filekeam = res.data.user.keam.file;
        let signature = res.data.user.imgSign;
        setMarklist10(file10th);
        setMarklist12(file12th);
        setMarklistKeam(filekeam);
        setPhoto(photograph)
        setSign(signature)
      });
  }, []);

  return (
    <div className="font-poppins min-h-screen mx-auto w-11/12 lg:w-4/6 py-10  xl:my-auto">
      <div className="h-auto w-full mt-10 p-2 bg-white rounded-[4px] ">
        <div className="flex items-center px-6 justify-between">
          <img
            className="w-36"
            src={photo}
            alt="avatar"
          />
          <div className=" p-3 rounded-md border-[2px]  w-56">
          <img
            className="w-36"
            src={sign}
            alt="signature"
          />
          </div>
        </div>
        <div className="h-auto m-3 xl:flex space-x-4">
          <div className="w-1/2 space-y-3  p-4    rounded-md border-[2px] ">
            <div className="flex items-center justify-between">
              <label>Name of the applicant:</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Date of Birth :</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Gender:</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Aadhar:</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Phone 1(M):</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Phone 2(In Kerala)):</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Name of parent/Gaurdian:</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Parent's Occupation:</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>NRI sponsor:</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Relation with applicant:</label>
              <label className="font-semibold">here</label>
            </div>
          </div>
          <div className="w-1/2  p-4  space-y-3  rounded-md border-[2px] ">
            <p className="font-semibold">Contact Address</p>
            <div className="flex items-center justify-between">
              <label>House Name</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>State</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>District,City</label>
              <label className="font-semibold">here</label>
            </div>

            <div className="flex items-center justify-between">
              <label>Pin</label>
              <label className="font-semibold">here</label>
            </div>

            <p className="font-semibold">Permanent Address</p>
            <div className="flex items-center justify-between">
              <label>House Name</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>State</label>
              <label className="font-semibold">here</label>
            </div>
            <div className="flex items-center justify-between">
              <label>District,City</label>
              <label className="font-semibold">here</label>
            </div>

            <div className="flex items-center justify-between">
              <label>Pin</label>
              <label className="font-semibold">here</label>
            </div>
          </div>
        </div>

        <div className="w-full  h-auto flex p-3  flex-col xl:flex-row  mt-3">
          <div className="xl:w-1/2  p-3  h-full">
            <p className="text-lg my-3 underline font-semibold">
              10th Marks Details{" "}
            </p>
            <label>Name of Institution: </label>
            <br />
            <label>Board: </label>
            <div className="w-full mt-3  p-1 border-[2px] rounded-[4px]">
              <img src={marklist10} alt="mrklist10" />
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
              <img src={marklist12} alt="mrklist10" />
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
                <label className="font-semibold">here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-8">Roll No</label>
                <label className="font-semibold">here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Rank</label>
                <label className="font-semibold">here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper I score(Physics & chemistry)
                </label>
                <label className="font-semibold">here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper II score(Mathematics)
                </label>
                <label className="font-semibold">here</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Total KEAM Score</label>
                <label className="font-semibold">here</label>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 px-4 ">
            <p className="text-lg my-3 text-center">KEAM Marklist </p>
            <div className="w-full p-1 border-[2px] rounded-[4px]">
              <img src={marklistKeam} alt="mrklist10" />
            </div>
          </div>
        </div>

        <div className="w-full mt-8 items-center px-5 xl:flex xl:space-x-6">
          <div className=" p-3 rounded-md border-[2px]   lg:w-1/2 ">
            <p className="text-lg font-semibold mb-2">Branch Preference</p>
            <div className="sm:space-x-3 xl:flex justify-between">
              {/* <label>Preference</label> */}
              <label>Computer science and Enginerring</label>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-center my-6">
            <input type="checkbox" className="w-4 h-4 mr-2 accent-red-600" />I
            hereby declare that all the information furnished above are true and
            correct and we will obey the rules and regulations of the
            institution if admitted{" "}
          </p>
          <Button color="blue" sx={{color: "#FFF"}} variant="contained">Final Submit</Button>
        </div>
        
      </div>
    </div>
  );
};
