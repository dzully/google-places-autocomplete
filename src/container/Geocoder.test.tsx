import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Geocoder from './Geocoder';
import store from '../epics/store';

describe('Geocoder component', () => {
  it('should render the SearchTextfield component', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Geocoder />
      </Provider>
    );
    const input = getByPlaceholderText('Search Google Maps');
    expect(input).toBeInTheDocument();
  });

  it('should update the query state when input is changed', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Geocoder />
      </Provider>
    );
    const input = getByPlaceholderText('Search Google Maps');
    fireEvent.change(input, { target: { value: 'New York' } });
    expect((input as any).value).toBe('New York');
  });
});
