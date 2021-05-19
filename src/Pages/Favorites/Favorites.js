import React, { useEffect } from "react";

import Movie from "../../Components/Movie/Movie";

import { useForceUpdate } from '../../Hooks/ForceUpdate/ForceUpdate'

import "./Favorites.scss";

const Favorites = () => {
  const forceUpdate = useForceUpdate();

  const allStorage = () => {
    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
      values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    return values;
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id) => {
    localStorage.removeItem(id);
    forceUpdate();
  }

  return (
    <div className='favorites'>
      {allStorage() ? allStorage().map((item) => 
        <Movie key={item.id} title={item.title} image={item.poster_path} fav={'unfav'} handleClick={() => handleClick(item.id)}/>
      ) : null}
    </div>
  );
};

export default Favorites;
