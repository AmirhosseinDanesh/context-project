import React from 'react'
import "./Navbar.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
export default function Navbar() {
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
                        <a href="/" className='nav-link fs-4 d-flex align-items-center'>
                            <AiOutlineShoppingCart style={{ fontSize: "2rem" , color:"white" }} />
                            <span className='badge bg-primary rounded-pill fs-6 bg-product-counter'>0</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
