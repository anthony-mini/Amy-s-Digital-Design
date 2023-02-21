import React, { useEffect } from 'react';
import { Header, About, Disciplines, Projects, BookMe, Footer } from '../../components';

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
        <Projects />
        <BookMe />
      </main>
      <Footer />
    </React.Fragment>
  );
}
