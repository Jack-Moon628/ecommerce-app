import React from 'react';

import CustomButton from '../custom-btn/custom-btn.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO GHECKOUT</CustomButton>
  </div>
)

export default CartDropdown;