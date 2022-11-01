import { Button, TextField } from "@mui/material";
import React from "react";

export const CoadminCard = () => {
  return (
    <div className="w-full xl:w-[400px] p-4 space-y-4 rounded-md border-[3px] bg-white border-black">
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
        label="MiddleName"
        id="middleName"
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
      <Button variant="contained">Save</Button>
    </div>
  );
};
