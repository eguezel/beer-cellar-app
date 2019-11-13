import React from 'react';
import './Shelf.css';

const Shelf = () => {
  return(
    <div className='shelf'>
      <img src={`${process.env.PUBLIC_URL}/assets/images/shelf.png`} alt='A shelf'/>
    </div>
  )
}

export default Shelf;
