import React, { useContext } from 'react';
import './BeersList.css';
import CtxBeers from '../CtxBeers';

const BeersList = () => {
  const beers = useContext(CtxBeers);
  return(
    <div className='beersList'>
      {beers.map((beer, index) => {
        return <a href={`beers/${beer.id}`} key={index}><img key={index} src={beer.image_url} alt={beer.name}/></a>
      })}
    </div>
  )
}

export default BeersList;
