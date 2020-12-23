import React, { useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from "./redux/user/user.actions";

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from "./pages/checkout/checkout.component";


import './App.css';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);
  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route exact path = '/ecommerce-app' render = { ()=> (<Redirect to='/'/>)} />
        <Route path = '/shop' component = {ShopPage} />
        <Route
          exact
          path = '/sign-in'
          render={()=>
            currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage />
          }
        />
        <Route path = '/checkout' component = {CheckoutPage} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);