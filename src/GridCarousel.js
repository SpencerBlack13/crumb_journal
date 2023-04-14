//I added a carousel package 

import { useState } from 'react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//for an example I only displayed the original 9 (duplicated)
const items = [
  { id: 1, name: 'Widget Name', image: '/images/Widget.png' },
  { id: 2, name: 'Widget Name', image: '/images/Widget.png' },
  { id: 3, name: 'Widget Name', image: '/images/Widget.png' },
  { id: 4, name: 'Widget Name', image: '/images/Widget.png' },
  { id: 5, name: 'Widget Name', image: '/images/Widget.png' },
  { id: 6, name: 'Widget Name', image: '/images/Widget.png' },
  { id: 7, name: 'Widget Name', image: '/images/Widget.png' },
  { id: 8, name: 'Widget Name', image: '/images/Widget.png' },
  { id: 9, name: 'Widget Name', image: '/images/Widget.png' },
];

export function GridCarousel() {
  const [displayWidget, setDisplayWidget] = useState(false);

  //the layout of the item in the carousel
  const GridItem = ({ item }) => (
    <div>
      <img className='item-img' src={item.image} alt={item.name} />
      <img onClick={displaySomething} className='item-questionmark' src="./images/question.png" />
      <p className='item-txt'>{item.name}</p>
    </div>
  );
  
  //defining the 3 colums
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 0 },
      items: 3,
      partialVisibility: false
    },
  };
  
  //one row of the carousel is being defined
  const RowCarousel = ({ items }) => (
    <Carousel containerClass="carousel-row" itemClass="item" responsive={responsive}>
      {items.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </Carousel>
  );

  //enables/disables pop for widget info 
  const displaySomething = () => {
    setDisplayWidget(!displayWidget)
  }

  //each carousel row
  return (
    <div>
      {displayWidget && (<img onClick={displaySomething} className='modal' src='./images/widgetinfo.png'></img>)}
      <div className="carousel-container">
        <RowCarousel items={items} />
        <RowCarousel items={items} />
        <RowCarousel items={items} />
      </div>
    </div>
  );
}
