import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const HistoryList = () => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary="Inbox" />
      </ListItemButton>
    </ListItem>
  );
};

export default HistoryList;
