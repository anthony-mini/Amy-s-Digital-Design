import React, { useEffect } from 'react';
import Button1 from '../../components/Button/Button_1';

export default function Home() {
  useEffect(() => {
    document.title = `Amy's Digital Designs | Homepage`;
  }, []);

  return (
    <h1>
      Hello world
      <Button1 />
    </h1>
  );
}
