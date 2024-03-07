import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {CarouselSkeleton} from './CarouselSkeleton';

test('render properly', () => {
  render(<CarouselSkeleton />);
  expect(screen.getByTestId('skeleton-carousel')).toBeTruthy();
});
