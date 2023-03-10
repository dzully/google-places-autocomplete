import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootProps } from '../reducers/reducers';
import { patchMapProps } from '../actions/map';
import { google } from './Geocoder';

export const mapOption = {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8
};

const MapView = () => {
  const data: any = useSelector((state: RootProps) => state.map);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const map = data.map;

  useEffect(() => {
    if (!map) {
      const mapContainer = new google.maps.Map(ref.current, mapOption);
      dispatch(patchMapProps(mapContainer));
    }
  }, [ref, map, dispatch]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div
        ref={ref}
        style={{ position: 'absolute', inset: 0 }}
        data-testid="mapContainer"
      />
    </div>
  );
};

export default MapView;
