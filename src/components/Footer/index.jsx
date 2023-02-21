import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { Button1 } from '../../components';

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={Logo} alt="logo" className="footer--logo" />
      </Link>
      <Button1 />
    </footer>
  );
}
