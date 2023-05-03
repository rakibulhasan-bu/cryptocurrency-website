import React from 'react';

const AccountBtns = () => {
  return <div className='flex items-center font-medium'>
    {/* login btn  */}
    <a href="" className='hover:text-blue transition'>Log in</a>
    {/* separator  */}
    <span className='mx-6 text-white/70 '>|</span>
    {/* register btn  */}
    <button className='btn px-8 text-base h-10'>Register </button>
  </div>;
};

export default AccountBtns;
