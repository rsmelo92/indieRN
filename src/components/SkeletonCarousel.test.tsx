import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {SkeletonCarousel} from './SkeletonCarousel';

test('render properly', () => {
  render(<SkeletonCarousel />);
  expect(screen.getByTestId('skeleton-carousel')).toBeTruthy();
});
