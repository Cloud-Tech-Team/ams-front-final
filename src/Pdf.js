import React from 'react'
import { jsPDF } from "jspdf"
import nri from "./nri.jpg"

const doc = new jsPDF();
const handle_click = () => {
   doc.addImage(nri,0,0,210,297)
    doc.save("dash.pdf")
}
export const Pdf = () => {
  return (
    <div className='w-screen h-screen items-center justify-center flex'>
        <button className='w-24 h-16 bg-purple-500 text-white rounded-lg' onClick={handle_click}>Click</button>
    </div>
  )
}
