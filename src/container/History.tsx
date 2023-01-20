import List from '@mui/material/List';
import { useSelector, useDispatch } from 'react-redux';
import { RootProps } from '../reducers/reducers';
import HistoryList from '../component/HistoryList';

const History = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootProps) => state?.map);
  const searchHistory = data.searchHistory;
  console.log({ searchHistory, dispatch });

  return (
    <List>
      <HistoryList />
    </List>
  );
};

export default History;
