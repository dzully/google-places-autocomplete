import {
  UPDATE_MARKER_PROPERTIES,
  UPDATE_SEARCH_HISTORY,
  UPDATE_SEARCH_QUERY
} from '../actions/geocoder';
import { UPDATE_MAP_SUCCESS } from '../actions/map';
import { Places } from '../interface/geocoder';
import { actionProps } from '../interface/reducers';

export interface mapInitialState {
  map: unknown;
  searchHistory: Places[];
  searchQuery: string;
  markerProperties: unknown;
}

const initialState: mapInitialState = {
  map: null,
  searchHistory: [],
  searchQuery: '',
  markerProperties: null
};

export default function mapReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case UPDATE_MAP_SUCCESS:
      return {
        ...state,
        map: action.mapProperties
      };
    case UPDATE_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.searchHistory],
        markerProperties: action.markerProperties,
        searchQuery: action.searchQuery
      };
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.searchQuery
      };
    case UPDATE_MARKER_PROPERTIES:
      return {
        ...state,
        markerProperties: action.markerProperties
      };

    default:
      return state;
  }
}
