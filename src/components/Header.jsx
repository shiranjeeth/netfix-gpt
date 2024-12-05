import React from 'react'
import logo from '../images/logo.png';

const Header = () => {
  return (
    <>
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black'>
    <img  className="w-44" src={logo} alt="Netflix Logo" />
    </div>
    </>
  )
}

export default Header