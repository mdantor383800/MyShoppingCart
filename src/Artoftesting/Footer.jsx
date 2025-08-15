import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-gray-800 py-12'>
      <ul className='flex justify-center gap-4 text-white'>
        <li className='text-2xl cursor-pointer hover:text-cyan-500'><FaFacebookSquare /></li>
        <li className='text-2xl cursor-pointer hover:text-cyan-500'><FaInstagramSquare /></li>
        <li className='text-2xl cursor-pointer hover:text-cyan-500'><FaTwitterSquare /></li>
        <li className='text-2xl cursor-pointer hover:text-cyan-500'><FaLinkedin /></li>
      </ul>
      <p className='text-white text-center mt-2'>©2025 All Rights Reserved</p>
    </div>
  )
}
