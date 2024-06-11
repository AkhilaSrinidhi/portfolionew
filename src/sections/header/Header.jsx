import React, { useEffect } from 'react';
import Typed from 'typed.js';
import HeaderImage from '../../assets/header.jpg';
import data from './data';
import './header.css';

const Header = () => {
  useEffect(() => {
    var typed = new Typed('#element', {
      strings: ['Oracle Certified Java Developer.', '<i>Full Stack</i> Developer.', 'Software Engineer.'],
      typeSpeed: 70,
    });

    return () => {
      typed.destroy(); // Destroy the Typed instance to prevent memory leaks
    };
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header_proftxt">
          <div className='proftxt'>Hi! <br/> I'm Akhila Srinidhi Janapati</div>
          <span id="element"></span> 
        </div>
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
      </div>
      <div className="header__socials">
        {data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)}
      </div>
    </header>
  );
}

export default Header;
