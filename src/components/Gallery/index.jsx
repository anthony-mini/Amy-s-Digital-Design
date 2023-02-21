import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable'; // import the hook from react-swipeable
import { ArrayImg } from '../../constants';
import { ArrowLeft, ArrowRight } from '../../assets';

export default function Gallery() {
  const [index, setIndex] = useState(0); // state to keep track of the current image index

  const nextPicture = () => {
    // change the index to the next image
    setIndex(index === ArrayImg.length - 1 ? 0 : index + 1);
  };

  const previousPicture = () => {
    // change the index to the previous image
    setIndex(index === 0 ? ArrayImg.length - 1 : index - 1);
  };

  // use the hook to handle swipe events on the main div
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextPicture,
    onSwipedRight: previousPicture,
  });

  return (
    <>
      {/* use the swipeableHandlers object as a spread operator to pass all propriety's of the swipe handlers to the main div */}
      <div {...swipeHandlers} className="gallery gallery--container">
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
