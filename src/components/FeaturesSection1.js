import React from 'react';

// import image for feature section
import image from '../assets/img/feature-1-img.png'

const FeaturesSection1 = () => {
  return (
    <section className='pb-8 lg:pb-32 pt-0'>
      <div className="container mx-auto">
        <div className='flex justify-between flex-col lg:flex-row lg:pt-6'>
          {/* text feature  */}
          <div className='max-w-lg mb-6 lg:mt-10' data-aos='fade-right' data-aos-offset='400'>
            <h2 className='h3 mb-6'>Invest Smart</h2>
            <p className='text-gray mb-8'>Get full statistic information about the behavior of buyers and sellers will help you to make the decision. </p>
            <button className='btn px-8'>Learn more</button>
          </div>
          {/* feature  image */}
          <div data-aos='fade-left' data-aos-offset='400'>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection1;
