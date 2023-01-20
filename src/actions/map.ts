export const UPDATE_MAP_SUCCESS = 'UPDATE_MAP_SUCCESS';
export const UPDATE_MAP = 'UPDATE_MAP';

export const patchMapProps = (map: unknown) => ({
  type: UPDATE_MAP,
  mapProperties: map
});
