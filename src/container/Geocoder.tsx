/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootProps } from '../reducers/reducers';
import SearchTextfield from '../component/SearchTextfield';
import { updateMarker, updateSearch } from '../actions/geocoder';
import { useSearchParams } from 'react-router-dom';
import withMap from '../utils/withMap';
import { handleSelectAutocomplete } from '../actions/map';

const options = {
  fields: ['formatted_address', 'geometry', 'name'],
  strictBounds: false,
  types: ['establishment']
};

export const google = (window as any).google;
const Geocoder = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [initiateAutocomplete, setInitiateAutocomplete] =
    useState<boolean>(false);
  const dispatch = useDispatch();
  const data = useSelector((state: RootProps) => state?.map);
  const markerProperties = data?.markerProperties as any;
  const [query, setQuery] = useState('');
  const map: any = data?.map;

  useEffect(() => {
    const handleUpdateQuery = () => {
      const placeQuery = searchParams.get('place') as string;

      if (placeQuery !== query) {
        const request = {
          query: placeQuery,
          fields: ['name', 'geometry']
        };

        const service = new google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(
          request,
          function (results: any, status: any) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              markerProperties.setVisible(false);
              const place = results[0];
              handleSelectAutocomplete({ place, map, markerProperties });
            }
          }
        );

        setQuery(placeQuery);
      }
    };

    if (map && markerProperties) handleUpdateQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, map, markerProperties]);

  useEffect(() => {
    if (!initiateAutocomplete && map) {
      const handleSetupAutocomplete = () => {
        const input = document.getElementById('pac-input');
        const autocomplete = new google.maps.places.Autocomplete(
          input,
          options
        );
        autocomplete.bindTo('bounds', map);
        const infowindow = new google.maps.InfoWindow();
        const infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);

        const marker = new google.maps.Marker({
          map,
          anchorPoint: new google.maps.Point(0, -29)
        });
        dispatch(updateMarker(marker));

        const handlePlaceChanged = () => {
          infowindow.close();
          marker.setVisible(false);
          const place = autocomplete.getPlace();

          if (!place.geometry?.location) {
            window.alert(
              "No details available for input: '" + place.name + "'"
            );
            return;
          }

          setSearchParams({ place: place.formatted_address });
          setQuery(place.formatted_address);
          dispatch(updateSearch(place, map, marker, place.name));
          handleSelectAutocomplete({ place, map, markerProperties: marker });
        };

        autocomplete.addListener('place_changed', handlePlaceChanged);
        setInitiateAutocomplete(true);
      };

      handleSetupAutocomplete();
    }
  }, [dispatch, initiateAutocomplete, map, setSearchParams]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setQuery(value);
  };

  return <SearchTextfield onChange={handleChange} value={query} />;
};

export default withMap(Geocoder);
