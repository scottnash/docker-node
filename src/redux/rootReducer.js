import { combineReducers } from 'redux';
import snlHosts from './SNLHosts';


export default combineReducers({
    [snlHosts.constants.NAME]: snlHosts.reducer
});
