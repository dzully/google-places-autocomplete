import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should render the GoogleMap, MapView, Geocoder, and History components', () => {
    const { getByTestId } = render(<Home />);
    const home = getByTestId('Home');
    expect(home).toContainElement(getByTestId('GoogleMap'));
  });
});
