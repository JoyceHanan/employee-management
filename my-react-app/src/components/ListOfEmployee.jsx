import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios'
function ListOfEmployee() {
    const [emps,setEmps]=useState([])
    const navigate=useNavigate()
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState("")
    // initial rendering is completed hence we can call api whenever it is possible 
    //view button  naigate along with employee obj
    const gotoEmployee=(empobj)=>{
      //navigate to / employee
      navigate("/employee",{state:empobj})
    }
    //edit button navigate
    const gotoEditemp=(empobj)=>{
      navigate("/edit-emp",{state:empobj})
    }
     const deleteEmp=async (id)=>{
          let res= await axios.delete(`https://employee-management-szka.onrender.com/emp-api/employee/${id}`,id)
          if(res.status===200){
            getEmps();
          }
        }
    
  // get all emps
  async function getEmps() {
            let res= await axios("https://employee-management-szka.onrender.com/emp-api/employee")
            if(res.status===200){
             let resobj=await res.data;
             setEmps(resobj.payload)
            }      
        }
        //get all empon content loading
    useEffect(()=>{
        getEmps()
    },[])
  return (
    <div>
        <h1 className='text-center text-5xl'>List Of Employees</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-7  mt-10 '>
        {emps.map((empobj)=>(
            <div key={empobj._id} className='bg-amber-100 shadow-2xl rounded-3xl text-center p-5'>
                <p>{empobj.name}</p>
                <p className='mb-5'>{empobj.email}</p>
                <div className='flex justify-around'>
                   <button className='p-2 bg-blue-100 w-20 rounded-2xl border-2 ' onClick={()=>gotoEmployee(empobj)}>View</button>
                    <button className='p-2 bg-blue-100 w-20 rounded-2xl border-2 ' onClick={()=>gotoEditemp(empobj)}>Edit</button>
                     <button className='p-2 bg-blue-100 w-20 rounded-2xl border-2 'onClick={()=>deleteEmp(empobj._id)}>Delete</button>
                 </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ListOfEmployee
