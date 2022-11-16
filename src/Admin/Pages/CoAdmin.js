import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import axios from "axios";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  IconButton,
  Button,
} from "@mui/material";

const CoAdmin = () => {
  const [dept, setDept] = useState();
  const [card, addCard] = useState([]);
  const [actionIcon, setActionIcon] = useState("+");
  const api = 'https://ams-backend-368717.el.r.appspot.com/'
  console.log(card);
  function handleDeptChange(e) {
    setDept(e.target.value);
  }
  function handleActionClick(index) {
    if (actionIcon === "+") {
      setActionIcon("-");
      addCard([...card, card.length]);
    } else {
      setActionIcon("+");
      const list = [...card];
      list.pop();
      addCard(list);
    }
  }

  const saveCoadmin=(e)=>{
    e.preventDefault()
    addCard([...card, card.length])
    setActionIcon("+") 
    const data = {
      "headers" : {
        'Authorization':'Bearer '+localStorage.getItem("admin_access_token"),
      },
      "firstName":document.getElementById("firstName").value,
      "middleName":document.getElementById("middleName").value,
      "lastName":document.getElementById("lastName").value,
      "email":document.getElementById("email").value,
      "password":document.getElementById("password").value,
    }
    console.log("something")
    axios.post(api+"admin/add_coadmin",data).then((res)=>{
        console.log(res)
      }).catch((e)=>{console.log(e)})
  }

  return (  
  <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-black xl:pr-5 space-y-4 lg:space-y-0  lg:grid grid-cols-2 xl:grid-cols-3 gap-3 w-[350px] h-auto sm:w-auto">
      {card.length === 0 && (
        <div className="w-full col-span-3 italic h-[500px]  flex items-center justify-center">
          <p className="text-3xl text-center">Click + to add Co-Admin</p>
        </div>
      )}

      {/* mapping render function to elements in array card */}

      {card.map((index) => {
        return (
          <div
            key={index}
            className="w-full xl:w-auto p-6 pb-4 space-y-4 rounded-md border-[3px] bg-white border-black"
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

            <FormControl className="w-full" size="small">
              <InputLabel id="demo-select-small">Dept.</InputLabel>
              <Select
                id="demo-select-small"
                value={dept}
                onChange={handleDeptChange}
                label="Dept."
              >
                <MenuItem value={10}>Computer Science</MenuItem>
                <MenuItem value={20}>Computer Science (AI&DS)</MenuItem>
                <MenuItem value={30}>Electronics and Communications</MenuItem>
                <MenuItem value={40}>Electrical and Electronics</MenuItem>
                <MenuItem value={50}>Mechanical</MenuItem>
                <MenuItem value={60}>Civil</MenuItem>
              </Select>
            </FormControl>
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
            <div className="w-full flex justify-between">
              <div className="w-auto flex gap-2">
                <IconButton size="large"  color="primary">
                  <SaveIcon fontSize="inherit" onClick={saveCoadmin}/>
                </IconButton>
                <IconButton color="primary" size="large">
                  <RemoveCircleIcon fontSize="inherit" />
                </IconButton>
              </div>
              <Button>View more</Button>
            </div>
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
