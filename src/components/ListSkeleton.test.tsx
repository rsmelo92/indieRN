import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {ListSkeleton} from './ListSkeleton';

test('render properly', () => {
  render(<ListSkeleton />);
  expect(screen.getByTestId('skeleton-list')).toBeTruthy();
});
