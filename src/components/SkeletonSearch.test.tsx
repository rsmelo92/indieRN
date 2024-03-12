import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {SkeletonSearch} from './SkeletonSearch';

test('render properly', () => {
  render(<SkeletonSearch />);
  expect(screen.getByTestId('skeleton-search')).toBeTruthy();
});
