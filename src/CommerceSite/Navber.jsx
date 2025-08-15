import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../assets/react.svg'


export default function Navber() {
  return (
    <div className='bg-purple-500 py-6'>
        <nav className='flex justify-between'>
            <img className='ms-8'
            src={photo}
            />
        <ul className='flex justify-end gap-6 me-11 text-white '>
            <li className='text-[15px] font-semibold cursor-pointer hover:rounded px-2 hover:bg-blue-700 '><Link to='/'>Home</Link></li>
            <li className='text-[15px] font-semibold cursor-pointer hover:rounded px-2 hover:bg-blue-700 '><Link to='details'>Details</Link></li>
            <li className='text-[15px] font-semibold cursor-pointer hover:rounded px-2 hover:bg-blue-700 '><Link to='about us'>About Us</Link></li>
            <li className='text-[15px] font-semibold cursor-pointer hover:rounded px-2 hover:bg-blue-700 '><Link to='contact'>Contact</Link></li>
        </ul>
        </nav>
        
    </div>
  )
}
