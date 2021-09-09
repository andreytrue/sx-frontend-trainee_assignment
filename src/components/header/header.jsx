import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../utils/const';

function Header({ handleRefreshClick }) {

  return (
    <header className="page__header header">
      <Link to={AppRoute.MAIN} className="header__link">
        <div className="header__logo">
          <img className="header__logo-image" src='../img/logo.png' width="40" height="40" alt="Hacker News logo" />
          <h1 className="header__logo-text">Hacker News</h1>
        </div>
      </Link>

      {window.location.pathname !== AppRoute.MAIN
        ? <Link to={AppRoute.MAIN} className="header__return">Return on main page</Link>
        : ``}
      <button className="header__refresh" onClick={handleRefreshClick}>Make refresh</button>
    </header>
  )
}

export default Header;
