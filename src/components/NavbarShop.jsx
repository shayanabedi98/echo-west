import React, { useState } from 'react'
import cartImg from '../assets/cart.png'

const NavbarShop = ({ cart }) => {

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


  return (
    <div className='navbar-shop'>
        <img src={cartImg} alt="shopping cart button" />
        {totalItems > 0 && <sup>{totalItems}</sup>}
    </div>
  )
}

export default NavbarShop