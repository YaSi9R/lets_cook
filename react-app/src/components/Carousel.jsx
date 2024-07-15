import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cards = [
    {
      title: 'Salmon Tacos with Mango Corn Salsa',
      reviews: '21 REVIEWS / 5 AVERAGE',
    },
    {
      title: 'Juicy Lucy',
      reviews: '21 REVIEWS / 5 AVERAGE',
    },
    {
      title: "Liz's Roasted Broccoli Salad",
      reviews: '53 REVIEWS / 5 AVERAGE',
    },
    {
      title: 'Gochujang Chicken Burgers with Kimchi Bacon Jam',
      reviews: '53 REVIEWS / 5 AVERAGE',
    },
    {
      title: 'Grilled C Portobell Chees Pol',
      reviews: '44 REVIEWS',
    },
    {
        title: 'Juicy Lucy',
        reviews: '21 REVIEWS / 5 AVERAGE',
      },
      {
        title: "Liz's Roasted Broccoli Salad",
        reviews: '53 REVIEWS / 5 AVERAGE',
      },
      {
        title: 'Gochujang Chicken Burgers with Kimchi Bacon Jam',
        reviews: '53 REVIEWS / 5 AVERAGE',
      },
      {
        title: 'Grilled C Portobell Chees Pol',
        reviews: '44 REVIEWS',
      },
      {
        title: "Liz's Roasted Broccoli Salad",
        reviews: '53 REVIEWS / 5 AVERAGE',
      },
      {
        title: 'Gochujang Chicken Burgers with Kimchi Bacon Jam',
        reviews: '53 REVIEWS / 5 AVERAGE',
      },
      {
        title: 'Grilled C Portobell Chees Pol',
        reviews: '44 REVIEWS',
      },
      {
        title: "Liz's Roasted Broccoli Salad",
        reviews: '53 REVIEWS / 5 AVERAGE',
      },
      {
        title: 'Gochujang Chicken Burgers with Kimchi Bacon Jam',
        reviews: '53 REVIEWS / 5 AVERAGE',
      },
      {
        title: 'Grilled C Portobell Chees Pol',
        reviews: '44 REVIEWS',
      },
  ];

  const handlePrevClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0? cards.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cards.length - 1? 0 : prevIndex + 1));
  };

  const handleCardClick = (index) => {
    setCurrentCardIndex(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slider"
        style={{
          transform: `translateX(${currentCardIndex * -250}px)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="carousel-card"
            onClick={() => handleCardClick(index)}
          >
            <h3>{card.title}</h3>
            <p>{card.reviews}</p>
          </div>
        ))}
      </div>
      <button
        className="prev-btn"
        onClick={handlePrevClick}
        disabled={currentCardIndex === 0}
      >
        &#10094;
      </button>
      <button
        className="next-btn"
        onClick={handleNextClick}
        disabled={currentCardIndex === cards.length - 1}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;