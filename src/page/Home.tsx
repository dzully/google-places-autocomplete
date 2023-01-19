import GoogleMap from '../container/MapWrapper';
import MapView from '../container/MapView';
import Geocoder from '../container/Geocoder';

const Home = () => {
  return (
    <div data-testid="Home" style={{ height: '100%', width: '100%' }}>
      <GoogleMap>
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
          <Geocoder />
          <MapView />
        </div>
      </GoogleMap>
    </div>
  );
};

export default Home;
