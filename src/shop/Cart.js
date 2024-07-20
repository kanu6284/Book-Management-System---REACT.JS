import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Cart() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const imageUrl = queryParams.get('imageUrl');
  const author = queryParams.get('author');

  const defaultAmount = 200; // Default amount for each item
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDone, setPaymentDone] = useState(false);
  const [upiId, setUpiId] = useState('');

  const calculateTotalAmount = () => {
    return quantity * defaultAmount;
  };

  const handlePayment = async () => {
    try {
      if (paymentMethod === 'upi' && !upiId) {
        // If UPI payment is selected but no UPI ID is provided
        alert('Please enter your UPI ID.');
        return;
      }

      // Simulate payment process (e.g., by waiting for a few seconds)
      // In a real application, this is where you would make an API call to a payment gateway
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate payment process for 2 seconds

      // Payment successful
      setPaymentDone(true);
    } catch (error) {
      // Handle payment error
      console.error('Payment error:', error);
      // You can display an error message or handle it as needed
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-md p-6 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <img src={imageUrl} alt={title} className="my-2" style={{ maxWidth: '100%', height: 'auto' }} />
          <p className="text-sm">Author: {author}</p>
          <label className="block mt-4">
            Quantity:
            <input
              type="number"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </label>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Amount:</p>
          <p>${calculateTotalAmount()}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Select Payment Method:</p>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Cash on Delivery
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            UPI Payment
          </label>
          {paymentMethod === 'upi' && (
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="Enter your UPI ID"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          )}
        </div>
        <button
          onClick={handlePayment}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          disabled={!paymentMethod || paymentDone}
        >
          {paymentDone ? 'Payment Done' : 'Make Payment'}
        </button>
      </div>
    </div>
  );
}

export default Cart;
