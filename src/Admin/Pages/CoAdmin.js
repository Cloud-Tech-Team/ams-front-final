import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const CoAdmin = () => {
  const [card, addCard] = useState([0,1,2,3]);
  const [actionIcon, setActionIcon] = useState("+");
  function handleActionClick(index) {
    if (actionIcon === "+") {
      setActionIcon("-");
      addCard([...card, card.length]);
    } else {
      setActionIcon("+");
      const list = [...card];
      list.pop()
      addCard(list);
    }
  }

  const saveCoadmin=(e)=>{
    e.preventDefault()
    addCard([...card, card.length])
    setActionIcon("+") 
    const data = {
      "headers" : {
        'Authorization':'Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTY2OTdlODg3YTM1MGU4ZDJmNDFlMSIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY3MjgzMzY4LCJleHAiOjE2NjczNjk3Njh9.MwavSkILEuIBAax7in9cfOs1fNSgvJBNao4KoySgOeA',
      },
      "firstName":document.getElementById("firstName").value,
      "middleName":document.getElementById("middleName").value,
      "lastName":document.getElementById("lastName").value,
      "email":document.getElementById("email").value,
      "password":document.getElementById("password").value,
      
    }
    const data2 ={
      "firstName":"abijith",
      "middleName":"biju",
      "lastName":"biju",
      "email":"abijith@gmail.com",
      "password":"blabla",
      headers : {
        'authorization':'Bearer '+localStorage.getItem("admin_access_token"),
      },
}
    console.log(data)
    axios.post("https://ams-backend-api.herokuapp.com/admin/add_coadmin",data).then((res)=>{
        console.log(res)
      }).catch((e)=>{console.log(e)})
  }

  return (
    <div className="overflow-x-auto space-y-4 xl:space-y-0  lg:grid grid-cols-3 gap-3 w-[350px] h-auto sm:w-auto">
      {card.length === 0 && (
        <div className="w-full italic h-[500px]  flex items-center justify-center">
          <p className="text-3xl text-center">Click + to add Co-Admin</p>
        </div>
      )}

      {/* mapping render function to elements in array card */}

      { card.map((index) => {
        return (
          <div
            key={index}
            className="w-full xl:w-auto p-4 space-y-4 rounded-md border-[3px] bg-white border-black"
          >
            <div className="w-full space-y-4 sm:space-y-0 h-auto sm:flex sm:space-x-3">
              <TextField
                required
                label="FirstName"
                id="firstName"
                type="text"
                size="small"
                fullWidth
              />
              <TextField
                required
                label="LastName"
                id="lastName"
                type="text"
                size="small"
                fullWidth
              />
            </div>

            <TextField
              required
              label="EmailID"
              id="email"
              type="email"
              size="small"
              fullWidth
            />
            <TextField
              required
              label="Password"
              id="password"
              type="password"
              size="small"
              fullWidth
            />
            <Button onClick={saveCoadmin} variant="contained">Save</Button>
          </div>
        );
      })}
      <div
        onClick={handleActionClick}
        className="w-16 rounded-full flex items-center justify-center text-3xl right-6 bottom-6 text-white fixed h-16 bg-black"
      >
        {actionIcon}
      </div>
    </div>
  );
};
export default CoAdmin;
