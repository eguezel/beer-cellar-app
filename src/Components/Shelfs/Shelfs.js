import React from 'react';
import './Shelfs.css';

const Shelfs = () => {
  return(
    <div className='shelfs'>
      <img src={`${process.env.PUBLIC_URL}/assets/images/shelf.png`} alt='A shelf'/>
      <img src={`${process.env.PUBLIC_URL}/assets/images/shelf.png`} alt='A shelf'/>
      <img src={`${process.env.PUBLIC_URL}/assets/images/shelf.png`} alt='A shelf'/>
      <img src={`${process.env.PUBLIC_URL}/assets/images/shelf.png`} alt='A shelf'/>
      <img src={`${process.env.PUBLIC_URL}/assets/images/shelf.png`} alt='A shelf'/>
    </div>
  )
}

export default Shelfs;
