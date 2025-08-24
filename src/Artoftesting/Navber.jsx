import React from 'react'
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import ShoppingCart from '../component/ShoppingCart'



export default function Navber() {

  return (
    <div className='bg-[rgb(47,68,104)] py-3 text-white  w-full z-50'>
      <nav className='container mx-auto flex justify-between'>
        <p className='text-xl font-bold'>ArtOfTesting Ecom</p>
        <div className='flex gap-6'>
          <ShoppingCart />

        <button className='flex gap-2 text-cyan-400 cursor-pointer hover:text-white'>Logout <span className='mt-[6px]'><FaSignOutAlt /></span></button>
       
         </div>
      </nav>
    </div>

  )
}
