import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {SearchInput} from './SearchInput';

test('render properly', () => {
  const onSearch = jest.fn();
  const onFocus = jest.fn();
  render(<SearchInput onSearch={onSearch} onFocus={onFocus} autoFocus />);
  const input = screen.getByPlaceholderText('Procure por uma obra nacional');
  expect(input).toBeTruthy();

  fireEvent(input, 'focus');
  expect(onFocus).toHaveBeenCalledWith();

  fireEvent.changeText(input, 'test');
  expect(onSearch).toHaveBeenCalledWith('test');
});
