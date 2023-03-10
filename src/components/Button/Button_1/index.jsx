import React from 'react';

export default function Button1() {
  function handleClick() {
    if (pathname === '/') {
      window.location.reload();
    } else {
      window.location.assign('/');
    }
  }

  const pathname = window.location.pathname;

  return pathname === '/' ? (
    <button onClick={handleClick} className="button button--1">
      Free Consultation
    </button>
  ) : (
    <button onClick={handleClick} className="button button--1">
      Homepage
    </button>
  );
}
