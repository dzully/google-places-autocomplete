import { UPDATE_MAP, patchMapProps } from './map';

describe('mapActions', () => {
  it('should create an action to update the map', () => {
    const map = { center: { lat: 1, lng: 2 }, zoom: 8 };
    const expectedAction = {
      type: UPDATE_MAP,
      mapProperties: map
    };
    expect(patchMapProps(map)).toEqual(expectedAction);
  });
});
