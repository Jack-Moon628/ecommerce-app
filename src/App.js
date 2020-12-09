import React from "react";
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/ecommerce-app' component = {HomePage} />
          <Route path = '/shop' component = {ShopPage} />
          <Route path = '/sign-in' component = {SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;