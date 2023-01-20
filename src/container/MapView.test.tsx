import React from 'react';
import { render } from '@testing-library/react';
import MapView from './MapView';
import { Provider } from 'react-redux';
import store from '../epics/store';

describe('MapView', () => {
  beforeEach(() => {
    (window as any).google = {
      maps: {
        Map: jest.fn()
      }
    };
  });

  it('should render the map container', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MapView />
      </Provider>
    );

    const mapContainer = getByTestId('mapContainer');
    expect(mapContainer).toBeInTheDocument();
  });
});
