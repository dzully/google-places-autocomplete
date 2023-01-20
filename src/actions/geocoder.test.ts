import { updateSearch } from './geocoder';

describe('updateSearch', () => {
  it('should return an action with the correct type and payload', () => {
    const search: any = {
      name: 'Seattle',
      geometry: { location: { lat: () => 1, lng: () => 2 } }
    };
    const map = {};
    const marker = { setVisible: jest.fn() };
    const query = 'Seattle, WA';
    const expectedAction = {
      type: 'UPDATE_SEARCH_HISTORY',
      searchHistory: search,
      markerProperties: marker,
      mapProperties: map,
      searchQuery: query
    };

    expect(updateSearch(search, map, marker, query)).toEqual(expectedAction);
  });
});
