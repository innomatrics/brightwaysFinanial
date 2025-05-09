import React from 'react';

const BasicStockCash = () => {
  return (
    <div className='container mx-auto mt-5 p-4'>
      <h1 className='text-3xl font-bold text-center mb-4'>Basic Stock Cash</h1>
      <p className='text-center text-gray-600 mb-6'>
        Invest in the stock market with our tailored plans. Choose a subscription that fits your trading style and start your journey today.
      </p>
      <div className='grid md:grid-cols-2 gap-10 mt-5'>
        <div className='border rounded-lg p-6 shadow-md hover:shadow-lg p-4 transition duration-300 text-center'>
          <h4 className='text-xl font-semibold mb-2'>Monthly Plan</h4>
          <h5 className='text-2xl font-bold text-green-600 mb-2'>₹18,000</h5>
          <p className='text-gray-500 mb-4'>Get stock market recommendations and insights with our monthly plan.</p>
          <a href="/contact">
            <button className="bg-blue-600 text-black px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </a>
        </div>
        <div className='border rounded-lg p-6 shadow-md hover:shadow-lg mt-5 p-4 transition duration-300 text-center'>
          <h4 className='text-xl font-semibold mb-2'>3-Month Plan</h4>
          <h5 className='text-2xl font-bold text-green-600 mb-2'>₹45,000</h5>
          <p className='text-gray-500 mb-4'>Save more with a 3-month subscription for continuous trading insights.</p>
          <a href="/contact">
            <button className="bg-blue-600 text-black px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-primary text-white fw-bold rounded p-4 mt-5 text-center">
        <p className="fs-5 mb-1">
          For any query about the service and upgrade services, kindly contact us at:
        </p>
        <p className="fs-5 mt-2">
          <a href="mailto:brightwaysfinhelp@gmail.com" className="text-warning text-decoration-none">
            brightwaysfinhelp@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default BasicStockCash;
