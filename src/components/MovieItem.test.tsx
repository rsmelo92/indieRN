import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {MovieItem} from './MovieItem';

test('render properly', () => {
  const onPress = jest.fn();
  render(
    <MovieItem title="ESCUMALHA" year="2024" duration={89} onPress={onPress} />,
  );
  expect(screen.getByTestId('film-roll-svg')).toBeTruthy();
  expect(screen.getByText('ESCUMALHA')).toBeTruthy();
  expect(screen.getByText('2024 - 89 mins')).toBeTruthy();

  const pressable = screen.getByText('ESCUMALHA');
  fireEvent.press(pressable);
  expect(onPress).toHaveBeenCalledWith();
});
