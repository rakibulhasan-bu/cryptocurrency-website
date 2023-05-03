import React, { useState } from 'react';

// import currency data
import { currency } from '../data';

// import icons
import { IoIosArrowForward } from 'react-icons/io'


const Trade = () => {
  // item name state
  const [itemName, setItemName] = useState('Bitcoin')
  return <section className='section lg:pt-80 bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-80'>
    <div className="container mx-auto">
      <h2 className='section-title text-center max-w-4xl mx-auto mb-16' data-aos='fade-up' data-aos-offset='400'>Trade securely and market the high growth cryptocurrencies.</h2>
      {/* items card */}
      <div className='flex flex-col gap-11 lg:flex-row' data-aos='fade-up' data-aos-offset='450'>
        {currency.map((item, index) => {
          // destructure item
          const { image, name, abbr, description } = item;
          return (
            <div onClick={() => setItemName(name)} className={`${name === itemName ? 'bg-violet text-white' : 'bg-white'} w-full rounded-2xl py-12 px-6 shadow-primary transition duration-300`} key={index}>
              <div className='flex justify-center items-center flex-col'>
                {/* card image  */}
                <img className='mb-12' src={image} alt="" />
                {/* card name  */}
                <div className='flex items-center justify-center gap-x-2'>
                  <div className='font-bold text-3xl'>{name}</div>
                  <div className='text-gray-500 text-lg font-medium'>{abbr}</div>
                </div>
                {/* cart description  */}
                <p className='text-center mb-6'>{description}</p>
                {/* cart btn  */}
                <button className={`${name === itemName ? 'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3' : 'text-blue w-14'}  h-14 rounded-full flex justify-center items-center border-2 border-gray-300`}>
                  {name === itemName && <div className='text-lg font-medium'>Start Mining</div>}
                  <IoIosArrowForward className={name === itemName ? 'text-2xl' : 'text-3xl'} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>;
};

export default Trade;
