import React, { PropTypes } from 'react';
import UserInfo from './components/UserInfo';

import './header.scss';

const Header = (props) => {
  return (
    <header className="Header">
      <button className="Header-button">
        <i className="fa fa-chevron-left" />
        Menu
      </button>

      <h1 className="Header-pageTitle">
        {props.title}
      </h1>

      <UserInfo
        image="http://loremflickr.com/60/60"
        userName="Václav Zeman" 
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
