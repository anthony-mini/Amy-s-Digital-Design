import React, { useEffect } from 'react';
// import Button1 from '../../components/Button/Button_1';
import Header from '../../components/Header';
import Disciplines from '../../components/Disciplines';
import About from '../../components/About';
import Footer from '../../components/Footer';

export default function Home() {
  useEffect(() => {
    document.title = `Amy's Digital Designs | Homepage`;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="section-1">
          <h1 className=" section-1--headling headling">
            Design solutions made easy
          </h1>
          <p className="section-1--paragraph paragraph ">
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </p>
        </section>
        <Disciplines />
        <About />
      </main>
      <Footer />
    </React.Fragment>
  );
}
