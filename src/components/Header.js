import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import beerJS from '../imgs/BeerJS.png';

const formattedText = title => (title.split('').map(x => `<span>${x}</span>`).join(''));

const Header = ({ title = 'React!', subtitle = '' }) => {
  const spans = formattedText(title);
  return (
    <div className="header-wrapper">
      <Link to="/" className="header">
        <img className="logo" src={beerJS} alt={title} />
        <div className="content">
          <div className="title" dangerouslySetInnerHTML={{__html: spans}}></div>
          <div className="subtitle">{subtitle}</div>
        </div>
      </Link>
    </div>
  )
}

export default Header;
