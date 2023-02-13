import React, { useContext } from 'react'
import productsContext from '../../Contexts/ProductsContext'

export default function Toast() {

    const contextData = useContext(productsContext)

    return (
        <div className="position-fixed bottom-0 start-0 p-3" style={{ zIndex: 1000000 }}>
            <div id="liveToast" className={`${contextData.isShowToast ? "show" : ""} toast`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#0b536c"></rect></svg>
                    <span className='recColor'></span>
                    <strong className="me-auto text-black">YZ Server</strong>
                    <small className='text-black'>Now</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => {
                        contextData.setIsShowToast(false)
                    }}></button>
                </div>
                <div className="toast-body text-black">
                    Product Added To Your Cart!
                </div>
            </div>
        </div>

    )
}
