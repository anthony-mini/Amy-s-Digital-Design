import React, { useEffect } from 'react';
import Button from '../../components/Button-CTA';

export default function Home() {
  useEffect(() => {
    document.title = `Amy's Digital Designs | Homepage`;
  }, []);

  return (
    <h1>
      Hello world
      <Button />
    </h1>
  );
}
