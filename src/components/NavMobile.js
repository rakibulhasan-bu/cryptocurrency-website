import React from 'react';

// import nav data
import { navData } from '../data';

// import icons
import { CgClose } from 'react-icons/cg'

const NavMobile = ({ setMobileNav }) => {
  return <nav className='bg-violet h-full w-80 flex justify-center items-center'>
    {/* close button  */}
    <div onClick={() => setMobileNav(false)} className='absolute top-2 left-2 cursor-pointer '>
      <CgClose className='text-3xl' />
    </div>
    {/* nav list  */}
    <ul className='text-xl space-y-8'>
      {
        navData.map((item, index) => {
          return (<li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>);
        })
      }
    </ul>
  </nav>;
};

export default NavMobile;
