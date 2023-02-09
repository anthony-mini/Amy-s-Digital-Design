import React, { useEffect } from 'react';
// import Button1 from '../../components/Button/Button_1';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
  useEffect(() => {
    document.title = `Amy's Digital Designs | Homepage`;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
}
