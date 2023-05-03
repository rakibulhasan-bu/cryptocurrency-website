import React from 'react';

// import image
import image from '../assets/img/why-img.png'

const Why = () => {
  return <section className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-x-8'>
        {/* why text  */}
        <div className='lg:order-2 order-1' data-aos='fade-left' data-aos-offset='400'>
          <h1 className='section-title'>Why you should choose CRAPPO?</h1>
          <p className='section-subtitle'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
          <button className='btn px-6 h-12 lg:h-14'>Learn more</button>
        </div>
        {/* why image  */}
        <div className='lg:order-1 order-2' data-aos='fade-right' data-aos-offset='400'>
          <img src={image} alt="" />
        </div>

      </div>
    </div>
  </section>;
};

export default Why;
