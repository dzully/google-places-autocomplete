import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleMapProps } from '../thunks/map';
import { RootProps } from '../reducers/reducers';

const mapOption = {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8
};

const MapView = () => {
  const data = useSelector((state: RootProps) => state.map);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const map = data.map;

  useEffect(() => {
    if (!map) {
      const mapContainer = new (window as any).google.maps.Map(
        ref.current,
        mapOption
      );

      dispatch(handleMapProps({ mapProps: mapContainer }) as never);
    }
  }, [ref, map]);

  return <div ref={ref} className="root" />;
};

export default MapView;
