import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md'>
      <div className="logo mx-5">
        <Link href={'/'} legacyBehavior><a><Image src="/logo.png" width={50} height={40} alt="logo" /></a></Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-4 font-bold md:text-md'>
          <Link href={'/tshirts'} legacyBehavior><a><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'} legacyBehavior><a><li>Hoodies</li></a></Link>
          <Link href={'/stickers'} legacyBehavior><a><li>Stickers</li></a></Link>
          <Link href={'/mugs'} legacyBehavior><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart cursor-pointer absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart className='text-xl md:text-2xl' />
      </div>
      <div ref={ref} className="w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full">
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Style the code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='cursor-pointer text-pink-500' /><span className="mx-2 text-sm">1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Style the code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='cursor-pointer text-pink-500' /><span className="mx-2 text-sm">1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Style the code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='cursor-pointer text-pink-500' /><span className="mx-2 text-sm">1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Style the code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='cursor-pointer text-pink-500' /><span className="mx-2 text-sm">1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Style the code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='cursor-pointer text-pink-500' /><span className="mx-2 text-sm">1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Style the code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='cursor-pointer text-pink-500' /><span className="mx-2 text-sm">1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          
        </ol>
        <button className="flex mt-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className="m-1" />Checkout</button>
      </div>
    </div>
  )
}

export default Navbar