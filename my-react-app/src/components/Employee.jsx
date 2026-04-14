import React from 'react'
import { useLocation } from 'react-router'
function Employee() {
  const {state}=useLocation();
  return (
    <div className=' bg-amber-100 mx-auto w-200 shadow-2xl p-16 text-center rounded-3xl text-3xl'>
      <h1 className='text-5xl mb-6 font-bold'>Employee Details</h1>
      <p>{state.name}</p>
      <p>{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.companyname}</p>
    </div>
  )
}

export default Employee
