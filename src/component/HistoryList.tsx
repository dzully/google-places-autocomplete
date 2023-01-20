import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Places } from '../interface/geocoder';

interface HistoryListProps {
  handleSelected?: (param: Places) => void;
  value?: Places;
  currentSelected?: string;
}

const HistoryList = ({
  handleSelected,
  value,
  currentSelected
}: HistoryListProps) => {
  const onHandleSelected = () => {
    if (handleSelected && value) {
      handleSelected(value);
    }
  };

  return (
    <ListItem disablePadding onClick={onHandleSelected}>
      <ListItemButton
        selected={value?.formatted_address === currentSelected}
        style={{ borderRadius: 2 }}
      >
        <ListItemText primary={value?.name} />
      </ListItemButton>
    </ListItem>
  );
};

HistoryList.defaultProps = {
  handleSelected: undefined,
  value: undefined,
  currentSelected: undefined
};

export default HistoryList;
