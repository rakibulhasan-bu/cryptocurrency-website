import React from 'react';

const CalcForm = () => {
  return <div className='w-full bg-white max-w-4xl mx-auto rounded-2xl text-darkblue p-12 shadow-primary' data-aos='fade-up' data-aos-offset='500'>
    {/* form  */}
    <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-y-0 space-y-12'>
      <input className='placeholder:text-darkblue outline-none input' type="text" placeholder='Enter your hash rate' />
      <select name="" id="" className='select'>
        <option value="">TH/s</option>
        <option value="">H/s</option>
        <option value="">KH/s</option>
        <option value="">MH/s</option>
        <option value="">GH/s</option>
      </select>
      {/* btn  */}
      <button className='btn px-8 flex self-start text-white'>Calculate</button>
    </form>
    {/* calForm text  */}
    <div className='mt-24'>
      <div className='text-blue font-medium mb-4'>ESTIMATED 24 HOUR REVENUE:</div>
      <div className='font-bold mb-3 text-2xl'>
        0.055 130 59 ETH <span className='text-blue'>($1275)</span>
      </div>
      <div className='text-gray-500'>Revenue will change based on mining difficulty and Ethereum price.</div>
    </div>
  </div>;
};

export default CalcForm;
