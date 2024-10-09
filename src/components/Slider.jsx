import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [
  "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg",
  "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
  "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((URL, index) => (
          <div className="min-w-full" key={index}>
            <img className="w-full h-96 object-cover" alt="sample_file" src={URL} />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Slider;
