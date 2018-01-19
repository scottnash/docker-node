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

export default combineReducers({
  hosts
});
