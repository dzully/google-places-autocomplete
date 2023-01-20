import { Places } from '../interface/geocoder';

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_SEARCH_HISTORY = 'UPDATE_SEARCH_HISTORY';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
export const UPDATE_MARKER_PROPERTIES = 'UPDATE_MARKER_PROPERTIES';

export const updateSearch = (
  search: Places,
  map: unknown,
  marker: unknown,
  query: string
) => {
  return {
    type: UPDATE_SEARCH_HISTORY,
    searchHistory: search,
    markerProperties: marker,
    mapProperties: map,
    searchQuery: query
  };
};

export const updateMarker = (marker: unknown) => {
  return {
    type: UPDATE_MARKER_PROPERTIES,
    markerProperties: marker
  };
};

export const updateSearchQuery = (query: unknown) => {
  return {
    type: UPDATE_SEARCH_QUERY,
    searchQuery: query
  };
};
