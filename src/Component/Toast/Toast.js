import React from 'react'

export default function Toast() {
    return (

        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
            <div id="liveToast" className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto text-black">YZ Server</strong>
                    <small className='text-black'>Now</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body text-black">
                    Product Added To Your Cart!
                </div>
            </div>
        </div>

    )
}
