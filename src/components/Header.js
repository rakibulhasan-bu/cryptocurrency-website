import React from 'react';

import logo from '../assets/img/logo.svg';
import Nav from './Nav';
import AccountBtns from './AccountBtns'

// import icons
import { CgMenuRight } from 'react-icons/cg'

const Header = ({ setMobileNav }) => {
  return (
    <header className='py-[30px] ' data-aos='fade-down' data-aos-delay='900' data-aos-duration='2000'>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        {/* nav and buttons  */}
        <div className='hidden items-center lg:flex gap-x-14'>
          <Nav />
          <AccountBtns />
        </div>
        {/* open nav buttons  */}
        <div onClick={() => setMobileNav(true)} className='lg:hidden cursor-pointer text-2xl'>
          <CgMenuRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
