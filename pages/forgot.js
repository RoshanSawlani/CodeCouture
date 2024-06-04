import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Forgot = () => {
  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  },[])
  const router = useRouter()
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password</h2>
  </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Continue</button>
      </div>
    </form>
    <p className="mt-3 text-center text-sm text-gray-500">
      <Link href={'/login'} legacyBehavior><a href="#" className="font-semibold leading-6 text-pink-600 hover:text-pink-500">Login</a></Link>
    </p>
  </div>
</div>

    </div>
  )
}

export default Forgot