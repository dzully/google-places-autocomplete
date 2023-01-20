import { Places } from '../interface/geocoder';

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_SEARCH_HISTORY = 'UPDATE_SEARCH_HISTORY';

export const updateSearch = (search: Places) => ({
  type: UPDATE_SEARCH,
  search
});
