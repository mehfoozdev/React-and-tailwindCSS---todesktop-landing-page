import React, { useState } from 'react';
import Logo from '../assets/icons/asset 0.png'
import electron from '../assets/icons/asset 1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
        <nav className='p-3 flex bg-white justify-between items-center'>
          <a href="/" id='brand' className='flex gap-2 items-center flex-1'>
            <img src={ Logo } alt="Logo" className='object-cover max-w-12 max-h-12'/>
            <span className='text-lg font-medium font-display'>ToDesktop</span>
          </a>

          {/* Nav Menu */}
          <div id='nav-menu' className='hidden md:flex gap-10 '>
            <a href="#" className='font-medium hover:text-primary'>Pricing</a>
            <a href="#" className='font-medium hover:text-primary'>Docs</a>
            <a href="#" className='font-medium hover:text-primary'>Packages</a>
            <a href="#" className='font-medium hover:text-primary'>Blogs</a>
            <a href="#" className='font-medium hover:text-primary'>Login</a>
          </div>

          <div className='hidden md:flex flex-1 justify-end'>
            <button className='flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg font-semibold hover:border-gray-800'>
              <img src={electron} alt="electron icon" className='' />
              <span>Electron Developers</span>
              <FontAwesomeIcon icon={faArrowRight} className='text-gray-600'/>
              
            </button>
          </div>


          <button className='p-2 md:hidden' onClick={handleMenu}>
            <FontAwesomeIcon icon={faBars} className='text-gray-600'/>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen ? (
            <div id='nav-dialog' className='fixed bg-white inset-0 p-3 md:hidden'>
              <div id='nav-bar' className='flex justify-between'>
                <a href="/" id='brand' className='flex gap-2 items-center'>
                  <img src={Logo} alt="Logo" className='object-cover max-w-12 max-h-12' />
                  <span className='text-lg font-medium font-display'>ToDesktop</span>
                </a>

                <button className='p-2 md:hidden' onClick={handleMenuClose}>
                  <FontAwesomeIcon icon={faXmark} className='text-gray-600' />
                </button>
              </div>

              <div className='flex flex-col my-5'>
                <a href="#" className='font-medium my-2 p-2 hover:bg-gray-300 rounded-lg px-4'>Pricing</a>
                <a href="#" className='font-medium my-2 p-2 hover:bg-gray-300 rounded-lg px-4'>Docs</a>
                <a href="#" className='font-medium my-2 p-2 hover:bg-gray-300 rounded-lg px-4'>Packages</a>
                <a href="#" className='font-medium my-2 p-2 hover:bg-gray-300 rounded-lg px-4'>Blogs</a>
                <a href="#" className='font-medium my-2 p-2 hover:bg-gray-300 rounded-lg px-4'>Login</a>
              </div>

              <div className='h-[1px] bg-gray-300'></div>

              <button className='mt-8 w-full flex gap-2 items-center px-6 py-3 rounded-lg font-semibold  hover:bg-gray-300 '>
                <img src={electron} alt="electron icon" className='' />
                <span>Electron Developers</span>
                <FontAwesomeIcon icon={faArrowRight} className='text-gray-600'/>
                
              </button>
            </div>

          ) : '' }

        </nav>
    </>
  )
}

export default Navbar