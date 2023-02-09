import ErrorSvg from '../../assets/404-error-animate.svg';
import React, { useEffect } from 'react';
import Button2 from '../../components/Button/Button_2';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Error() {
  useEffect(() => {
    document.title = `Amy's Digital Designs | Oops - Page Not Found`;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <section>
          <img src={ErrorSvg} alt="Gif animée Error 404" />
        </section>
        <section>
          <h1>
            Uh-oh! The page you are looking for seems to have gotten lost in the
            infinity of the Internet
          </h1>
          <p>Return to the homepage by clicking on the button below.</p>
          <Button2 />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
