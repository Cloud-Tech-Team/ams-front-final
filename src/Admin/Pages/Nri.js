
import React from 'react'
import Records from '../Components/Records'
import { useEffect,useState } from 'react'
import axios from 'axios'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import * as XLSX from 'xlsx'
import { Tooltip } from '@mui/material';

const Nri = () => {
  const api = 'https://ams-backend-368717.el.r.appspot.com/'
  const [list,setList] = useState([])
  useEffect(() => {
      axios.post(api+'admin/search',{
        "applicationCompleted" : true,
        "quota" : "NRI"
    },{
        headers : {
          Authorization : 'Bearer '+localStorage.getItem('admin_access_token')
        }
      }).then(res=>{
        setList(res.data.list)
        console.log(res)
      }).catch(e=>{
        console.log(e)
      });
  }, [])

  const parseData=(data)=>{
    let rows = []
    let slno = 1;
    for (let i of data){
      let name = "";
      if (i.middleName) {
        name = i.firstName + " " + i.middleName + " " + i.lastName;
      } else {
        name = i.firstName + " " + i.lastName;
      }
      rows.push({
        'Sl No.': slno.toString(),
        'Application No.':i.applicationNo,
        'Name' : name,
        'Email' : i.email,
        'Phone No.': i.phone.toString(),
        'parent/guardian':i.guardianDetails.name,
        'parent/guardian occupation':i.guardianDetails.occupation,
        'NRI sponsor':i.NRIdetails.name,
        'Relation':i.NRIdetails.relation,
        'Program' : i.course,
        'Quota' : i.quota,
        'Branch':i.bp1,
        'SSLC school' : i.grade10.school,
        'SSLC board' : i.grade10.board,
        '12th school' : i.grade12.school,
        '12th board' : i.grade12.board,
        'KEAM year' : i.keam.year,
        'KEAM roll No.' : i.keam.rollNumber,
        'KEAM mark paper 1.' : i.keam.markPaper1,
        'KEAM mark paper 2.' : i.keam.markPaper2,
        'Transaction ID' : i.transactionID,
      })
      slno+=1
    }
    return rows
  }

  const dataToExcel=()=>{
    const rows = parseData(list) //convert list to row format
    const worksheet = XLSX.utils.json_to_sheet(rows);
    worksheet['!cols'] = [
      {wch:5},//a
      {wch:15},//b
      {wch:30},//c
      {wch:35},//d
      {wch:20},//e
      {wch:30},//f
      {wch:30},//g
      {wch:30},//h
      {wch:10},//i
      {wch:10},//j
      {wch:10},//k
      {wch:10},//l
      {wch:50},//m
      {wch:10},//n
      {wch:50},//o
      {wch:10},//p
      {wch:10},//q
      {wch:15},//r
      {wch:17},//s
      {wch:17},//t
      {wch:50},//u
    ] //to set column width
    const workbook = XLSX.utils.book_new(); //create new book
    XLSX.utils.book_append_sheet(workbook, worksheet, "NRI"); //create new spresdsheet
    XLSX.writeFile(workbook, "Admissions_NRI.xlsx", { compression: true }); //export to .xlsx
  }

  return (
    <div className="overflow-x-auto grid gird-cols-9 scrollbar-thin space-y-3  px-4 scrollbar-thumb-rounded-full scrollbar-thumb-black ">
        {/* <div className='w-full  space-x-4 items-end justify-end h-auto'>
            <div className='w-auto h-8 rounded-full bg-white'>
        
            </div>
            <div className='w-9 h-9 rounded-full bg-white'></div>

        </div> */}
        <div className='w-full justify-end items-center flex px-3'>
          <Tooltip title="Download Excel">
          <CloudDownloadIcon  fontSize='large' onClick={dataToExcel} />
          </Tooltip>
        </div>
        {list.map((index)=>{
            return(<Records key={list.indexOf(index)} data={index} />)
        })}
    </div>
  )
}

export default Nri