import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchTextfield from './SearchTextfield';

describe('SearchTextfield component', () => {
  let onChange: jest.Mock;
  let onSearch: jest.Mock;
  let value: string;

  beforeEach(() => {
    onChange = jest.fn();
    onSearch = jest.fn();
    value = '';
  });

  it('should render the component', () => {
    const { getByLabelText } = render(
      <SearchTextfield value={value} onChange={onChange} onSearch={onSearch} />
    );
    expect(getByLabelText('search google maps')).toBeInTheDocument();
  });

  it('should call onChange when user types in the input field', () => {
    const { getByLabelText } = render(
      <SearchTextfield value={value} onChange={onChange} onSearch={onSearch} />
    );
    const input = getByLabelText('search google maps') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('should call onSearch when user clicks the search button', () => {
    const { getByRole } = render(
      <SearchTextfield value={value} onChange={onChange} onSearch={onSearch} />
    );
    const searchButton = getByRole('button');
    fireEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalled();
  });

  it('should prevent default when user press enter key', () => {
    const { getByLabelText } = render(
      <SearchTextfield value={value} onChange={onChange} onSearch={onSearch} />
    );
    const input = getByLabelText('search google maps') as HTMLInputElement;
    fireEvent.keyPress(input, { key: 'Enter', code: 13 });
    expect(onSearch).not.toHaveBeenCalled();
  });
});
