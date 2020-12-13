import React from "react";
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'

import './App.css';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
)

class App extends React.Component {
  // constructor() {    //we using redux, so don't need it anymore.
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // //this.setState({ currentUser: user});
      // createUserProfileDocument(user);
      // // console.log(user);
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // it's for setting user without redux

          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //   ...snapShot.data()
          //   }
          // });

          //setting user with redux
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    null, 
    mapDispatchToProps
  )(App);