import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button_1';

export default function Footer() {
  return (
    <footer className="footer">
      <Button />
      <Link to="/">
        <img src={Logo} alt="logo" className="footer--logo" />
      </Link>
    </footer>
  );
}
