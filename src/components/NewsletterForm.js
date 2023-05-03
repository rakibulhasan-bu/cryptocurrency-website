import React from 'react';

const NewsletterForm = () => {
  return (
    <form className='flex flex-1 flex-col items-start gap-y-6 lg:flex-row lg:gap-x-10 w-full'>
      <input className='input text-base text-white placeholder:text-base placeholder:text-gray-100' type="text" placeholder='Enter your email' />
      <button className='btn bg-white hover:bg-white/70 px-8 text-darkblue'>Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
