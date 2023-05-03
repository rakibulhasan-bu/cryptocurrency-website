import React from 'react';

// import image for footer
import visaImg from '../assets/img/visa.png'
import masterCardImg from '../assets/img/mastercard.png'
import bitcoinImg from '../assets/img/bitcoin.png'
import logo from '../assets/img/logo.svg'

// import icons
import { IoLogoYoutube, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io'

const Footer = () => {
  return <footer className='lg:pt-24 pt-0' data-aos='fade-up' data-aos-offset='400'>
    <div className="container mx-auto lg:mb-24"  >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* logo  */}
        <div className='flex-1 mx-auto lg:mx-0 mb-6  '>
          <img src={logo} alt="" />
        </div>
        {/* link group  */}
        <div className='flex flex-1 flex-col gap-12 lg:flex-row'>
          {/* links  */}
          <div className='text-center lg:text-left'>
            <div className='text-xl mb-6 font-medium'>Quick Links</div>
            <ul className='space-y-4 text-gray'>
              <li className='hover:text-blue transition'>Home</li>
              <li className='hover:text-blue transition'> Products</li>
              <li className='hover:text-blue transition'> About</li>
              <li className='hover:text-blue transition'> Features</li>
              <li className='hover:text-blue transition'>Contact</li>
            </ul>
          </div>

          {/* links  */}
          <div className='text-center lg:text-left'>
            <div className='text-xl mb-6 font-medium'>Resources Links</div>
            <ul className='space-y-4 text-gray'>
              <li className='hover:text-blue transition'>Download  Whitepaper</li>
              <li className='hover:text-blue transition'>Smart Token</li>
              <li className='hover:text-blue transition'> Blockchain Explorer</li>
              <li className='hover:text-blue transition'> Crypto API</li>
              <li className='hover:text-blue transition'>    Interest</li>
            </ul>
          </div>
        </div>
        {/* payment  */}
        <div className='flex flex-1 flex-col'>
          <div className='lg:ml-12'>
            <h3 className='h3 font-medium text-center lg:text-left mb-10'>We accept following payment systems</h3>
            <div className='flex justify-center items-center gap-6'>
              <img src={visaImg} alt="" />
              <img src={masterCardImg} alt="" />
              <img src={bitcoinImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* copyright section  */}
    <div className='py-12'>
      <div className="container mx-auto items-center gap-y-6 flex justify-between lg:flex-row lg:gap-y-0 flex-col">
        <h2>©2023 CRAPPO. All rights reserved</h2>
        <div className='flex text-3xl gap-x-8'>
          <i className='hover:text-blue transition'>
            <IoLogoYoutube />
          </i>
          <i className='hover:text-blue transition' >
            <IoLogoInstagram />
          </i>
          <i className='hover:text-blue transition' >
            <IoLogoLinkedin />
          </i>
          <i className='hover:text-blue transition' >
            <IoLogoTwitter />
          </i>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
