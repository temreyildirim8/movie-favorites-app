import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './Store/reducer';

import Favorites from "./Pages/Favorites/Favorites";
import Detail from './Pages/Detail/Detail';
import Entry from './Pages/Entry/Entry';
import Header from './Components/Header/Header';

import './App.css';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/">
            <Entry />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
