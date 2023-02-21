import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { Button1 } from '../../components';

export default function Header() {
  return (
    <header className="header" id='header'>
      <Link to="/">
        <img src={Logo} alt="logo" className="header--logo" />
      </Link>
      <Button1 />
    </header>
  );
}
