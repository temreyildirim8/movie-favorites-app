import React from "react";

import "./Movie.scss";

const Movie = ( {title, fav, image, handleClick} ) => {

  return (
    <div className='movie-wrapper'>
      <div className='title-wrapper'>
        <span className='title'>{title}</span>
        <span className='fav' onClick={() => handleClick()}>&nbsp;({fav})</span>
      </div>
      <img 
        src={'http://image.tmdb.org/t/p/w185' + image}
        alt={title}
      >
      </img>
    </div>
  );
};

export default Movie;
