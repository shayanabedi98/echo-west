import React from 'react'
import NavbarMenu from './NavbarMenu'
import NavbarShop from './NavbarShop'
import logo from '../assets/logo.png'

const Navbar = ({cart}) => {
  return (
    <div className='navbar'>
        <img src={logo} alt="Echo West Logo" />
        <NavbarMenu />
        <NavbarShop cart={cart} />
    </div>
  )
}

export default Navbar