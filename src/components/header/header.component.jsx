import Ract from 'react';
import  { connect } from 'react-redux';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className="option" to='/shop'>
        SHOP
      </Link>
      <Link className="option" to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to='/sign-in'>
        SIGN IN
        </Link>
      }
    </div>
  </div>
);

const mapStateToProps = state => ({   ///store - top level route reducer.
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);