import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {EmptyState} from './EmptyState';

test('render properly', () => {
  const onPress = jest.fn();
  render(<EmptyState onPress={onPress} />);
  expect(screen.getByText('Nenhuma obra encontrada')).toBeTruthy();
  expect(screen.getByText('Por favor tente outra busca')).toBeTruthy();

  const button = screen.getByText('Voltar');
  expect(button).toBeTruthy();
  fireEvent.press(button);
  expect(onPress).toHaveBeenCalledWith();
});
