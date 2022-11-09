import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Education = () => {
  return (
    <div className="font-poppins mx-auto w-11/12 lg:w-3/4 py-10  xl:my-auto">
      <div className="h-auto w-full mt-10 bg-white rounded-[4px] ">
        <div className="w-full  h-auto flex p-3 flex-col xl:flex-row  mt-3">
          <div className="xl:w-1/2   p-4 h-full">
            <p className="text-lg mb-3 text-center">12th Exam details </p>
            <div className="w-full mb-3 ">
              <input
                type="text"
                placeholder=" Name of School/lnstitution attended for qualifying exam (+2/12th)*"
                className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />

              <input
                type="text"
                placeholder="Board*"
                className="rounded-[4px]  border-[1px] w-full my-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />
            </div>
            <div className="w-full  space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-8">Reg No</label>
                <input
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Year of Passing</label>
                <input
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Number of Attempts</label>
                <input
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Mark Obtained</label>
                <input
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Max. Marks</label>
                <input
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">% of Marks</label>
                <input
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
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">2.</label>
                <label className="text-md  mr-8">Maths</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">3.</label>
                <label className="text-md  mr-6">Computer Science</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">4.</label>
                <label className="text-md  mr-6">Physics</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">5.</label>
                <label className="text-md  mr-6">Chemistry</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">6.</label>
                <label className="text-md  mr-6">Biology</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-md">Mark list upload [12th]*</label>
              <input
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
            <p className="text-lg mb-3  text-center">10th Marks Details </p>
            <div className="w-full  ">
              <input
                type="text"
                placeholder=" Name of School/lnstitution attended for SSLC/AlSSE(10th)*"
                className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />

              <input
                type="text"
                placeholder="Board*"
                className="rounded-[4px]  border-[1px] w-full my-3 hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
              />
            </div>
            <p className="text-lg my-3 text-center">Marks obtained in 10th </p>
            <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">1.</label>
                <label className="text-md  mr-6">English</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">2.</label>
                <label className="text-md  mr-8">Maths</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">3.</label>
                <label className="text-md  mr-6">Computer Science</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">4.</label>
                <label className="text-md  mr-6">Physics</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">5.</label>
                <label className="text-md  mr-6">Chemistry</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-1">6.</label>
                <label className="text-md  mr-6">Biology</label>
                <input
                  type="text"
                  placeholder="Grade-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-md">Mark list upload [10th]*</label>
              <input
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
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-8">Roll No</label>
                <input
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Rank</label>
                <input
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper I score(Physics & chemistry)
                </label>
                <input
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper II score(Mathematics)
                </label>
                <input
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Total KEAM Score</label>
                <input
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[5px] "
                />
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-md">Mark list upload [KEAM]*</label>
              <input
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
            <Link to="/nriform/payment">Save</Link>
            </Button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
