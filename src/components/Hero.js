import React from 'react';

// import images
import heroImage from '../assets/img/hero-img.png'

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const Hero = () => {
  return <section>
    <div className="container mx-auto">
      <div className='flex items-center flex-col lg:flex-row'>
        {/* hero text  */}
        <div className='flex-1'>
          {/* badge text  */}
          <div className='bg-white/10 rounded-full p-1 mb-6 max-w-[365px] pl-2 pr-3' data-aos='fade-down' data-aos-delay='400'>
            <div className='flex items-center justify-between text-sm lg:text-base'>
              <div className='bg-white text-darkblue py-1 px-4 rounded-full font-semibold'>75% SAVE</div>
              <div>For the Black Friday weekend</div>
            </div>
          </div>
          {/* title  */}
          <h1 className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6' data-aos='fade-down' data-aos-delay='500' >Fastest & Secure platform to invest in crypto.</h1>
          <p className='leading-relaxed mb-8 max-w-[440px]' data-aos='fade-down' data-aos-delay='600'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions. </p>
          <button className='btn gap-x-6 text-sm lg:text-base lg:h-16 pl-6' data-aos='fade-down' data-aos-delay='700' >try for free <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' /></button>
        </div>
        {/* hero image  */}
        <div className='flex-1'>
          <img src={heroImage} alt="" data-aos='fade-up' data-aos-delay='600' />
        </div>
      </div>
    </div>
  </section>;
};

export default Hero;
