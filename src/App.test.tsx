import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('App component', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app')).toBeInTheDocument();
  });
});
