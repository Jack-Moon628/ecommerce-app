import React from 'react';

import { CustomButtonContainer } from "./custom-button.styles";

const CustomBtn = ({children, ...props}) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
)

export default CustomBtn;
/*
import React from 'react';

import './custom-btn.styles.scss';

const CustomBtn = ({ children, isGoogleSignIn, inverted, ...ohterProps }) => (
  <button className={`${inverted?'inverted':''} ${isGoogleSignIn?'google-sign-in':''} custom-btn`}  {...ohterProps}>
    {children}
  </button>
)

export default CustomBtn;
*/