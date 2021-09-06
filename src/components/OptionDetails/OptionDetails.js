import React from 'react';
import './OptionDetails.css';

function OptionDetails({ category, difficulty }) {
  let catagory_info = '';

  if (category == 10) {
    catagory_info = 'Book';
  } else if (category == 12) {
    catagory_info = 'Music';
  } else if (category == 11) {
    catagory_info = 'Film';
  } else if (category == 15) {
    catagory_info = 'Video Games';
  } else if (category == 18) {
    catagory_info = 'Computers';
  } else if (category == 22) {
    catagory_info = 'Geography';
  } else if (category == 21) {
    catagory_info = 'Sports';
  } else if (category == 31) {
    catagory_info = 'Anime & Manga';
  } else if (category == 27) {
    catagory_info = 'Animal';
  } else console.log('Not Match Found!');

  return (
    <div className='catagory-bar'>
      <span className='catagory-text'>
        Selected Category :{' '}
        <span className='text-coloring'>{catagory_info}</span>
      </span>

      <div className='difficulty'>
        Selected Difficulty :{' '}
        <span className='text-coloring'>{difficulty}</span>
      </div>
    </div>
  );
}

export default OptionDetails;
