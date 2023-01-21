import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import withMap from '../utils/withMap';
import MapView from '../container/MapView';

const store = createStore(rootReducer);
const MapWrapper = withMap(MapView);

test('should not render MapView without map context', () => {
  const { container } = render(
    <Provider store={store}>
      <MapWrapper />
    </Provider>
  );
  expect(container.firstChild).toBeNull();
});
