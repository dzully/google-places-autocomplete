import {
  UPDATE_SEARCH_QUERY,
  UPDATE_MARKER_PROPERTIES
} from '../actions/geocoder';
import { UPDATE_MAP_SUCCESS } from '../actions/map';
import mapReducer from './map';

describe('mapReducer', () => {
  it('should return the initial state', () => {
    return expect(
      mapReducer(undefined, {
        type: '',
        map: undefined,
        mapProperties: undefined,
        markerProperties: undefined,
        searchHistory: [],
        searchQuery: ''
      })
    ).toEqual({
      map: null,
      searchHistory: [],
      searchQuery: '',
      markerProperties: null
    });
  });

  it('should handle UPDATE_MAP_SUCCESS', () => {
    return expect(
      mapReducer(undefined, {
        type: UPDATE_MAP_SUCCESS,
        mapProperties: 'someMapProperties',
        map: undefined,
        markerProperties: undefined,
        searchHistory: [],
        searchQuery: ''
      })
    ).toEqual({
      map: 'someMapProperties',
      searchHistory: [],
      searchQuery: '',
      markerProperties: null
    });
  });

  it('should handle UPDATE_SEARCH_QUERY', () => {
    return expect(
      mapReducer(undefined, {
        type: UPDATE_SEARCH_QUERY,
        searchQuery: 'someSearchQuery',
        map: undefined,
        mapProperties: undefined,
        markerProperties: undefined,
        searchHistory: []
      })
    ).toEqual({
      map: null,
      searchHistory: [],
      searchQuery: 'someSearchQuery',
      markerProperties: null
    });
  });

  it('should handle UPDATE_MARKER_PROPERTIES', () => {
    return expect(
      mapReducer(undefined, {
        type: UPDATE_MARKER_PROPERTIES,
        markerProperties: 'someMarkerProperties',
        map: undefined,
        mapProperties: undefined,
        searchHistory: [],
        searchQuery: ''
      })
    ).toEqual({
      map: null,
      searchHistory: [],
      searchQuery: '',
      markerProperties: 'someMarkerProperties'
    });
  });

  it('should return the same state for unknown actions', () => {
    return expect(
      mapReducer(undefined, {
        type: 'UNKNOWN_ACTION',
        map: undefined,
        mapProperties: undefined,
        markerProperties: undefined,
        searchHistory: [],
        searchQuery: ''
      })
    ).toEqual({
      map: null,
      searchHistory: [],
      searchQuery: '',
      markerProperties: null
    });
  });
});
