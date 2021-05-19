import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { searchAction, changeInputAction } from '../../Store/actions';

import "./Entry.scss";

const Entry = () => {
  const [itemsReady, setItemsReady] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedData = useSelector(state => state.searchData, shallowEqual);
  const input = useSelector(state => state.searchTitle, shallowEqual);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  useEffect(() => {
    if (selectedData && selectedData.length) {
      setItemsReady(true)
    }
  }, [selectedData])

  const handleChange = (event) => {
    dispatch(changeInputAction(event.target.value))
  };

  const handleClick = () => {
    dispatch(searchAction(input))
  }

  const handleGoToDetail = (movie) => {
    history?.push('/detail', { movie })
  }

  return (
    <div className='wrapper'>
      <div className='search-wrapper'>
        <input
          className="search-input"
          type="search"
          ref={inputRef}          
          placeholder="Write the film that you want to find"
          onChange={handleChange}
          value={input}
        />
        <button type="button" onClick={handleClick} className='search-button'>
          Search
        </button>
      </div>
      <div className='items-wrapper'>
        {itemsReady && selectedData.map((movie) => 
          <span key={movie.id} onClick={() => handleGoToDetail(movie)}>- {movie.title}</span>
        )
        }
      </div>
    </div>
  );
};

export default Entry;
