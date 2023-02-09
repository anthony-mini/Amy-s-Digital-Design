import React from 'react';

export default function Button2() {
  function handleClick() {
    if (pathname === '/') {
      window.location.reload();
    } else {
      window.location.assign('/');
    }
  }

  const pathname = window.location.pathname;

  return pathname === '/' ? (
    <div>
      <button onClick={handleClick} className="button button--2">
        Free Consultation
      </button>
    </div>
  ) : (
    <div>
      <button onClick={handleClick} className="button button--2">
        Homepage
      </button>
    </div>
  );
}
