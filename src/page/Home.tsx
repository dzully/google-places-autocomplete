import GoogleMap from '../container/MapWrapper';
import MapView from '../container/MapView';
import Geocoder from '../container/Geocoder';
import History from '../container/History';

const Home = () => {
  return (
    <div data-testid="Home" style={{ height: '100%', width: '100%' }}>
      <GoogleMap>
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
          <div style={{ padding: 10 }}>
            <Geocoder />
            <History />
          </div>
          <MapView />
        </div>
      </GoogleMap>
    </div>
  );
};

export default Home;
