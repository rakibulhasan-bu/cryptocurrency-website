import React from 'react';

// import image for feature section
import image from '../assets/img/feature-3-img.png'

const FeaturesSection3 = () => {
  return (
    <section className='py-8 lg:py-32'>
      <div className="container mx-auto">
        <div className='flex justify-between flex-col lg:flex-row lg:pt-6'>
          {/* text feature  */}
          <div className='max-w-lg mb-6 lg:mt-10' data-aos='fade-right' data-aos-offset='400'>
            <h2 className='h3 mb-6'>Grow your profit and track your investments</h2>
            <p className='text-gray mb-8'>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
            <button className='btn px-8'>Learn more</button>
          </div>
          {/* feature  image */}
          <div data-aos='fade-left' data-aos-offset='450'>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection3;
