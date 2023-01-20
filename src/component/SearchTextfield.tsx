import { KeyboardEvent } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export interface SearchTextfieldProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  onSearch?: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchTextfield = ({
  onChange,
  value,
  onSearch
}: SearchTextfieldProps) => {
  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        data-testid="Search Google Maps"
        id="pac-input"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={onSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

SearchTextfield.defaultProps = {
  onChange: undefined,
  value: '',
  onSearch: undefined
};

export default SearchTextfield;
