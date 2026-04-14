import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateEmp() {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const onformsubmit = async (empobj) => {
    try {
      setLoading(true)
      //make http req
      let res = await fetch("http://localhost:5000/emp-api/employee", {
        method: "POST",
        body: JSON.stringify(empobj),
        headers: { "Content-type": "application/json" }
      })

      if (res.status===201) {
        //navigate to employees component programatically
        navigate("/list-emp")  
      } else {
        let errorRes = await res.json()
        console.log("error response is",errorRes)
        throw new Error(errorRes.message)  
      }

    } catch (err) {
      console.log("err is", err)
      //deal with error
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <p className='text-4xl text-center'>Loading...</p>
  }

  if (error) {
    return <p className='text-center text-red-500 text-5xl'>{error}</p> 
  }

  return (
    <div>
      <h1 className='text-center text-5xl'>ENTER DETAILS</h1>

      <form className="max-w-md mt-10 mx-auto" onSubmit={handleSubmit(onformsubmit)}>

        <input type="text" placeholder='Enter name'
          {...register("name")}
          className='mb-3 border-2 w-full rounded-2xl p-3 bg-white' />

        <input type="email" placeholder='Enter email'
          {...register("email")}
          className='mb-3 border-2 w-full rounded-2xl p-3  bg-white' />

        <input type="text" placeholder='Enter mobile '
          {...register("mobile")}
          className='mb-3 border-2 w-full rounded-2xl p-3 bg-white' />

        <input type="text" placeholder='Enter designation'
          {...register("designation")}
          className='mb-3 border-2 w-full rounded-2xl p-3  bg-white' />

        <input type="text" placeholder='Enter companyname'
          {...register("companyname")}
          className='mb-3 border-2 w-full rounded-2xl p-3  bg-white' />

        <button type='submit'
          className='mb-3 block mx-auto bg-amber-200 w-50 border-2 rounded-2xl p-3'>
          Add Emp
        </button>

      </form>
    </div>
  )
}

export default CreateEmp