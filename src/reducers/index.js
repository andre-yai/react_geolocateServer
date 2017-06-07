import {combineReducers} from 'redux';
import places from './placesReducers';

const rootReducer = combineReducers({
  places
});

export default rootReducer;
