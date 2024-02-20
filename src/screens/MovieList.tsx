import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {API_URL} from '../constants';

import type {MovieListProps} from '../router';
import {useInfiniteQuery} from '@tanstack/react-query';

import {FlashList} from '@shopify/flash-list';
import {Movie} from '../../types';
import {
  PanGestureHandler,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

type Props = {} & MovieListProps;

export const MovieList = ({route, navigation}: Props) => {
  const {query} = route.params;
  const listRef = useRef(null);
  const {isPending, fetchNextPage, isFetching, data} = useInfiniteQuery({
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
    <>
      {isPending ? (
        <Text>Loading...</Text>
      ) : (
        <PanGestureHandler waitFor={listRef}>
          <View ref={listRef} style={styles.view}>
            <FlashList
              data={data?.pages.flat()}
              renderItem={({item}: {item: Movie}) => (
                <TouchableOpacity
                  style={styles.movieCard}
                  onPress={() => {
                    console.log(item.CPB);
                    navigation.navigate('MovieDetail', {CPB: item.CPB});
                  }}>
                  <Text style={styles.text}>{item.TITULO_ORIGINAL}</Text>
                </TouchableOpacity>
              )}
              refreshing={isFetching}
              estimatedItemSize={200}
              onEndReachedThreshold={0.8}
              onEndReached={() => {
                console.log('end reached');

                fetchNextPage();
              }}
            />
          </View>
        </PanGestureHandler>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    // flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  text: {
    color: 'white',
  },
});
