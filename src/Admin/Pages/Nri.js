import React, { useState } from 'react';
import { CoadminCard } from '../Components/CoadminCard';

const Nri = () => {
  
  return (
    <div className="overflow-x-auto space-y-4 xl:space-y-0 xl:space-x-3 lg:flex  w-[350px] h-auto sm:w-auto">
        <CoadminCard />
        <CoadminCard />
        <CoadminCard />
        <div className="w-16 rounded-full flex items-center justify-center text-3xl right-6 bottom-6 text-white fixed h-16 bg-black">+</div>
    </div>
  );
};
export default Nri;
