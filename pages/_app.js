import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
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
  },[])
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
    
  }
  
  const removeFromCart = (itemCode,qty,price,name,size,variant) =>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]["qty"] <=0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }
  return <>
    <Navbar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
    <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer /></>
}
