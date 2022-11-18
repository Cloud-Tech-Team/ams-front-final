import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  Backdrop,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const NPersonal = () => {
  const api = "https://ams-backend-368717.el.r.appspot.com/";
  const [loader, setLoader] = useState(false);
  const [msg, setMsg] = useState(true);
  const [ciwg, setCiwg] = useState(true);
  const [photopicked, setPhotopicked] = useState(false);
  const [alreadyUploaded, setAlreadyUploaded] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    aadhaar: "",
    phone: "",
    aPhone: " ",
    guardianDetails: {
      name: "",
      occupation: "",
    },
    NRIdetails: {
      name: "",
      relation: "",
    },
    contactAddress: {
      addressL1: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
    permanentAddress: {
      addressL1: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
    grade10: {
      school: "",
      board: "",
    },
    grade12: {
      school: "",
      board: "",
    },
    keam: {
      markPaper1: "",
      markPaper2: "",
      rank: "",
      rollNumber: "",
      totalMark: "",
      year: "",
    },
    bp1: "",
  });

  localStorage.setItem("pageNo", 1);
  const nav = useNavigate();

  useEffect(() => {
    setLoader(!loader);
    axios
      .get(api + "user/nri/application", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(async (res) => {
        setUser(res.data.user);
        setLoader(false);
        if (res.data.user.applicationCompleted) nav("/dashboard");
        console.log(res);
        document.getElementById("fname").value = res.data.user.firstName;
        document.getElementById("mname").value = res.data.user.middleName;
        document.getElementById("lname").value = res.data.user.lastName;
        document.getElementById("phoneKerala").value = res.data.user.phone;
        document.getElementById("dob").valueAsDate = new Date(
          res.data.user.dob
        );
        document.getElementById("phone1").value =
          res.data.user.aPhone === undefined ? " " : res.data.user.aPhone;

        document.getElementById("Chouse").value =
          res.data.user.contactAddress.addressL1;
        document.getElementById("Ccity").value =
          res.data.user.contactAddress.city;
        document.getElementById("Cdistrict").value =
          res.data.user.contactAddress.district;
        document.getElementById("Cstate").value =
          res.data.user.contactAddress.state;
        document.getElementById("Cpincode").value =
          res.data.user.contactAddress.pincode;

        document.getElementById("Phouse").value =
          res.data.user.permanentAddress.addressL1;
        document.getElementById("Pcity").value =
          res.data.user.permanentAddress.city;
        document.getElementById("Pdistrict").value =
          res.data.user.permanentAddress.district;
        document.getElementById("Pstate").value =
          res.data.user.permanentAddress.state;
        document.getElementById("Ppincode").value =
          res.data.user.permanentAddress.pincode;

        document.getElementById("parentName").value =
          res.data.user.guardianDetails.name;
        document.getElementById("parentOccupation").value =
          res.data.user.guardianDetails.occupation;
        document.getElementById("sponsorName").value =
          res.data.user.NRIdetails.name;
        document.getElementById("sponsorRelation").value =
          res.data.user.NRIdetails.relation;

        if (res.data.user.filePhotograph != null) {
          setPhotopicked(true);
          setAlreadyUploaded(true);
        }
        if (res.data.user.quota === "ciwg") {
          setCiwg(false);
        }
        setLoader(false);
      })
      .catch((e) => {
        console.log(e);
        setLoader(false);
      });
  }, []);

  const autofill = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      document.getElementById("Phouse").value =
        document.getElementById("Chouse").value;
      document.getElementById("Pstate").value =
        document.getElementById("Cstate").value;
      document.getElementById("Pdistrict").value =
        document.getElementById("Cdistrict").value;
      document.getElementById("Pcity").value =
        document.getElementById("Ccity").value;
      document.getElementById("Ppincode").value =
        document.getElementById("Cpincode").value;
    }
  };

  const forphoto = async (e) => {
    setPhotopicked(true);
  };

  const handlephotoFile = async (e) => {
    e.preventDefault();
    const file = document.getElementById("photo").files[0];
    const formData = new FormData();
    formData.append("filePhotograph", file);
    console.log(formData);
    if (photopicked === true) {
      try {
        await axios
          .patch(
            api +
              "user/nri/application-page1/" +
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
              window.alert("Photograph Uploaded Successfully");
            } else {
              window.alert("Failed to Upload.Try Again");
            }
          });
      } catch (error) {
        setLoader(false);
        window.alert("Technical Error..Try After Sometime");
        console.log(error);
      }
    } else {
      window.alert("Please select your photo");
    }
  };

  const personalUpload = async (e) => {
    e.preventDefault();
    setLoader(!loader);
    const data = {
      // firstName: document.getElementById("fname").value,
      // middleName: document.getElementById("mname").value,
      // lastName: document.getElementById("lname").value,
      aPhone: document.getElementById("phone1").value,
      dob: document.getElementById("dob").value,

      addressL1C: document.getElementById("Chouse").value,
      cityC: document.getElementById("Ccity").value,
      districtC: document.getElementById("Cdistrict").value,
      stateC: document.getElementById("Cstate").value,
      pincodeC: document.getElementById("Cpincode").value,

      addressL1P: document.getElementById("Phouse").value,
      cityP: document.getElementById("Pcity").value,
      districtP: document.getElementById("Pdistrict").value,
      stateP: document.getElementById("Pstate").value,
      pincodeP: document.getElementById("Ppincode").value,

      guardianName: document.getElementById("parentName").value,
      guardianOccupation: document.getElementById("parentOccupation").value,

      NRIname: ciwg
        ? document.getElementById("sponsorName").value
        : user.NRIdetails.name,
      NRIrelation: ciwg
        ? document.getElementById("sponsorRelation").value
        : user.NRIdetails.relation,
    };
    console.log(data);
    if (
      data.aPhone &&
      data.dob &&
      data.addressL1C &&
      data.aPhone &&
      data.dob &&
      data.addressL1C &&
      data.cityC &&
      data.districtC &&
      data.stateC &&
      data.pincodeC &&
      data.addressL1P &&
      data.cityP &&
      data.districtP &&
      data.stateP &&
      data.pincodeP &&
      data.guardianName &&
      data.guardianOccupation &&
      data.NRIname &&
      data.NRIrelation &&
      photopicked
    ) {
      try {
        await axios
          .patch(
            api +
              "user/nri/application-page1/" +
              localStorage.getItem("user_id"),
            data,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
              },
            }
          )
          .then((res) => {
            console.log("this is the response \n" + res);
            if (res.data.status === "SUCCESS") {
              setLoader(false);
              nav("/nriform/education");
              console.log("details patched");
            } else {
              setLoader(false);
              window.alert(res.data.message);
              console.log("Something wrong happened");
            }
          });
      } catch (error) {
        setLoader(false);
        window.alert("Technical Error..Try After Sometime");
        console.log(error);
      }
    } else {
      setLoader(false);
      window.alert("Some required Field Empty");
    }
  };
  return (
    <div className="font-poppins py-20 h-auto min-h-screen  mx-auto w-11/12 sm:w-3/4 md:flex items-center xl:my-auto">
      <div className="h-auto xl:flex w-full p-2 bg-white  rounded-[4px]">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={msg}
        >
          <Dialog
            open={msg}
            onClose={() => {
              setMsg(false);
            }}
          >
            <DialogTitle>Important Message</DialogTitle>
            <DialogContent>
              We recommend you to contact
              <br />
              <b>Mr Binoy P.K (ph:9446717178) </b> before proceeding
              <br />
              Ignore this message if already contacted
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setMsg(false);
                }}
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Backdrop>
        <div className="xl:w-1/2  h-full p-2">
          <div className="w-full p-3 space-y-4 md:space-y-0 md:flex md:gap-4">
            <TextField
              className="w-full md:w-1/3"
              InputLabelProps={{
                shrink: true,
              }}
              id="fname"
              defaultValue=""
              label="First Name"
              type="text"
              size="small"
              required
            />
            <TextField
              className=" w-full md:w-1/3"
              InputLabelProps={{
                shrink: true,
              }}
              id="mname"
              label="Middle Name"
              type="text"
              size="small"
            />
            <TextField
              className=" w-full md:w-1/3"
              InputLabelProps={{
                shrink: true,
              }}
              id="lname"
              label="Last Name"
              type="text"
              size="small"
              required
            />
          </div>
          <div className="w-full p-3 space-y-4 md:space-y-0 md:flex md:gap-4">
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              className=" w-full md:w-1/3"
              id="phone1"
              label="Contact Ph. No(M)"
              type="text"
              size="small"
              inputProps={{
                maxLength: 10,
              }}
              required
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              className=" w-full md:w-1/3"
              id="phoneKerala"
              label="Contact Ph. No(Kerala)"
              type="text"
              size="small"
              inputProps={{
                maxLength: 10,
              }}
              required
            />
            <TextField
              className="w-full md:w-2/5"
              label="DOB"
              type="date"
              size="small"
              id="dob"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="w-full space-y-3 md:space-y-0 gap-3 p-3 md:flex ">
            <TextField
              label="Photo Upload"
              type="file"
              size="small"
              id="photo"
              fullWidth
              onChange={forphoto}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            {/* {alreadyUploaded && <p className="text-green-500 text-center bg-green-200 rounded-md px-2 border-[2px] border-green-400">Already<br/>uploaded</p>} */}
            <Button variant="contained" onClick={handlephotoFile}>
              Upload
            </Button>
          </div>
          <div className="w-full px-3 flex text-sm md:text-md items-center justify-between">
            <label className="text-red-500 ">
              Upload an image file of size less than 1mb
            </label>
            {alreadyUploaded && (
              <label className="text-green-500 ">Already uploaded</label>
            )}
          </div>
          <div className=" flex flex-col p-3">
            <label className="text-xl m-2 ">Contact Address</label>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="Chouse"
              fullWidth
              label="House Name"
              type="text"
              size="small"
              required
            />
          </div>
          <div className="space-y-3 md:space-y-0 md:flex items-center p-3 gap-3 ">
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="Cstate"
              className="w-full md:w-1/2"
              label="State"
              type="text"
              size="small"
              required
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="Cdistrict"
              className="w-full md:w-1/2"
              label="District"
              type="text"
              size="small"
            />
          </div>
          <div className="space-y-3 md:space-y-0 md:flex items-center gap-3 p-3">
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="Ccity"
              className="w-full md:w-1/2"
              label="City"
              type="text"
              size="small"
              required
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="Cpincode"
              className="w-full md:w-1/2"
              label="Pincode"
              type="text"
              size="small"
              inputProps={{
                maxLength: 6,
              }}
            />
          </div>
          <div className="w-full p-1">
            <Checkbox
              className="ml-6"
              id="checkbox"
              onClick={autofill}
            ></Checkbox>
            <label>Use Contact address as Permanent address</label>
          </div>
        </div>
        <div className="xl:w-1/2  h-full ">
          <div className=" flex flex-col p-3">
            <label className="text-xl ml-2 mb-2 ">Permanent Address</label>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="Phouse"
              fullWidth
              label="House Name"
              type="text"
              size="small"
              required
            />
          </div>
          <div className="space-y-3 md:space-y-0 md:flex items-center p-3 gap-3 ">
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="Pstate"
              className="w-full md:w-1/2"
              label="State"
              type="text"
              size="small"
              required
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="Pdistrict"
              className="w-full md:w-1/2"
              label="District"
              type="text"
              size="small"
            />
          </div>
          <div className="space-y-3 md:space-y-0 md:flex items-center gap-3 p-3">
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="Pcity"
              className="w-full md:w-1/2"
              label="City"
              type="text"
              size="small"
              required
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="Ppincode"
              className="w-full md:w-1/2"
              label="Pincode"
              type="text"
              size="small"
              inputProps={{
                maxLength: 6,
              }}
            />
          </div>
          <label className="text-xl ml-5 m-2">Parental Details</label>
          <div className="space-y-3 md:space-y-0 md:flex items-center gap-3 p-3">
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="parentName"
              className="w-full md:w-1/2"
              label="Parent/Gaurdian"
              type="text"
              size="small"
              required
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="parentOccupation"
              className="w-full md:w-1/2"
              label="Occupation"
              type="text"
              size="small"
            />
          </div>
          {user.quota != "ciwg" && (
            <div className="w-full">
              {" "}
              <div className=" flex items-center p-3 space-x-2">
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="sponsorName"
                  className="w-1/2"
                  label="NRI Sponsor"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </div>
              <div className="w-full px-3">
                <label className="ml-2">Relation with NRI sponsor*</label>
                <select
                  required
                  className="rounded-[4px] border-[1px] w-full hover:border-black focus:outline-red-600 border-gray-400 p-[8px] "
                  id="sponsorRelation"
                >
                  <option value=""></option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Uncle">Uncle</option>
                  <option value="Aunt">Aunt</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Niece">Niece</option>
                  <option value="Nephew">Nephew</option>
                </select>
              </div>
            </div>
          )}
          <div className="w-full  flex items-center p-4 justify-between">
            <label className="text-sm md:text-md text-red-500">
              Note: Make sure you click upload button before proceeding
            </label>
            <Button onClick={personalUpload} id="save" variant="contained">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPersonal;
