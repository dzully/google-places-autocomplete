import List from '@mui/material/List';
import { useSelector, useDispatch } from 'react-redux';
import { RootProps } from '../reducers/reducers';
import HistoryList from '../component/HistoryList';
import { Places } from '../interface/geocoder';

const History = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootProps) => state?.map);
  const searchHistory = data.searchHistory;
  const marker = data.markerProperties as any;
  const map = data.map as any;
  console.log({ dispatch });

  const handleSelected = (place: Places) => {
    marker.setVisible(false);
    console.log('handleSelected');
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
  };

  return (
    <List>
      {searchHistory?.map((value, key) => (
        <HistoryList key={key} value={value} handleSelected={handleSelected} />
      ))}
    </List>
  );
};

export default History;
