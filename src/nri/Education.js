import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Backdrop, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Education = () => {
  localStorage.setItem("pageNo", 2);
  const [loader, setLoader] = useState(false);
  const nav = useNavigate();
 
  const [imgLoader, setImgLoader] = useState(false);
  const [imgLoader12, setImgLoader12] = useState(false);
  const [imgLoaderKeam, setImgLoaderKeam] = useState(false);

  useEffect(() => {
    setLoader(true);

    axios
      .get("https://ams-backend-api.herokuapp.com/user/nri/application", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setLoader(false);
        console.log(res);
        const plusTwo = res.data.user.grade12;
        document.getElementById("hseschool").value = plusTwo.school;
        document.getElementById("hseboard").value = plusTwo.board;
        // document.getElementById("plustworeg").value = plusTwo.registerNumber;
        // document.getElementById("plustwoyear").value = plusTwo.year;
        // document.getElementById("plustwoattempt").value = plusTwo.attemptNumber;
        // document.getElementById("plustwomark").value = plusTwo.mark;
        // document.getElementById("plustwomaxmark").value = plusTwo.maxMark;
        // document.getElementById("plustwopercent").value = plusTwo.percentage;
        // document.getElementById("+2eng").value = plusTwo.markEnglish;
        // document.getElementById("+2maths").value = plusTwo.markMaths;
        // document.getElementById("+2cs").value = plusTwo.markCS;
        // document.getElementById("+2phy").value = plusTwo.markPhy;
        // document.getElementById("+2chem").value = plusTwo.markChem;
        // document.getElementById("+2bio").value = plusTwo.markBio;

        const tenTh = res.data.user.grade10;
        document.getElementById("sslcschool").value = tenTh.school;
        document.getElementById("sslcboard").value = tenTh.board;
        // document.getElementById("sslceng").value = tenTh.markEnglish;
        // document.getElementById("sslcmaths").value = tenTh.markMaths;
        // document.getElementById("sslccs").value = tenTh.markCS;
        // document.getElementById("sslcphy").value = tenTh.markPhy;
        // document.getElementById("sslcchem").value = tenTh.markChem;
        // document.getElementById("sslcbio").value = tenTh.markBio;

        const keam = res.data.user.keam;
        document.getElementById("keamyear").value = keam.year;
        document.getElementById("keamroll").value = keam.rollNumber;
        document.getElementById("keamrank").value = keam.rank;
        document.getElementById("keamp1").value = keam.markPaper1;
        document.getElementById("keamp2").value = keam.markPaper2;
        document.getElementById("keamtotal").value = keam.totalMark;

       
        if(plusTwo.marksheet != null){
          setIs12thpicked(true)
        }
        if(tenTh.marksheet != null){
          setIs10thpicked(true)
        }
        if(keam.file != null){
          setIskeampicked(true)
        }

        handleBoardChange();
      });
  }, []);

  const [file10th, setFile10th] = useState();
  const [file12th, setFile12th] = useState();
  const [filekeam, setFilekeam] = useState();
  const [is10thpicked, setIs10thpicked] = useState(false);
  const [is12thpicked, setIs12thpicked] = useState(false);
  const [iskeampicked, setIskeampicked] = useState(false);

  const handle10thfile = async (e) => {
    console.log(e.target.id);
    setFile10th(e.target.files[0]);
    setIs10thpicked(true);
  };
  const markupload10th = async (e) => {
    e.preventDefault();
    setImgLoader(true);
    const formData = new FormData();
    formData.append("file10th", file10th);
    console.log(formData);
    if (is10thpicked === true) {
      try {
        await axios
          .patch(
            "https://ams-backend-api.herokuapp.com/user/nri/application-page2/" +
              localStorage.getItem("user_id"),
            formData,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            console.log("this is the response \n" + res);
            if (res.data.status === "SUCCESS") {
              setImgLoader(false);
              window.alert("photo uploaded");
            } else {
              setImgLoader(false);
              window.alert("Something wrong happened");
            }
          });
      } catch (error) {
        setImgLoader(false);
        window.alert("error wrong happened");
      }
    } else {
      window.alert("Please Pick the 10th gradecard");
      setImgLoader(false);
    }
  };

  const handle12thfile = async (e) => {
    console.log(e.target.id);
    setFile12th(e.target.files[0]);
    setIs12thpicked(true);
  };

  const markupload12th = async (e) => {
    e.preventDefault();
    console.log(file12th);
    setImgLoader12(true);
    const formData = new FormData();
    formData.append("file12th", file12th);
    console.log(formData);
    if (is12thpicked === true) {
      try {
        await axios
          .patch(
            "https://ams-backend-api.herokuapp.com/user/nri/application-page2/" +
              localStorage.getItem("user_id"),
            formData,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            console.log("this is the response \n" + res);
            if (res.data.status === "SUCCESS") {
              setImgLoader12(false);
              window.alert("photo uploaded");
            } else {
              setImgLoader12(false);
              window.alert("Something wrong happened");
            }
          });
      } catch (error) {
        setImgLoader12(false);
        window.alert("error wrong happened");
      }
    } else {
      setImgLoader12(false);
      window.alert("Please upload your keam grade card");
    }
  };

  const handlefileKeam = async (e) => {
    console.log(e.target.id);
    setFilekeam(e.target.files[0]);
    setIskeampicked(true);
  };

  const keamupload = async (e) => {
    e.preventDefault();
    setImgLoaderKeam(true);
    console.log(filekeam);
    const formData = new FormData();
    formData.append("fileKeam", filekeam);
    console.log(formData);
    if (iskeampicked === true) {
      try {
        await axios
          .patch(
            "https://ams-backend-api.herokuapp.com/user/nri/application-page2/" +
              localStorage.getItem("user_id"),
            formData,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            console.log("this is the response \n" + res);
            if (res.data.status === "SUCCESS") {
              setImgLoaderKeam(false);
              window.alert("photo uploaded");
            } else {
              setImgLoaderKeam(false);
              window.alert("Something wrong happened");
            }
          });
      } catch (error) {
        setImgLoaderKeam(false);
        window.alert("error wrong happened");
        console.log(error);
      }
    } else {
      setImgLoaderKeam(false);
      window.alert("Please upload your keam grade card");
    }
  };

  const eduDetailUpload = async (e) => {
    e.preventDefault();
    setLoader(true);
    const data = {
      plustwoschool: document.getElementById("hseschool").value,
      plustwoboard: document.getElementById("hseboard").value,
      // plustworegno: document.getElementById("plustworeg").value,
      // plustwoyear: document.getElementById("plustwoyear").value,
      // plustwoAttempt: document.getElementById("plustwoattempt").value,
      // plustwomark: document.getElementById("plustwomark").value,
      // plustwomaxmark: document.getElementById("plustwomaxmark").value,
      // plustwoperc: document.getElementById("plustwopercent").value,
      // plustwoengmark: document.getElementById("+2eng").value,
      // plustwomtsmark: document.getElementById("+2maths").value,
      // plustwocsmark: document.getElementById("+2cs").value,
      // plustwophymark: document.getElementById("+2phy").value,
      // plutwochemark: document.getElementById("+2chem").value,
      // plustwobiomark: document.getElementById("+2bio").value,
      // plustwofile   : document.getElementById("+2file").value,

      sslcschool: document.getElementById("sslcschool").value,
      sslcboard: document.getElementById("sslcboard").value,
      // sslcengmark: document.getElementById("sslceng").value,
      // sslcmtsmark: document.getElementById("sslcmaths").value,
      // sslccsmark: document.getElementById("sslccs").value,
      // sslcphymark: document.getElementById("sslcphy").value,
      // sslcchemmark: document.getElementById("sslcchem").value,
      // sslcbiomark: document.getElementById("sslcbio").value,
      // sslcfile      : document.getElementById("sslcfile").value,

      keamyear: document.getElementById("keamyear").value,
      keamrollno: document.getElementById("keamroll").value,
      keamrank: document.getElementById("keamrank").value,
      keampaper1: document.getElementById("keamp1").value,
      keampaper2: document.getElementById("keamp2").value,
      keamtotal: document.getElementById("keamtotal").value,
      //  keamfile      : document.getElementById("keamfile").value
    };
    console.log(data);
    if( data.sslcboard && data.sslcboard && is10thpicked){
    try {
      await axios
        .patch(
          "https://ams-backend-api.herokuapp.com/user/nri/application-page2/" +
            localStorage.getItem("user_id"),
          data,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data.status === "SUCCESS") {
            console.log(res);
            setLoader(false);
            nav("/nriform/declaration");
          } else {
            console.log("something went wrong");
            setLoader(false);
          }
        });
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  }else{
    window.alert("Some required field Empty")
  }
  };

  ///DOM-MANIP functions
  const [oth_sslc, setOth_sslc] = useState();
  const [oth_hse, setOth_hse] = useState();
  function handleBoardChange() {
    if (document.getElementById("sslcboard").value === "Others")
      setOth_sslc(true);
    else setOth_sslc(false);
    if (document.getElementById("hseboard").value === "Others")
      setOth_hse(true);
    else setOth_hse(false);
  }

  return (
    <div className="font-poppins min-h-screen w-11/12 lg:w-3/4 ">
      
      <div className="h-auto w-full my-20 bg-white rounded-[4px] flex p-2 flex-col xl:flex-row ">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
        >
          <div className="w-screen absolute top-0">
            <LinearProgress color="primary" />
          </div>
        </Backdrop>
        {/* <div className="w-full  h-auto flex p-3 flex-col xl:flex-row  "> */}
        <div className="xl:w-1/2  p-4 h-full">
          <p className="text-md mb-3 font-semibold text-center">
            10th Exam details{" "}
          </p>
          <div className="w-full border-[2px] rounded-[4px] p-3 mb-3 ">
            <label className="">
              Name of School/lnstitution attended for SSLC/AlSSE(10th)*
            </label>
            <input
              id="sslcschool"
              type="text"
              className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
            />
            <label>Select Board*</label>
            <div className="w-full flex space-x-4">
              <select
                required
                onChange={handleBoardChange}
                id="sslcboard"
                name="sslc-board"
                className="rounded-[4px]  border-[1px] w-auto text-md hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              >
                <option value=""></option>
                <option value="State Board">State Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="Others">Others</option>
              </select>
              {oth_sslc && (
                <input
                  id="others-sslc"
                  type="text"
                  placeholder="Specify-Board"
                  className="rounded-[4px]  border-[1px] w-full  hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              )}
            </div>

            <div className="w-full pt-3 space-y-2">
              <label className="text-[15px]">Mark list upload [10th]</label>

              <div className="w-full xl:space-x-3  flex flex-col xl:flex-row">
               
             
                  <input
                    id="file10th"
                    onChange={handle10thfile}
                    type="file"
                    className="rounded-[4px] w-full mb-2 border-[1px] hover:border-black focus:outline-red-600 border-gray-400  "
                  />
                  <Button sx={{height:"100%"}}
                    id="file10th"
                    variant="contained"
                    onClick={markupload10th}
                  >
                    Upload
                  </Button>
                
              </div>
              {imgLoader && <LinearProgress />}
              <label className="text-sm text-red-600">
                upload an  image file of size less than 5mb*
              </label>
            </div>
          </div>
          <p className="text-md my-4 font-semibold text-center">
            12th Exam details{" "}
          </p>
          <div className="w-full border-[2px] rounded-[4px] p-3 mb-3 ">
            <label className="">
              Name of School/lnstitution attended for qualifying exam (+2/12th)*
            </label>
            <input
              id="hseschool"
              type="text"
              className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
            />
            <label>Select Board*</label>
            <div className="w-full flex space-x-4">
              <select
                required
                onChange={handleBoardChange}
                id="hseboard"
                name="hse-board"
                className="rounded-[4px]  border-[1px] w-auto text-md hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              >
                <option value=""></option>
                <option value="State Board">State Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ISC</option>
                <option value="Others">Others</option>
              </select>
              {oth_hse && (
                <input
                  id="others-hse"
                  type="text"
                  placeholder="Specify-Board"
                  className="rounded-[4px]  border-[1px] w-full  hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              )}
            </div>

            <div className="w-full pt-3 space-y-2">
              <label className="text-[15px]">Mark list upload [12th]</label>

              <div className="w-full xl:space-x-3  flex flex-col xl:flex-row">
                
                
                  <input
                    id="file12th"
                    onChange={handle12thfile}
                    type="file"
                    className="rounded-[4px] w-full mb-2 border-[1px] hover:border-black focus:outline-red-600 border-gray-400  "
                  />
                  <Button sx={{height:"100%"}}
                    id="file10th"
                    variant="contained"
                    onClick={markupload12th}
                  >
                    Upload
                  </Button>
              
              </div>
              {imgLoader12 && <LinearProgress />}

              <label className="text-sm text-red-600">
                upload an  image file of size less than 5mb*
              </label>
            </div>
          </div>
        </div>

        <div className="xl:w-1/2   p-4 h-full">
          <p className="text-md font-semibold my-3 text-center">
            Details of Common Entrance Test (KEAM)
          </p>
          <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
            <div className="w-auto justify-between sm:flex items-center">
              <label className="text-[15px]  mr-6">Year</label>
              <input
                id="keamyear"
                type="text"
                className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              />
            </div>
            <div className="w-auto justify-between sm:flex items-center">
              <label className="text-[15px]  mr-8">Roll No</label>
              <input
                id="keamroll"
                type="text"
                className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              />
            </div>
            <div className="w-auto justify-between sm:flex items-center">
              <label className="text-[15px]  mr-6">Rank</label>
              <input
                id="keamrank"
                type="text"
                className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              />
            </div>
            <div className="w-auto justify-between sm:flex items-center">
              <label className="text-[15px]  mr-6">
                Paper I score(Physics & chemistry)
              </label>
              <input
                id="keamp1"
                type="text"
                className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              />
            </div>
            <div className="w-auto justify-between sm:flex items-center">
              <label className="text-[15px]  mr-6">
                Paper II score(Mathematics)
              </label>
              <input
                id="keamp2"
                type="text"
                className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              />
            </div>
            <div className="w-auto justify-between sm:flex items-center">
              <label className="text-[15px]  mr-6">Total KEAM Score</label>
              <input
                id="keamtotal"
                type="text"
                className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              />
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-[15px]">Mark list upload [KEAM]</label>

              <div className="w-full xl:space-x-3  flex flex-col xl:flex-row">
               
                
                  <input
                    id="fileKeam"
                    onChange={handlefileKeam}
                    type="file"
                    className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400  "
                  />
                  <Button sx={{height:"100%"}} variant="contained" onClick={keamupload}>
                    Upload
                  </Button>
                
              </div>
              {imgLoaderKeam && <LinearProgress />}
              <label className="text-sm text-red-600">
                upload an  image file of size less than 5mb*
              </label>
            </div>
          </div>
          <div className="w-full flex flex-col items-end justify-end ">
            <div className="w-full rounded-md my-4 bg-red-100 h-auto">
              <p className="p-2 text-center text-red-600 italic">
                After selecting the mark list make sure you click <b>UPLOAD</b> button.
                Your last change will be shown, you can also use the upload button to
                change the file later.Please refresh the page to view recent changes.
              </p>
            </div>
            <Button sx={{height:"100%"}} className="" variant="contained">
              <Link to="/nriform/payment" onClick={eduDetailUpload}>
                Save
              </Link>
              {/* <Link to="/nriform/declaration">Save</Link> */}
            </Button>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="w-full  h-auto flex p-1 flex-col xl:flex-row shadow-md ">
          <div className="xl:w-1/2   p-4 h-full">
            <p className="text-md mb-3  text-center">10th Marks Details*</p>
            <div className="w-full  ">
              <input
                id="sslcschool"
                type="text"
                placeholder=" Name of School/lnstitution attended for SSLC/AlSSE(10th)*"
                className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              />

              <input
                id="sslcboard"
                type="text"
                placeholder="Board*"
                className="rounded-[4px]  border-[1px] w-full my-3 hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              />
            </div>
            <p className="text-md my-3 text-center">Percentage obtained in 10th </p>
            <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-1">1.</label>
                <label className="text-[15px]  mr-6">English</label>
                <input
                  id="sslceng"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-1">2.</label>
                <label className="text-[15px]  mr-8">Maths</label>
                <input
                  id="sslcmaths"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-1">3.</label>
                <label className="text-[15px]  mr-6">Science</label>
                <input
                  id="sslccs"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-1">4.</label>
                <label className="text-[15px]  mr-6">Physics</label>
                <input
                  id="sslcphy"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-1">5.</label>
                <label className="text-[15px]  mr-6">Chemistry</label>
                <input
                  id="sslcchem"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-1">6.</label>
                <label className="text-[15px]  mr-6">Biology</label>
                <input
                  id="sslcbio"
                  type="text"
                  placeholder="Percentage-obtained*"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-[15px]">Mark list upload [10th]*</label>
              <input
                id="file10th"
                 onChange={markupload}
                type="file"
                className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              />
              <label className="text-sm text-red-600">
                upload a  image file of size less than 5mb*
              </label>
            </div>
          </div>
          <div className="xl:w-1/2 flex items-end  flex-col  p-4 h-full">
            <p className="text-md mb-3 mx-auto ">
              Details of Common Entrance Test (KEAM)
            </p>
            <div className="w-full space-y-3 p-3 border-[2px] rounded-[4px]">
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-6">Year</label>
                <input
                  id="keamyear"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-8">Roll No</label>
                <input
                  id="keamroll"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-6">Rank</label>
                <input
                  id="keamrank"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-6">
                  Paper I score(Physics & chemistry)
                </label>
                <input
                  id="keamp1"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-6">
                  Paper II score(Mathematics)
                </label>
                <input
                  id="keamp2"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-[15px]  mr-6">Total KEAM Score</label>
                <input
                  id="keamtotal"
                  type="text"
                  className="rounded-[4px]  border-[1px] w-full sm:w-auto hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
                />
              </div>
            </div>
            <div className="w-full pt-3 space-y-2">
              <label className="text-[15px]">Mark list upload [KEAM]</label>
              <input
                id="fileKeam"
                 onChange={markupload}
                type="file"
                className="rounded-[4px]  border-[1px] w-full mb-3 hover:border-black focus:outline-red-600 border-gray-400 p-[4px] "
              />
              <label className="text-sm text-red-600">
                upload a  image file of size less than 5mb*
              </label>
            </div>
            <div className="w-full flex flex-col items-end justify-end p-3">
            <div className="w-full rounded-md my-4 bg-red-100 h-24"></div>
            <Button sx={{height:"100%"}} className="" variant="contained">
            <Link to="/nriform/payment" onClick = { eduDetailUpload }>Save</Link>
            <Link to="/nriform/declaration">Save</Link>
            </Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Education;
