import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <nav className='p-5 bg-amber-100'>
      <ul className='flex justify-end gap-5 text-2xl'>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-red-500" : ""}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/create-emp"   
            className={({ isActive }) => isActive ? "text-red-500" : ""}
          >
            Create Employee
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/list-emp"   
            className={({ isActive }) => isActive ? "text-red-500" : ""}
          >
            List of Employees
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header