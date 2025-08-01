import React from 'react'
import { NavLink, useNavigate } from 'react-router'

const Header = () => {
    let navigate = useNavigate()
    return (
        <header className='h-24 bg-slate-200 flex items-center justify-between px-20'>
            <div className="text-4xl">Navbar</div>
            <nav>
                <ul className='flex gap-5'>
                    <NavLink to="/" className={({isActive})=>isActive?"text-blue-500":""}> <li>Home</li></NavLink>  
                    <NavLink to="/about" className={({isActive})=>isActive?"text-blue-500":""}> <li>About</li></NavLink>
                    <NavLink to="/contact" className={({isActive})=>isActive?"text-blue-500":""}> <li>Contact</li></NavLink>
                    <NavLink to="/service" className={({isActive})=>isActive?"text-blue-500":""}> <li>Service</li></NavLink>
                </ul>
            </nav>
            <div className="flex gap-5">
                <button className='px-5 py-2 bg-blue-500 rounded-md' onClick={()=> navigate("/login")}>Log In</button>
                <button className='px-5 py-2 bg-blue-500 rounded-md'>Sign Up</button>
            </div>
        </header>
    )
}

export default Header