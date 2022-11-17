
import React from 'react'
import Records from '../Components/Records'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Nri = () => {
  const api = 'https://ams-backend-368717.el.r.appspot.com/'
  const [list,setList] = useState([])
  useEffect(() => {
      axios.post(api+'admin/search',{
        "applicationCompleted" : true
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
  return (
    <div className="overflow-x-auto grid gird-cols-9 scrollbar-thin space-y-3  p-4 scrollbar-thumb-rounded-full scrollbar-thumb-black ">
        {/* <div className='w-full  space-x-4 items-end justify-end h-auto'>
            <div className='w-auto h-8 rounded-full bg-white'>
        
            </div>
            <div className='w-9 h-9 rounded-full bg-white'></div>

        </div> */}
        {list.map((index)=>{
            return(<Records key={list.indexOf(index)} data={index} />)
        })}
    </div>
  )
}

export default Nri