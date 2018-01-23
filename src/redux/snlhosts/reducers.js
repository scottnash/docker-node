import * as c from './constants';
import { combineReducers } from 'redux';

const hosts = (state = [], action) =>{
  switch (action.type){
    case c.GET_HOSTS:
      return action.payload;
  default:
    return state;
  }
}

const host = (state = { }, action) => {
  switch (action.type){
    case c.SET_HOST:
      return action.host;
    default:
      return state;
  }
}

export default combineReducers({
  hosts,
  host
});
