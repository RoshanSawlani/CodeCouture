import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Forgot = () => {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('')

  const handleChange = async(e) => {
    
    if (e.target.name === "password") {
      setPassword(e.target.value)
    }
    if (e.target.name === "cpassword") {
      setCpassword(e.target.value)
    }
    if (e.target.name === "email") {
      setEmail(e.target.value)
    }
    if (e.target.name === "name") {
      setName(e.target.value)
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  },[])


  const sendResetEmail = async() => {
    let data = {
      email,sendMail : true
    }
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    if(res.success){
      console.log("Password reset instructions has been sent to your email")
    }
    else{
      console.log("error")
    }
  }
  const resetPassword = async() => {
    if(password == cpassword){
    let data = {
      password,sendMail : false
    }
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    if(res.success){
      console.log("Password has been changed")
    }
    else{
      console.log("error")
    }
  }
  }

  return (
    <div>
      <div className="flex min-h-screen items-start flex-col justify-center px-6 py-24 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <img className="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password</h2>
  </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  {router.query.token && <div>
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
        <div className="mt-2">
          <input value={password} onChange={handleChange} id="password" name="password" type="password" autoComplete="password" required placeholder="New Password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm New Password</label>
        <div className="mt-2">
          <input value={cpassword} onChange={handleChange} id="cpassword" name="cpassword" type="password" autoComplete="cpassword" required placeholder="Confirm new Password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <button onClick={resetPassword} type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 ">Continue</button>
      </div>
      {password != cpassword && 
      <span className="text-red-600">Passwords don't match</span>
      }
      {password && password === cpassword && 
      <span className="text-green-600">Passwords match</span>
      }
    </form>
    </div>
    }
    {!router.query.token && <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      
      <div>
        <button onClick={sendResetEmail} type="submit" className="my-4 flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Continue</button>
      </div>
    </form>}
    <p className="mt-3 text-center text-sm text-gray-500">
      <Link href={'/login'} legacyBehavior><a href="#" className="font-semibold leading-6 text-pink-600 hover:text-pink-500">Login</a></Link>
    </p>
  </div>
</div>

    </div>
  )
}

export default Forgot