import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button_1';

export default function Header() {
  return (
    <header className="header" id='header'>
      <Link to="/">
        <img src={Logo} alt="logo" className="header--logo" />
      </Link>
      <Button />
    </header>
  );
}
