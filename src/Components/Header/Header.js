import React from "react";
import { useHistory } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const history = useHistory();

  const handleClick = (path) => {
    history?.push(path)
  }

  return (
    <div className='header'>
      <button type="button" onClick={() => handleClick('/')} className='search-button'>
        Home
      </button>        
      <button type="button" onClick={() => handleClick('/favorites')} className='search-button'>
        Favorites
      </button>
    </div>
  );
};

export default Header;
