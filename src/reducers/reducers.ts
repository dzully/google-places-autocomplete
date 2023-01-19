import { combineReducers } from 'redux';
import map, { mapInitialState } from './map';

export interface RootProps {
  map: mapInitialState;
}

const rootReducer = combineReducers({
  map
});

export default rootReducer;
