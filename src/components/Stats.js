import React from 'react';

// import icons
import { HiUser, HiChartBar, HiGlobe } from 'react-icons/hi'

const Stats = () => {
  return <section className=' pt-16' data-aos='fade-up' data-aos-delay='1000'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-6 lg:flex-row lg:justify-between'>
        {/* items  */}
        <div className="flex items-center gap-x-6">
          {/* items icon  */}
          <div className="bg-white/10 rounded-full w-16 lg:w-20 lg:h-20
          h-16 justify-center items-center flex text-2xl lg:text-4xl text-blue">
            <HiChartBar />
          </div>
          {/* items text  */}
          <div>
            <div className='text-2xl font-bold lg:text-4xl lg:mb-2'>$30B</div>
            <div className='text-gray'>Digital Currency Exchanged</div>
          </div>
        </div>
        {/* items  */}
        <div className="flex items-center gap-x-6">
          {/* items icon  */}
          <div className="bg-white/10 rounded-full w-16 lg:w-20 lg:h-20
          h-16 justify-center items-center flex text-2xl lg:text-4xl text-blue">
            <HiUser />
          </div>
          {/* items text  */}
          <div>
            <div className='text-2xl font-bold lg:text-4xl lg:mb-2'>$10M+</div>
            <div className='text-gray'>Trusted Wallets Investors</div>
          </div>
        </div>
        {/* items  */}
        <div className="flex items-center gap-x-6">
          {/* items icon  */}
          <div className="bg-white/10 rounded-full w-16 lg:w-20 lg:h-20
          h-16 justify-center items-center flex text-2xl lg:text-4xl text-blue">
            <HiGlobe />
          </div>
          {/* items text  */}
          <div>
            <div className='text-2xl font-bold lg:text-4xl lg:mb-2'>195</div>
            <div className='text-gray'>Countries Supported</div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Stats;
