import { UPDATE_SEARCH_HISTORY } from '../actions/geocoder';
import { UPDATE_MAP_SUCCESS } from '../actions/map';
import { Places } from '../interface/geocoder';
import { actionProps } from '../interface/reducers';

export interface mapInitialState {
  map: unknown;
  searchHistory: Places[];
}

const initialState: mapInitialState = {
  map: null,
  searchHistory: []
};

export default function mapReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case UPDATE_MAP_SUCCESS:
      return {
        ...state,
        map: action.map
      };
    case UPDATE_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: action.searchHistory
      };

    default:
      return state;
  }
}
