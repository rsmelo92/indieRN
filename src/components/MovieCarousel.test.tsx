import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {MovieCarousel} from './MovieCarousel';
import * as ReactQuery from '@tanstack/react-query';

import {wrapper} from '../../jest/wrappers';
import {shortMovies} from '../../jest/mock';

type Mock = {
  data: object;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
};

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}));

const mockReactQuery = (mock: Mock) =>
  jest
    .spyOn(ReactQuery, 'useQuery')
    .mockImplementation(jest.fn().mockReturnValue(mock));

test('render without data', () => {
  mockReactQuery({
    data: [],
    isPending: true,
    isSuccess: false,
    isError: false,
  });

  render(
    <MovieCarousel
      title="Movie Carousel"
      navigation={{navigate: jest.fn()}}
      type="curta"
    />,
    {wrapper},
  );
  expect(screen.getByText('Movie Carousel')).toBeTruthy();
  expect(screen.getByTestId('skeleton-carousel')).toBeTruthy();
});

test('render with data', () => {
  const navigation = {navigate: jest.fn()};
  mockReactQuery({
    data: shortMovies,
    isPending: false,
    isSuccess: false,
    isError: false,
  });

  render(
    <MovieCarousel
      title="Movie Carousel"
      navigation={navigation}
      type="curta"
    />,
  );
  expect(screen.getByText('Movie Carousel')).toBeTruthy();
  expect(screen.getByText('A BATALHA DA RUA MARIA ANTÔNIA')).toBeTruthy();
  expect(screen.getAllByTestId('movie-item-vertical').length).toBe(4);

  const firstMovie = screen.getByText('A BATALHA DA RUA MARIA ANTÔNIA');
  fireEvent.press(firstMovie);
  expect(navigation.navigate).toHaveBeenCalledWith('MovieDetail', {
    CPB: shortMovies[0].CPB,
  });
});
