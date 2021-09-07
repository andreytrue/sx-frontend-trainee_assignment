import React from 'react';

import { FooterURLs } from '../../utils/const';

function Footer() {
  const FooterList = Object.values(FooterURLs);
  
  return (
    <footer className="main__footer footer">
      <ul className="footer__list">
        {FooterList.map((item, index) => (
          <li className="footer__item" key={item + index}>
            <a href="/" className="footer__link">{item}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer;