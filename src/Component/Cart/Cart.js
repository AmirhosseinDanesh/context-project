import React from 'react'
import "./Cart.css"
import { FaCartPlus } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

export default function Cart() {
    return (
        <aside className='sidebar'>
            <h3 className='sidebar-title d-flex justify-content-between  p-2 m-0 '>
                <span className='d-flex justify-content-center '>
                    <FaCartPlus />
                    <span className='ms-2'>
                        Cart
                    </span>
                </span>
                <span>
                    <GrClose />
                </span>
            </h3>

            <div className="sidebar-body px-1 ">
                <div className="col-12 py-2 sidebarpr">
                    <div className='prCart d-flex align-items-center '>
                        <div className='prCartPic col-2'>
                            <img className='prCartPicStyle' src="./images/server.jpg" alt="" width={"65px"} />
                        </div>
                        <div className='prCartInfo col-10 text-center'>
                            <h5>
                                IranServer P1
                            </h5>
                            <div className="prCartCount d-flex justify-content-around align-items-center">
                                <span>
                                    price: 100$
                                </span>
                                <span>
                                    count: 1
                                </span>
                                <div className='prCartAddBtn'>
                                    <button className='btnAdd'>Add  +1</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </aside>
    )
}
