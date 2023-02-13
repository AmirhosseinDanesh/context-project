import React, { useContext } from 'react'
import "./Navbar.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import productsContext from '../../Contexts/ProductsContext'
export default function Navbar() {
    const contextData = useContext(productsContext)
    return (
        <div className='navbar navbar-expand-lg'>
            <div className="container">
                <a className="navbar-brand fs-2 text-white" href="/">
                    Yz Server
                </a>

                <ul className='navbar-nav me-auto ms-5 '>
                    <li className="nav-item">
                        <a href="/" className="nav-link text-white fs-4">
                            Servers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link text-white fs-4">
                            hosts
                        </a>
                    </li>

                </ul>
                <ul className='navbar-nav '>
                    <li className='nav-item ms-5 '>
                        <a href="javascript:void(0)" className='nav-link fs-4 d-flex align-items-center'>
                            <AiOutlineShoppingCart style={{ fontSize: "2rem" , color:"white" }} onClick={()=>{
                                contextData.setIsShowCart(true)
                                
                            }} />
                            <span className='badge bg-primary rounded-pill fs-6 bg-product-counter'>0</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
