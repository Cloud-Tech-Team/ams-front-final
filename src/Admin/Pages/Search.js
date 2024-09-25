import React from 'react'
import { Button, TextField } from "@mui/material";
import axios from 'axios';
import { useState } from 'react';


const Search = () => {
const [data,setData] = useState([""])
const handleSearch =(e)=>{
    e.preventDefault()
    axios.get('https://ams-backend-687825430145.asia-east1.run.app/admin/search',{
        headers : {
        'authorization':'Bearer '+localStorage.getItem("admin_access_token"),
      }
    }).then((res)=>{
        console.log(res.data.list)
        setData(res.data.list)
      })

}
  return (
    <div>
        <Button onClick={handleSearch} variant="contained">search</Button>
        <div>
          <ol>
            {
              data.map((item)=>{return(<li>{item.firstName +" "+ item.lastName}</li>)})
            }
          </ol>
        </div>
    </div>
  )
}

export default Search