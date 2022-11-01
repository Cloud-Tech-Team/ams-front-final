import React, { useState } from 'react';

const Nri = () => {
  let yr =  new Date().getFullYear();
  let yr_ = yr + 1;
  let users = [];
  
  const [data,setData] = useState(users);
 const columns=[
    { title: 'Reg.No' ,field:'id' },
    { title:'Name',field:'name'},
    { title:'Gender',field:'gender'},
    { title:'DOB',field:'dob',cellStyle : { minWidth: 120,} },
    { title:'Email',field:'email'},
    { title:'Branch',field:'branch'},
    { title:'Phone',field:'phone',cellStyle : { minWidth: 200,}},
  ]
  
  return (
    <div className="overflow-x-auto w-[350px] h-[720px] sm:w-auto border-[4px] bg-white rounded-md border-black">
        
    </div>
  );
};
export default Nri;
