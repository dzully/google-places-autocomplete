import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../thunks/thunks';
import GoogleMap from '../container/MapWrapper';
import MapView from '../container/MapView';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData() as never);
  }, [dispatch]);

  return (
    <div data-testid="Home">
      <GoogleMap>
        <MapView />
      </GoogleMap>
    </div>
  );
};

export default Home;
