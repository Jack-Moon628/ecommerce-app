import React from 'react';
import { connect } from "react-redux";


import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';
 
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import './sign-in.styles.scss';

class SignIn extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password} = this.state;
    emailSignInStart(email, password);
  };

  handleChange = event => {
    const {value, name} = event.target;
    
    this.setState({ [name]: value});
  };
  
  render() {
    const { googleSignInStart } = this.props;
    return(
      <div className='sign-in'>
        <h2>I already had an account</h2>
        <span>Sign in with your email and passowrd</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            type='email'
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            name='password'
            value={this.state.password}
            type='password'
            handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })
  )
})

export default connect(null, mapDispatchToProps)(SignIn);