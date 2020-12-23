import Ract from 'react';
import  { connect } from 'react-redux';

import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";


import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { 
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink 
} from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";
import CardDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
        :
        <OptionLink to='/sign-in'>
        SIGN IN
        </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CardDropdown /> }
    
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({   ///store - top level route reducer.
  currentUser: selectCurrentUser,
  hidden: selectHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);