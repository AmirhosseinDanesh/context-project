import React, { useContext } from 'react'
import "./Cart.css"
import { FaCartPlus } from "react-icons/fa"
import { GrClose } from "react-icons/gr"
import productsContext from '../../Contexts/ProductsContext'

export default function Cart() {

    const contextData = useContext(productsContext)

    return (
        <aside className={`${contextData.isShowCart ? "active" : " "} sidebar`}>
            <h3 className='sidebar-title d-flex justify-content-between  p-2 m-0 '>
                <span className='d-flex justify-content-center '>
                    <FaCartPlus />
                    <span className='ms-2'>
                        Cart
                    </span>
                </span>
                <span>
                    <GrClose style={{ cursor: "pointer" }} onClick={() => contextData.setIsShowCart(false)} />
                </span>
            </h3>

            <div className="sidebar-body px-1 ">
                {
                    contextData.userCart.map(product => (
                        <div className="col-12 py-2 sidebarpr" key={product.id}>
                            <div className='prCart d-flex align-items-center '>
                                <div className='prCartPic col-2'>
                                    <img className='prCartPicStyle' src={product.src} alt="" width={"65px"} />
                                </div>
                                <div className='prCartInfo col-10 text-center'>
                                    <h5>
                                        {product.title}
                                    </h5>
                                    <div className="prCartCount d-flex justify-content-around align-items-center">
                                        <span>
                                            {product.price}$
                                        </span>
                                        <span>
                                            {product.count}
                                        </span>
                                        <div className='prCartAddBtn'>
                                            <button className='btnAdd'>Add  +1</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </aside >
    )
}
