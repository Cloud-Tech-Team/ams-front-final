import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  
  return (
    <div id="bar" className={props.data}>
      <div onClick={props.onToggle} className="w-full h-full fixed xl:relative flex flex-col items-center justify-center space-y-8 text-lg sm:text-2xl  xl:text-lg xl:rounded-md">
        <Link onClick={props.onToggle} to="/admin" className="text-white   hover:scale-110  italic ">
          Home
        </Link>
        <Link onClick={props.onToggle} to="/admin/coadmin" className="text-white hover:scale-110 italic ">
          Coadmin
        </Link>
        <Link onClick={props.onToggle} to="/admin/nri" className="text-white  hover:scale-110  italic ">
          NRI
        </Link>
        <Link onClick={props.onToggle} to="/admin/super" className="text-white  hover:scale-110  italic ">
          Supernumerary
        </Link>
        <Link onClick={props.onToggle} to="/admin/mgmt" className="text-white  hover:scale-110  italic ">
          Management
        </Link>
        <Link onClick={props.onToggle} to="gov" className="text-white  hover:scale-110  italic ">
          Government
        </Link>
        
        <Link onClick={props.onToggle} to="/admin/settings" className="text-white  hover:scale-110  italic ">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
