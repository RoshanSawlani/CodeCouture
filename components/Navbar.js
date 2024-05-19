import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2'>
      <div className="logo mx-5">
          <Image src="/logo.png" width={50} height={40} alt="logo"/>
        </div>      
      <div className="nav">
        <ul className='flex items-center space-x-2 font-bold md:text-xl'>
          <Link href={'/'} legacyBehavior><a><li>Tshirts</li></a></Link>
          <Link href={'/'} legacyBehavior><a><li>Hoodies</li></a></Link>
          <Link href={'/'} legacyBehavior><a><li>Stickers</li></a></Link>
          <Link href={'/'} legacyBehavior><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart className='text-xl md:text-3xl'/>
      </div>
    </div>
  )
}

export default Navbar