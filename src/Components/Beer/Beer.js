import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Beer.css';
import CtxBeers from '../CtxBeers';

const Beer = () => {
  const beers = useContext(CtxBeers);
  const beerID = useParams().id;
  return(
    <div className='beer'>
      {beers.filter(beer =>  beer.id === parseInt(beerID)).map((beer, index) => {
        return (
          <React.Fragment>
            <div className='description' key={index}>
              <Link exact to='/'>Return Home</Link>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.description}</p>
            </div>
            <img src={beer.image_url} alt={beer.name}/>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Beer;
