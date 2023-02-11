import React from 'react'
import "./ProductSection.css"

export default function ProductSection({ title, configs }) {
    return (
        <div className='row justify-content-center mt-5'>
            <h3 className='text-center'>{title}</h3>
            {
                configs.map((product) => (
                    <div className="col-sm-10 col-md-5 col-lg-4 col-xl-3 mt-5">
                        <div className="card p-3">
                            <div className="col-12 text-center">
                                <img className='card-img-top  w-75' src={product.img} alt="" />
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text fs-3">{product.title}</p>
                                <p className="price fs-4">{product.price}$</p>
                                <br />
                                <div className="d-flex flex-column align-items-center">
                                    <a href="/" className="btn btn-danger col-9">
                                        Add
                                    </a>
                                    <a href="/" className="btn btn-outline-dark  col-9 mt-2">
                                        More Information
                                    </a>
                                    <p className="countProduct mt-2">
                                        Count: {product.count}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}
