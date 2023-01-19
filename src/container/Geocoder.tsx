import { useState } from 'react';
import SearchTextfield from '../component/SearchTextfield';

const Geocoder = () => {
  const [query, setQuery] = useState();
  console.log(query, setQuery);

  return (
    <div>
      <SearchTextfield />
    </div>
  );
};

export default Geocoder;
