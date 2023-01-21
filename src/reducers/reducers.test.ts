import rootReducer from './reducers';
import { UPDATE_MAP_SUCCESS } from '../actions/map';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    return expect(
      rootReducer(undefined, {
        type: '',
        map: undefined,
        mapProperties: undefined,
        markerProperties: undefined,
        searchHistory: [],
        searchQuery: ''
      })
    ).toEqual({
      map: {
        map: null,
        searchHistory: [],
        searchQuery: '',
        markerProperties: null
      }
    });
  });

  it('should handle UPDATE_MAP_SUCCESS', () => {
    return expect(
      rootReducer(undefined, {
        type: UPDATE_MAP_SUCCESS,
        markerProperties: undefined,
        searchHistory: [],
        searchQuery: '',
        map: undefined,
        mapProperties: undefined
      })
    ).toEqual({
      map: {
        map: undefined,
        searchHistory: [],
        searchQuery: '',
        markerProperties: null
      }
    });
  });
});
