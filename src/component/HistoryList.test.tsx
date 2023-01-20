import { render, fireEvent } from '@testing-library/react';
import HistoryList from './HistoryList';

test('it should call handleSelected function when list item is clicked', () => {
  const handleSelected = jest.fn();
  const value: any = { name: 'Test Place' };
  const { getByText } = render(
    <HistoryList handleSelected={handleSelected} value={value} />
  );

  fireEvent.click(getByText(value.name));
  expect(handleSelected).toHaveBeenCalledWith(value);
});
