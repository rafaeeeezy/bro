import React, { useState } from 'react'

const StateEvent = () => {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

    const handleShippingChange = (e) => {
        setShipping(e.target.value);
    }

    return (
        <div className='p-4'>

            <form>

                <input className='border-2 border-black p-1.5 pl-2' value={name} onChange={handleNameChange} />
                <p className='mb-4'>Name: {name}</p>

                <input className='border-2 border-black p-1.5 pl-2' type='number' value={quantity} onChange={handleQuantityChange} />
                <p className='mb-4'>Quantity: {quantity}</p>

                <input className='border-2 border-black p-1.5 pl-2' value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions' />
                <p className='mb-4'>Comment: {comment}</p>

                <select className='border-2 border-black p-1.5 pl-2' value={payment} onChange={handlePaymentChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="Cash">Cash</option>
                    <option value="E-Wallet">E-Wallet</option>
                    <option value="Bank">Bank</option>
                </select>
                <p className='mb-4'>Payment: {payment}</p>

                <label>
                    <input type='radio' value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                    Delivery
                </label>

                <br></br>

                <label>
                    <input type='radio' value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                    Pick-Up
                </label>

                <p className='mt-2'>Shipping: {shipping}</p>

            </form>

        </div>
    )
}

export default StateEvent