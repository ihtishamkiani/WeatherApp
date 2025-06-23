import React, { useState } from 'react';
import appLogo from './Images/wearherApplogo.png';
import { links } from './constants';
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex flex-wrap lg:flex-nowrap items-center justify-between top-0 w-full z-10 lg:px-[5%]">
      <div className="container flex items-center justify-between w-full">
        {/* Logo */}
        <div ><img className='w-16 h-16 rounded-full' src={appLogo} alt="logo image" /></div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
            <div  className={`space-y-1.5 cursor-pointer ${isMenuOpen ? 'hidden' : 'block'}`}>
            <span  className="block h-0.5 w-6 bg-white"></span>
            <span  className="block h-0.5 w-6 bg-white"></span>
            <span  className="block h-0.5 w-6 bg-white"></span>
            </div>

          {/* Close Icon */}
          <div className={`space-y-1.5 cursor-pointer max-h-28 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <p className='text-2xl rotate-45'>+</p>
          </div>

        </button>
      </div>

      {/* Mobile Menu Items */}
      <div
        className={`lg:flex items-center lg:w-auto w-full ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col lg:flex-row items-start lg:items-center justify-between text-base text-gray-700">
          {links.map((link,index)=>{
            return(
              <li key={index}>
                {link.button?
                <button className='bg-blue-600 rounded-md px-3 text-white py-1' onClick={()=>{}}>{link.title}</button>
                  :
                <a href={link.url} className="lg:p-4 py-3 px-0 block text-white hover:text-gray-300">{link.title}</a>}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};


