import React from 'react';

// import image for feature section
import image from '../assets/img/feature-2-img.png'

const FeaturesSection2 = () => {
  return (
    <section className='py-8 lg:py-28  lg:relative'>
      <div className="container mx-auto">
        <div className='flex  flex-col lg:flex-row lg:pt-6'>
          {/* feature  image */}
          <div className=' flex-1 lg:left-0' data-aos='fade-right' data-aos-offset='400'>
            <img src={image} alt="" />
          </div>
          {/* text feature  */}
          <div className='max-w-md mb-6 mt-10 flex-1 lg:pr-16' data-aos='fade-left' data-aos-offset='400'>
            <h2 className='h3 mb-6'>Detailed Statistics</h2>
            <p className='text-gray mb-8'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
            <button className='btn px-8 mb-6 lg:mb-0' >Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
