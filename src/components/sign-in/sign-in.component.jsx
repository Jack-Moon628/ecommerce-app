import React, { useState } from 'react';
import { connect } from "react-redux";


import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';
 
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });

  const { email, password} = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const {value, name} = event.target;
    
    setCredentials({...userCredentials, [name]: value});
  };

  return(
    <div className='sign-in'>
      <h2>I already had an account</h2>
      <span>Sign in with your email and passowrd</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          value={email}
          type='email'
          handleChange={handleChange}
          label='email'
          required
        />

        <FormInput
          name='password'
          value={password}
          type='password'
          handleChange={handleChange}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomBtn type='submit'> Sign In </CustomBtn>
          <CustomBtn type='button' onClick={googleSignInStart} isGoogleSignIn>
            Sign In with Google
          </CustomBtn>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })
  )
})

export default connect(null, mapDispatchToProps)(SignIn);