import {useQuery} from '@tanstack/react-query';
import React, {useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Text, View} from 'react-native';

import {SkeletonSearch} from '../components/SkeletonSearch';
import {SearchInput} from '../components/SearchInput';
import {API_URL} from '../constants';
import {debounce} from '../utils';

import type {SearchProps} from '../router';
import type {Movie} from '../../types';

type Props = {} & SearchProps;

export const Search = ({navigation}: Props) => {
  const [query, setQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState(false);
  const {isPending, data, isFetching} = useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      try {
        const url = `${API_URL}/search?query=${query}`;
        const response = await fetch(url);
        return response.json();
      } catch (error) {
        console.error(error);
        return [];
      } finally {
        setIsSearching(false);
      }
    },
    enabled: isSearching,
  });

  const debouncedSearch = debounce((value: string) => {
    if (value === '') {
      return;
    }
    setQuery(value);
    setIsSearching(true);
  }, 500);

  return (
    <View style={styles.wrapper}>
      <SearchInput onSearch={value => debouncedSearch(value)} />
      <>
        {query && (isPending || isFetching) ? (
          <SkeletonSearch />
        ) : (
          data?.map((movie: Movie) => (
            <TouchableWithoutFeedback
              key={movie.CPB}
              onPress={() => {
                navigation.navigate('MovieDetail', {CPB: movie.CPB});
              }}>
              <Text style={styles.result}>
                {movie.TITULO_ORIGINAL} (
                {movie.ANO_PRODUCAO_FINAL || movie.ANO_PRODUCAO_INICIAL})
              </Text>
            </TouchableWithoutFeedback>
          ))
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: '#ccc',
    color: '#fff',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  result: {
    color: '#fff',
    padding: 10,
    marginVertical: 10,
  },
});
