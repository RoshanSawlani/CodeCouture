import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user,setUser] = useState({value:null})
  const [key,setKey] = useState(0)
  const router = useRouter()

  useEffect(()=>{
    console.log("Hey I am useEffect from _app.js")
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
    const token = localStorage.getItem("token")
    if(token) {
      setUser({value:token})
      setKey(Math.random())
    } else {
      setUser({value:null})
    }
  },[router.query])
  
  const logout = () =>{
    localStorage.removeItem('token')
    setUser({value:null})
    setKey(Math.random())
  }

  const saveCart = (myCart) =>{
    if (typeof window !== 'undefined') {
      // Only execute this code in the browser
      localStorage.setItem("cart", JSON.stringify(myCart));
    }
    let subt = 0
    let keys = Object.keys(myCart)
    for (let i = 0;i<keys.length;i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }
  const addToCart = (itemCode,qty,price,name,size,variant) =>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode] = {qty:1,price,name,size,variant}
    }
    toast.success("Item added to cart")
    setCart(newCart)
    saveCart(newCart)
  }
  
  const buyNow = (itemCode,qty,price,name,size,variant) => {
    let newCart = {itemCode:{qty:1,price,name,size,variant}}
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
}
  const clearCart = () =>{
    let emptyCart = {}
    setCart(emptyCart)
    saveCart(emptyCart)
    toast.success("Cart Cleared")
    
  }
  
  const removeFromCart = (itemCode,qty,price,name,size,variant) =>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]["qty"] <=0){
      delete newCart[itemCode]
    }
    toast.success("Item removed from cart")
    setCart(newCart)
    saveCart(newCart)
  }
  return <>
    <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
    <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer /></>
}
