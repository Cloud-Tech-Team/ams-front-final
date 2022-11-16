import axios from "axios";
import React from "react";
import Admin from "../Admin.js";
import RegChart from "../Components/RegChart.js";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [gov, setGov] = useState(0);
  const [nri, setNri] = useState(0);
  const [mgmt, setMgmt] = useState(0);
  const [verified, setVerified] = useState(0);
  const [completed, setCompleted] = useState(0);
  const token = localStorage.getItem("admin_access_token")
  const query = {
    headers: {
      authorization: "Bearer " + token,
      "content-type" : 'application/json'
    },
    // queries: [
    //   { quota: "Government" },
    //   { quota: "Management" },
    //   { quota: "Nri" },
    //   { verified: false },
    //   { verified: true },
    // ],
  };
  const api = 'https://ams-backend-368717.el.r.appspot.com/'
  useEffect(() => {
    console.log(token)
    axios
      .get(api+'admin/count',query)
      .then((res) => {
        console.log(res.data);
        setGov(Number(res.data.result[0]))
        setMgmt(Number(res.data.result[1]))
        setNri(Number(res.data.result[2]))
        setCount(Number(res.data.result[3]))
        setVerified(Number(res.data.result[4]))
      });
  },[]);

  return (
    <div className="w-full pb-6 xl:p-1 sm:h-full 2xl:p-4 space-y-6 xl:space-y-0 xl:space-x-6 flex flex-col xl:flex-row ">
      <div className="w-full xl:w-1/2 h-full flex flex-col items-center justify-center shadow-xl bg-white rounded-md">
        <p className="text-center font-semibold 2xl:text-4xl my-3 2xl:mb-6 sm:text-3xl text-xl">
          Registration Statistics
        </p>
        <div className="px-4 sm:p-0 w-[340px] h-auto sm:w-[400px]">
          <RegChart />
        </div>
      </div>
      <div className=" w-full xl:w-1/2 h-auto flex flex-col  space-y-6">
        <div className="h-1/3 w-full flex space-x-2 sm:space-x-5 ">
          <div className="w-1/2 py-3 sm:py-0 h-full flex flex-col items-center justify-center bg-white border-l-[8px] border-black">
            <p className="text-center text-bold uppercase text-2xl sm:text-4xl">
              Total
            </p>
            <p className="text-center mt-3 font-bold uppercase text-2xl sm:text-4xl 2xl:text-5xl">
              {count}
            </p>
          </div>
          <div className="w-1/2 h-auto flex flex-col items-center justify-center bg-white border-l-[8px] border-black">
            <p className="text-center text-bold uppercase text-xl sm:text-3xl">
              completed
            </p>
            <p className="text-center mt-3 font-bold uppercase text-2xl sm:text-4xl 2xl:text-5xl">
              {completed}
            </p>
          </div>
        </div>
        <div className="h-1/3 w-full flex space-x-2 sm:space-x-5 ">
          <div className="w-1/2 py-3 sm:py-0 h-full flex flex-col items-center justify-center bg-white border-l-[8px] border-black">
            <p className="text-center text-bold uppercase text-2xl sm:text-4xl">
              Verified
            </p>
            <p className="text-center mt-3 font-bold uppercase text-2xl sm:text-4xl 2xl:text-5xl">
              {0}
            </p>
          </div>
          <div className="w-1/2 h-auto flex flex-col items-center justify-center bg-white border-l-[8px] border-black">
            <p className="text-center text-bold uppercase text-xl sm:text-3xl">
              Unverified
            </p>
            <p className="text-center mt-3 font-bold uppercase text-2xl sm:text-4xl 2xl:text-5xl">
              {count}
            </p>
          </div>
        </div>
        <div className="sm:h-1/3 w-full flex flex-row border-l-[8px] bg-white py-3 sm:p-0 border-black">
        <div className="w-1/4 h-full flex flex-col items-center justify-center bg-white ">
            <p className="text-center text-bold uppercase text-2xl sm:text-4xl">
              SUP
            </p>
            <p className="text-center mt-3 font-bold uppercase text-2xl sm:text-4xl ">
              {/* change here */}
              {30}
            </p>
          </div>
          <div className="w-1/4 h-full flex flex-col items-center justify-center bg-white">
            <p className="text-center text-bold uppercase text-2xl sm:text-4xl">
              NRI
            </p>
            <p className="text-center mt-3 font-bold uppercase text-2xl sm:text-4xl ">
              {nri}
            </p>
          </div>
          <div className="w-1/4 h-full flex flex-col  items-center justify-center bg-white ">
            <p className="text-center text-bold uppercase text-2xl sm:text-4xl">
              Mgmt
            </p>
            <p className="text-center mt-3 font-bold uppercase text-2xl sm:text-4xl ">
              {mgmt}
            </p>
          </div>
          <div className="w-1/4 h-full flex flex-col items-center justify-center bg-white ">
            <p className="text-center text-bold uppercase text-2xl sm:text-4xl">
              gov
            </p>
            <p className="text-center mt-3 font-bold uppercase text-2xl sm:text-4xl ">
              {gov}
            </p>
          </div>
         
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default HomePage;
