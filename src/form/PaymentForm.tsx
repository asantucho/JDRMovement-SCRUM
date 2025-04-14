'use client';

import { useState } from 'react';

interface PaymentFormData {
  fullName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export default function PaymentForm() {
  const [formData, setFormData] = useState<PaymentFormData>({
    fullName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white p-6 shadow-xl">
      {!isSuccess ? (
        <form onSubmit={handlePayment} className="space-y-4">
          <h2 className="mb-4 text-xl font-semibold">Make a Payment</h2>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full rounded border p-2"
            required
          />

          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            className="w-full rounded border p-2"
            required
          />

          <div className="flex space-x-2">
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-1/2 rounded border p-2"
              required
            />

            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              placeholder="CVC"
              className="w-1/2 rounded border p-2"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700"
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      ) : (
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-green-600">
            Payment Successful 🎉
          </h2>
          <p className="text-gray-600">Thank you for your payment!</p>
        </div>
      )}
    </div>
  );
}
