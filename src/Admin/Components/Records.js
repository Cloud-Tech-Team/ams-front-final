import { Button, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import { Verification } from '../../nri/Verification'



const Records = (props) => {
  let name = props.data.middleName ? props.data.firstName +" "+props.data.middleName+" "+props.data.lastName : props.data.firstName + ' ' + props.data.lastName
  return (
    <div className='w-full grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 items-center p-2 justify-between bg-white  rounded-md'>
        <img src={props.data.filePhotograph} className='w-9 object-cover h-9 rounded-full' alt='avatar' />
        <p>{props.data.applicationNo}</p>
        <p>{name}</p>
        <div>
          <p>{props.data.course}</p>
          <p>{props.data.bp1 === null ? ' ': props.data.bp1 }</p>
        </div>
        <div>
          <p>{props.data.phone}</p>
          <p>{props.data.email}</p>
        </div>
        {/* {props.data.paymentCompleted === true ? <p className='text-green-500'>Payment Completed</p> : <p className='text-red-500'>Payment pending</p> } */}
        <div className='flex items-end justify-end'>
          <Button color="greenary" size="small" sx={{width:"30%",color:"#FFF"}} variant="contained">Print</Button>
          <IconButton>
            <MoreVertIcon />
          </IconButton>  
        </div>
        {/* <div className='col-span-6 h-auto'>
        <div className="font-poppins min-h-screen mx-auto w-11/12 lg:w-4/6 py-10  xl:my-auto">
      <div className="h-auto w-full mt-10 p-2 bg-white rounded-[4px] ">
        <div className="flex items-center px-6 justify-between">
          <img
            className="w-36"
            src={props.data.filePhotograph}
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
        <div className="h-auto m-3 xl:flex xl:space-x-4">
          <div className="xl:w-1/2 space-y-3  p-4    rounded-md border-[2px] ">
            <div className="flex items-center justify-between">
              <label>Name of the applicant:</label>
              <label className="font-semibold">{props.data.firstName+' ' + (props.data.middleName ? (props.data.middleName+' ') : ' ') + props.data.lastName}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Date of Birth :</label>
              <label className="font-semibold">{props.data.dob.toString().slice(0,10)}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Gender:</label>
              <label className="font-semibold">{props.data.gender}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Aadhar:</label>
              <label className="font-semibold">{props.data.aadhaar}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Phone 1(M):</label>
              <label className="font-semibold">{props.data.aPhone}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Phone 2(In Kerala)):</label>
              <label className="font-semibold">{props.data.phone}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Name of parent/Gaurdian:</label>
              <label className="font-semibold">{props.data.guardianDetails.name}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Parent's Occupation:</label>
              <label className="font-semibold">{props.data.guardianDetails.occupation}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>NRI sponsor:</label>
              <label className="font-semibold">{props.data.NRIdetails.name}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>Relation with applicant:</label>
              <label className="font-semibold">{props.data.NRIdetails.relation}</label>
            </div>
          </div>
          <div className="xl:w-1/2  p-4  space-y-3  rounded-md border-[2px] ">
            <p className="font-semibold">Contact Address</p>
            <div className="flex items-center justify-between">
              <label>House Name</label>
              <label className="font-semibold">{props.data.contactAddress.addressL1}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>State</label>
              <label className="font-semibold">{props.data.contactAddress.state}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>District,City</label>
              <label className="font-semibold">{props.data.contactAddress.district + ' , '+props.data.contactAddress.city}</label>
            </div>

            <div className="flex items-center justify-between">
              <label>Pin</label>
              <label className="font-semibold">{props.data.contactAddress.pincode}</label>
            </div>

            <p className="font-semibold">Permanent Address</p>
            <div className="flex items-center justify-between">
              <label>House Name</label>
              <label className="font-semibold">{props.data.permanentAddress.addressL1}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>State</label>
              <label className="font-semibold">{props.data.permanentAddress.state}</label>
            </div>
            <div className="flex items-center justify-between">
              <label>District,City</label>
              <label className="font-semibold">{props.data.permanentAddress.district + ' , '+props.data.permanentAddress.city}</label>
            </div>

            <div className="flex items-center justify-between">
              <label>Pin</label>
              <label className="font-semibold">{props.data.permanentAddress.pincode}</label>
            </div>
          </div>
        </div>

        <div className="w-full  h-auto flex p-3  flex-col xl:flex-row  mt-3">
          <div className="xl:w-1/2  p-3  h-full">
            <p className="text-lg my-3 underline font-semibold">
              10th Marks Details{" "}
            </p>
            <label>Name of Institution: <p>{props.data.grade10.school}</p></label>
            <br />
            <label>Board: {props.data.grade10.board}</label>
            <div className="w-full mt-3  p-1 border-[2px] rounded-[4px]">
              <img src={marklist10} alt="mrklist10" />
            </div>
          </div>
          <div className="xl:w-1/2  p-3 ">
            <p className="text-lg my-3 underline font-semibold">
              12th Marks Details{" "}
            </p>
            <label>Name of Institution: <p>{props.data.grade12.school}</p></label>
            <br />
            <label>Board: {props.data.grade12.board}</label>
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
                <label className="font-semibold">{props.data.keam.year}</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-8">Roll No</label>
                <label className="font-semibold">{props.data.keam.rollNumber}</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Rank</label>
                <label className="font-semibold">{props.data.keam.rank}</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper I score(Physics & chemistry)
                </label>
                <label className="font-semibold">{props.data.keam.markPaper1}</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">
                  Paper II score(Mathematics)
                </label>
                <label className="font-semibold">{props.data.keam.markPaper2}</label>
              </div>
              <div className="w-auto justify-between sm:flex items-center">
                <label className="text-md  mr-6">Total KEAM Score</label>
                <label className="font-semibold">{props.data.keam.totalMark}</label>
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
              
              <label>{branch[props.data.bp1]}</label>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-center my-6">
            <input type="checkbox" onChange={handlecheck} className="w-4 h-4 mr-2 accent-red-600" />I
            hereby declare that all the information furnished above are true and
            correct and we will obey the rules and regulations of the
            institution if admitted{" "}
          </p>
          <Button color="blue" sx={{color: "#FFF"}} variant="contained" onClick={movetosubmit}>Final Submit</Button>
        </div>
        
      </div>
    </div>
        </div> */}
    </div>
  )
}

export default Records