import * as ActionTypes from './actionTypes';
import axios from 'axios';

export const changeInputAction = (searchTitle) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.CHANGE, searchTitle });
  };
};

export const searchAction = (searchTitle) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SEARCH_START });

    axios
      .get('http://api.themoviedb.org/3/search/movie?api_key=0221f16fd25294afec3123ad59ff1256&query=' + searchTitle)
      .then((response) => {
        let newObj = JSON.parse(JSON.stringify(response.data));
        dispatch({ type: ActionTypes.SEARCH_SUCCESS, rowData: newObj, searchTitle });
      });
  };
};

export const clearAction = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.CLEAR });
  };
};
