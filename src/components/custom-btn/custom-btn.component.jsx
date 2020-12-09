import React from 'react';

import './custom-btn.styles.scss';

const CustomBtn = ({ children, isGoogleSignIn, ...ohterProps }) => (
  <button className={`${isGoogleSignIn?'google-sign-in':''} custom-btn`}  {...ohterProps}>
    {children}
  </button>
)

export default CustomBtn;