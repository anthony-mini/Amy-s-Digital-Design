import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../assets/icon-arrow-left.svg';
import ArrowRight from '../../assets/icon-arrow-right.svg';

export default function Gallery() {
  const ArrayImg = [
    {
      id: 1,
      src: require('../../assets/image-slide-1.jpg'),
      alt: 'Image 1',
    },
    {
      id: 2,
      src: require('../../assets/image-slide-2.jpg'),
      alt: 'Image 2',
    },
    {
      id: 3,
      src: require('../../assets/image-slide-3.jpg'),
      alt: 'Image 3',
    },
    {
      id: 4,
      src: require('../../assets/image-slide-4.jpg'),
      alt: 'Image 4',
    },
    {
      id: 5,
      src: require('../../assets/image-slide-5.jpg'),
      alt: 'Image 5',
    },
  ];

  const [index, setIndex] = useState(0);

  const nextPicture = () => {
    setIndex(index === ArrayImg.length - 1 ? 0 : index + 1);
  };

  const previousPicture = () => {
    setIndex(index === 0 ? ArrayImg.length - 1 : index - 1);
  };

  return (
    <>
      <div className="gallery gallery--container">
        <Link to="/*">
          <img
            className="slider__left-image"
            src={ArrayImg[(index + ArrayImg.length - 1) % ArrayImg.length].src}
            alt={ArrayImg[(index + ArrayImg.length - 1) % ArrayImg.length].alt}
          />
        </Link>
        <Link to="/*">
          <img
            className="slider__center-image"
            src={ArrayImg[index].src}
            alt={ArrayImg[index].alt}
          />
        </Link>
        <Link to="/*">
          <img
            className="slider__right-image"
            src={ArrayImg[(index + 1) % ArrayImg.length].src}
            alt={ArrayImg[(index + 1) % ArrayImg.length].alt}
          />
        </Link>
      </div>
      <div className="btnGallery">
        <button onClick={previousPicture} className="btnGallery--left">
          <img src={ArrowLeft} alt="arrow Left" />
        </button>
        <button onClick={nextPicture} className="btnGallery--right">
          <img src={ArrowRight} alt="Arrow Right" />
        </button>
      </div>
    </>
  );
}
