import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';


export default combineReducers({
  counter,
  routing: routerReducer
});