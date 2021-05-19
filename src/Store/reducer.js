import * as ActionTypes from "./actionTypes";
import { updateObject } from "./utility";

const INITIAL_STATE = {
  loading: false,
  searchData: [],
  searchTitle: ''
}

const searchSuccessful = (state, action) => {
  return updateObject(state, INITIAL_STATE, {
    loading: false,
    searchTitle: action.searchTitle,
    searchData: action.rowData.results,
  });
  
}

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ActionTypes.SEARCH_START: return updateObject(state, {}, { loading: true });
    case ActionTypes.SEARCH_SUCCESS: return searchSuccessful(state, action);
    case ActionTypes.CLEAR: return updateObject(state, {}, { searchData: [] });
    case ActionTypes.CHANGE: return updateObject(state, {}, { searchTitle: action.searchTitle });

    default: return state;
  }
}

export default reducer;