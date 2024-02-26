import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';
import {FlashList} from '@shopify/flash-list';
import {MovieItem} from '../components/MovieItem';
import {ListSkeleton} from '../components/ListSkeleton';

import {API_URL} from '../constants';
import {getDuration} from '../utils';

import type {Movie} from '../../types';
import type {MovieListProps} from '../router';

type Props = {} & MovieListProps;

export const MovieList = ({route, navigation}: Props) => {
  const {query, title} = route.params;
  const {isPending, fetchNextPage, data} = useInfiniteQuery({
    queryKey: ['movieList', query],
    queryFn: async ({pageParam}) => {
      const cursor =
        typeof pageParam === 'string' ? `&cursor=${pageParam}` : '';
      try {
        const url = `${API_URL}/movies?query=${query}${cursor}`;
        const response = await fetch(url);
        return response.json();
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    initialPageParam: 10,
    getPreviousPageParam: firstPage => firstPage.previousId ?? undefined,
    getNextPageParam: lastPage => {
      const cursor = lastPage[lastPage.length - 1];
      return cursor.id;
    },
  });
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      {isPending ? (
        <ListSkeleton />
      ) : (
        <View style={styles.view}>
          <FlashList
            data={data?.pages.flat()}
            renderItem={({item}: {item: Movie}) => (
              <MovieItem
                title={item.TITULO_ORIGINAL}
                year={item.ANO_PRODUCAO_FINAL ?? item.ANO_PRODUCAO_INICIAL}
                duration={getDuration(item.DURACAO_TOTAL)}
                onPress={() => {
                  navigation.navigate('MovieDetail', {CPB: item.CPB});
                }}
              />
            )}
            keyExtractor={item => item.CPB}
            estimatedItemSize={200}
            onEndReachedThreshold={0.8}
            onEndReached={fetchNextPage}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  movieCard: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    height: '100%',
    width: Dimensions.get('window').width,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  text: {
    color: 'white',
  },
});
