export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const PATCH_MAP_PROPS = 'PATCH_MAP_PROPS';

export const fetchDataStart = () => ({
  type: FETCH_DATA
});

export const fetchDataSuccess = (data: unknown) => ({
  type: FETCH_SUCCESS,
  data
});

export const patchMapProps = (mapProps: unknown) => ({
  type: PATCH_MAP_PROPS,
  data: mapProps
});

export const fetchDataFailure = (error: unknown) => ({
  type: FETCH_ERROR,
  error
});
