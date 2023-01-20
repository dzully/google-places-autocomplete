import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Places } from '../interface/geocoder';

interface HistoryListProps {
  handleSelected?: (param: Places) => void;
  value?: Places;
}

const HistoryList = ({ handleSelected, value }: HistoryListProps) => {
  const onHandleSelected = () => {
    if (handleSelected && value) {
      handleSelected(value);
    }
  };

  return (
    <ListItem disablePadding onClick={onHandleSelected}>
      <ListItemButton>
        <ListItemText primary={value?.name} />
      </ListItemButton>
    </ListItem>
  );
};

HistoryList.defaultProps = {
  handleSelected: undefined,
  value: undefined
};

export default HistoryList;
