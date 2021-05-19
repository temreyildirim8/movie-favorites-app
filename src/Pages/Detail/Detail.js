import React, { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom';
import Movie from "../../Components/Movie/Movie";

import "./Detail.scss";

const Detail = () => {
  const [fav, setFav] = useState('fav');
  const location = useLocation();

  useEffect(() => {
    const isFavorited = localStorage.getItem(location?.state?.movie?.id);

    if (JSON.parse(isFavorited)){
      setFav('unfav')
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    const isFavorited = localStorage.getItem(location?.state?.movie?.id);

    if (JSON.parse(isFavorited)){
      localStorage.removeItem(location?.state?.movie?.id);
      setFav('fav')
    } else {
      localStorage.setItem(location?.state?.movie?.id, JSON.stringify(location?.state?.movie));
      setFav('unfav')
    }
  }

  return (
    <Movie title={location?.state?.movie?.title} image={location?.state?.movie?.poster_path} fav={fav} handleClick={() => handleClick()}/>
  );
};

export default Detail;
