import { CheckBox } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Declaration = () => {
  localStorage.setItem('pageNo',3)
  return (
    <div className="font-poppins py-20 h-auto min-h-screen  mx-auto w-11/12 lg:w-3/5 flex items-center xl:my-auto">
      <div className="h-auto   w-full p-6 bg-white  rounded-[4px] ">
        <div className="w-full items-center xl:flex">
          <div className=" xl:w-1/2 rounded-md border-[2px] p-4 py-8 space-y-6">
                  <p className="text-lg mb-4">Branch Preference</p>
            <div className="sm:space-x-3 xl:flex justify-between">
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
            <div className="sm:space-x-3 w-full xl:flex justify-between">
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
            <div className="sm:space-x-3 w-full xl:flex justify-between">
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
          <div className="xl:w-1/2 mt-6 xl:mt-0 xl:mx-8 p-4 bg-red-50 border-[2px] border-red-500 rounded-lg ">
            <b>Please Note</b><br/>
            A student opting to <b>EXIT</b> before <b>5</b> days after the publication of KEAM
            2023 score will be reimbursed the entire amount after deducting Rs
            <b> 1000</b> processing fee However a student will be automatically
            considered for MITS management quota from NRI quota. There after the
            registered choice will be freezed and will not be eligible for any
            refund if the admission is cancelled after 5 days from the date of
            KEAM result publication
          </div>
        </div>
        <p className="text-xl my-6 text-center underline">Instructions</p>
        <p className="">
          {/* We.............................(applicant) &
          ...............................(parent/guardian) do hereby declare
          that all the information furnished above are true and correct and we
          will obey the rules and regulations of the institution if admitted.We
          promise to submit all certificates and documents in original at the
          time of admission failing with the admission will be liable for
          cancellation. */}
          <ul>
            <li><b>1. </b>I am aware about the criteria followed by "Muthoot Institute of Technology and Science", for the B-Tech NRI Quota admission for the year
              2023, such that my ward has to attain 70% Marks for Mathematics individually anf 70% put together in Physics, Chemistry & Mathematics, in the 12th
              stadard, for Qualifying examination. If my ward failed to do so, there is no claim, from my side for the admission </li>
            <li><b>2. </b> A student opting to <b>EXIT</b> before <b>5</b> days after the publication of KEAM
            2023 score will be reimbursed the entire amount after deducting Rs
            <b> 1000</b></li>
            <li><b>3. </b> I hereby declare
          that all the information furnished above are true and correct and we
          will obey the rules and regulations of the institution if admitted </li>
          <li className="mt-6 text-center"><CheckBox></CheckBox><label>I have clearly read the instructions mentioned above and would like to proceed further</label></li>
          </ul>
          
        </p>
        <div className=" xl:flex items-center mt-3 gap-4 justify-center">
          <p className="font-semibold">Signature Upload (applicant)*</p>
          <input
            type="file"
            className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400  "
          />
        </div>
        <p className="text-center my-4 text-red-600">
          upload an image file (jpeg/png) of size less than 1mb*
        </p>
        <div className="w-full flex  justify-between">
          <Button variant="contained">Exit</Button>
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
