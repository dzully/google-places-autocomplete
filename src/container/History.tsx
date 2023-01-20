import List from '@mui/material/List';
import { useSelector, useDispatch } from 'react-redux';
import { RootProps } from '../reducers/reducers';
import HistoryList from '../component/HistoryList';
import { Places } from '../interface/geocoder';
import { updateSearchQuery } from '../actions/geocoder';
import { useSearchParams } from 'react-router-dom';
import withMap from '../utils/withMap';
import { handleSelectAutocomplete } from '../actions/map';

const History = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const data = useSelector((state: RootProps) => state?.map);
  const searchHistory = data.searchHistory;
  const marker = data.markerProperties as any;
  const map = data.map as any;

  const handleSelected = (place: Places) => {
    marker.setVisible(false);
    if (!place.geometry?.location) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    handleSelectAutocomplete({ place, map, markerProperties: marker });
    setSearchParams({ place: place.formatted_address });
    dispatch(updateSearchQuery(place.name));
  };

  return (
    <List>
      {searchHistory?.map((value, key) => (
        <HistoryList
          key={key}
          value={value}
          handleSelected={handleSelected}
          currentSelected={searchParams.get('place') || ''}
        />
      ))}
    </List>
  );
};

export default withMap(History);
