import { handleSelectAutocompleteProps } from '../interface/geocoder';

export const UPDATE_MAP_SUCCESS = 'UPDATE_MAP_SUCCESS';
export const UPDATE_MAP = 'UPDATE_MAP';

export const patchMapProps = (map: unknown) => ({
  type: UPDATE_MAP,
  mapProperties: map
});

export const handleSelectAutocomplete = ({
  place,
  map,
  markerProperties
}: handleSelectAutocompleteProps) => {
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }

  markerProperties.setPosition(place.geometry.location);
  markerProperties.setVisible(true);
};
