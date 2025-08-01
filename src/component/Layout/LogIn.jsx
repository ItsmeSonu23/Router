import React from 'react'
import { useNavigate } from 'react-router'

const LogIn = () => {
    let navigate = useNavigate()
  return (
    <div>
        <button onClick={()=> navigate(-1)}>Back</button>
        <h1>Log In</h1>
        <form action="" className='flex flex-col gap-5'>
            <input className='px-5 py-2 border border-gray-300 rounded-md' type="text" placeholder='User Name' />
            <input className='px-5 py-2 border border-gray-300 rounded-md' type="password" placeholder='Password' />    
            <button className='px-5 py-2 bg-blue-500 rounded-md'>Log In</button>
        </form>
    </div>
  )
}

export default LogIn