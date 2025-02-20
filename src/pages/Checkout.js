import React from 'react'
import Newsletter from '../components/Newsletter'


const Checkout = () => {
    return (
        <>
            <div className="text-center p-10">
                <h1 className="text-3xl font-bold">Checkout</h1>
                <p className="text-gray-600 mt-4">Enter your shipping details.</p>
            </div>
            <Newsletter />
        </>

    )
}

export default Checkout