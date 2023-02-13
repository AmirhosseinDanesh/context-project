import React, { useState } from 'react'
import "./App.css"
import Navbar from './Component/Navbar/Navbar'
import ProductSection from './Component/ProductSection/ProductSection'
import ProductData from "./Component/data/ProductData"
import Toast from './Component/Toast/Toast'
import Cart from './Component/Cart/Cart'

import productsContext from './Contexts/ProductsContext'

export default function App() {
  const [allProduct, setAllProduct] = useState(ProductData)
  const [userCart, setUserCart] = useState([])
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  return (
    <div>
      <productsContext.Provider value={{
        allProduct,
        userCart,
        setUserCart,
        isShowToast,
        setIsShowToast,
        isShowCart,
        setIsShowCart
      }}>

        <Navbar />
        <main className='py-5'>
          <div className='container'>
            <h1 className='text-center main-title'>
              All Products
            </h1>
            
              
                <ProductSection  />
              
            
          </div>
        </main>
        <Toast />
        <Cart />

      </productsContext.Provider>
    </div >)
}
