import React from 'react'
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import ShoppingCart from '../component/ShoppingCart'



export default function Navber() {

  return (
    <div className='bg-[rgb(47,68,104)] py-8 text-white w-full z-50'>
      <nav className='container mx-5 md:mx-auto flex justify-between'>
        <p className='text-[30px] font-bold'>ArtOfTesting Ecom</p>
        <div className='mx-9 md:mx-0'>
          <ShoppingCart/>
         </div>
      </nav>
    </div>

  )
}
