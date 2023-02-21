import ErrorSvg from '../../assets/404-error-animate.svg';
import React, { useEffect } from 'react';
import { Header, Button2 } from '../../components';

export default function Error() {
  useEffect(() => {
    document.title = `Amy's Digital Designs | Oops - Page Not Found`;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="Headling-error">
          <h1>
            <span>Uh-oh!</span> <br/>
            The page you are looking for seems to have gotten lost in the
            infinity of the Internet
          </h1>
        </section>
        <section className="section-img">
          <img src={ErrorSvg} alt="Gif animée Error 404" />
          <Button2 />
        </section>
      </main>
    </React.Fragment>
  );
}
