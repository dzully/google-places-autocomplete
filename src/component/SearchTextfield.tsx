import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface SearchTextfieldProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  onSearch?: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchTextfield = ({
  onChange,
  value,
  onSearch
}: SearchTextfieldProps) => {
  return (
    <div style={{ padding: 10 }}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={onChange}
          value={value}
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
    </div>
  );
};

SearchTextfield.defaultProps = {
  onChange: undefined,
  value: '',
  onSearch: undefined
};

export default SearchTextfield;
