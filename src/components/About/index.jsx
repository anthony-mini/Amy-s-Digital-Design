import React from 'react';
import ImgProfil from '../../assets/image-amy.webp';
import Button from '../../components/Button/Button_2';

export default function About() {
  return (
    <section className="section-3">
      <img src={ImgProfil} alt="pictu amy" />
      <div className="section-3__bloc">
        <h2> I’m Amy, and I’d love to work on your next project </h2>
        <p className="paragraph">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button />
      </div>
    </section>
  );
}
