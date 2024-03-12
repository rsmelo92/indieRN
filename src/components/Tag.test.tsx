import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Tag} from './Tag';

test('render properly', () => {
  const onPress = jest.fn();
  render(<Tag title="Drama" onPress={onPress} />);
  const tag = screen.getByText('Drama');
  expect(tag).toBeTruthy();
  fireEvent.press(tag);
  expect(onPress).toHaveBeenCalledWith();
});
