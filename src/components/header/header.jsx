import React from 'react';

function Header({handleRefreshClick}) {
  return (
    <header className="page__header header">
      <div className="header__logo">
        <img className="header__logo-image" src='../img/logo.png' width="40" height="40" alt="Hacker News logo" />
        <h1 className="header__logo-text">Hacker News</h1>
      </div>

      <button className="header__refresh" onClick={handleRefreshClick}>Make refresh</button>
    </header>
  )
}

export default Header;
