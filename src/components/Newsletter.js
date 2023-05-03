import React from 'react';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
  return <section className='py-10 lg:py-20 bg-newsletter bg-cover' >
    <div className="container mx-auto">
      <div className='flex flex-col items-center justify-between bg-blue rounded-2xl p-12 lg:flex-row lg:bg-newsletterBox lg:bg-no-repeat lg:h-52' data-aos='fade-up' data-aos-offset='400'>
        {/* text  */}
        <div className='w-full flex-1'>
          <h3 className='h3 mb-4'>Start mining now</h3>
          <p className='mb-8 max-w-sm'>Join now with CRAPPO to get the latest news and start mining now</p>
        </div>
        <NewsletterForm />
      </div>
    </div>
  </section>;
};

export default Newsletter;
