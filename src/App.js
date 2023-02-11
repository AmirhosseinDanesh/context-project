import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import "./App.css"
import ProductSection from './Component/ProductSection/ProductSection'
import ProductData from "./Component/data/ProductData"
import Toast from './Component/Toast/Toast'


export default function App() {
  const [allProduct, setAllProduct] = useState(ProductData)
  return (
    <div>
      <Navbar />
      <main className='py-5'>
        <div className='container'>
          <h1 className='text-center main-title'>
            All Products
          </h1>
          {
            allProduct.map((product) => (
              <ProductSection {...product} />
            ))
          }
        </div>
      </main> 
      <Toast />

      

      

    </div>)
}
