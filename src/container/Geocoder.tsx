/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, ChangeEvent, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootProps } from '../reducers/reducers';
import SearchTextfield from '../component/SearchTextfield';
import { updateSearch } from '../actions/geocoder';

export const google = (window as any).google;
const Geocoder = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootProps) => state?.map);
  const [query, setQuery] = useState('');
  const map: any = data?.map;
  const rs = useRef();

  useEffect(() => {
    if (map) {
      const input = document.getElementById('pac-input');
      const options = {
        fields: ['formatted_address', 'geometry', 'name'],
        strictBounds: false,
        types: ['establishment']
      };

      const autocomplete = new google.maps.places.Autocomplete(input, options);
      autocomplete.bindTo('bounds', map);
      const infowindow = new google.maps.InfoWindow();
      const infowindowContent = document.getElementById('infowindow-content');
      infowindow.setContent(infowindowContent);

      const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29)
      });

      const handlePlaceChanged = () => {
        infowindow.close();
        marker.setVisible(false);

        const place = autocomplete.getPlace();
        setQuery(place.formatted_address);
        dispatch(updateSearch(place));

        if (!place.geometry?.location) {
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }

        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        if (infowindowContent) {
          infowindowContent.children['place-name' as any].textContent =
            place.name;
          infowindowContent.children['place-address' as any].textContent =
            place.formatted_address;
          infowindow.open(map, marker);
        }
      };

      map.addListener('center_changed', () => {
        const place = autocomplete.getPlace();
        console.log({ place });
        setQuery(place.formatted_address);
        dispatch(updateSearch(place));
      });

      autocomplete.addListener('place_changed', handlePlaceChanged);
    }
  }, [dispatch, map]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setQuery(value);
  };

  return <SearchTextfield onChange={handleChange} value={query} />;
};

export default Geocoder;
