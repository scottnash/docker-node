import * as c from './constants';
import axios from 'axios';

export const getHosts = () => {
  const url = "https://cache-api.ranker.com/lists/2494860/items?limit=1600&offset=0&include=votes,wikiText,rankings,openListItemContributors&propertyFetchType=ALL&liCacheKey=null";
  return (dispatch) => {
    return axios.get(url).then( (response)=> {
      dispatch(setHosts(response.data.listItems));
    });
  };
}

export const setHosts = (hosts)=> {
  return {
    type: c.GET_HOSTS,
    payload: hosts
  };
}
