import { Button } from "@mui/material";
import React from "react";

const Declaration = () => {
  return (
    <div className="font-poppins h-screen mx-auto w-11/12 lg:w-2/4 flex items-center xl:my-auto">
      <div className="h-auto  w-full p-5 bg-white  rounded-[4px] ">
      <p className="text-lg mb-4">Branch Preference</p>
        <div className="w-full flex">
          <div className="w-1/2  space-y-6">
            <div className="w-full  flex justify-between">
              <label>Preference I</label>
              <select
                className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                id="bp1"
              >
                <option value=""></option>
                <option value="Computer Science">Computer Science</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="CSE-AI&DS">CSE-AI&DS</option>
                <option value="Civil">Civil</option>
                <option value="Mech">Mech</option>
                <option value="EEE">EEE</option>
              </select>
            </div>
            <div className="w-full flex justify-between">
              <label>Preference II</label>
              <select
                className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                id="bp2"
              >
                <option value=""></option>
                <option value="Computer Science">Computer Science</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="CSE-AI&DS">CSE-AI&DS</option>
                <option value="Civil">Civil</option>
                <option value="Mech">Mech</option>
                <option value="EEE">EEE</option>
              </select>
            </div>
            <div className="w-full flex justify-between">
              <label>Preference III</label>
              <select
                className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                id="bp3"
              >
                <option value=""></option>
                <option value="Computer Science">Computer Science</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="CSE-AI&DS">CSE-AI&DS</option>
                <option value="Civil">Civil</option>
                <option value="Mech">Mech</option>
                <option value="EEE">EEE</option>
              </select>
            </div>
          </div>
          <div className="w-1/2 mx-8 bg-red-50 border-[2px] border-red-500 rounded-lg flex items-center justify-center"></div>
        </div>
        <p className="text-xl my-6 text-center underline">Undertaking</p>
        <p className="text-center">
          We.............................(applicant) &
          ...............................(parent/guardian) do hereby declare
          that all the information furnished above are true and correct and we
          will obey the rules and regulations of the institution if admitted.We
          promise to submit all certificates and documents in original at the
          time of admission failing with the admission will be liable for
          cancellation.
        </p>
        <div className=" flex items-center gap-4 justify-center">
          <p className="tex">Signature Upload (applicant)*</p>
          <input
            type="file"
            className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400  "
          />
        </div>
        <p className="text-center my-4 text-red-600">
          upload an image file (jpeg/png) of size less than 1mb*
        </p>
        <div className="w-full flex  justify-between">
          <Button variant="contained">Withdraw</Button>
          <Button
            sx={{
              color: "#fff",
            }}
            color="greenary"
            variant="contained"
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Declaration;
