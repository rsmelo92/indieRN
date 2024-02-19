import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollView,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {PROD_API_URL} from '../constants';
import {Wrapper} from '../components/Wrapper';

import type {MovieDetailProps} from '../router';
import type {Movie} from '../../types';

export const MovieDetail = ({route}: MovieDetailProps) => {
  const {CPB} = route.params;
  console.log({CPB});
  const {isPending, data} = useQuery<Movie>({
    queryKey: ['singleMovie', CPB],
    queryFn: async () => {
      try {
        const url = `${PROD_API_URL}/singleMovie?CPB=${CPB}`;
        const response = await fetch(url);
        return response.json();
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  });

  if (isPending) {
    return (
      <Wrapper>
        <Text>Loading..</Text>
      </Wrapper>
    );
  }

  console.log({data});

  return (
    <Wrapper>
      <Image
        style={styles.cover}
        source={require('../assets/placeholder.jpeg')}
      />
      <View style={styles.content}>
        <ScrollView style={styles.content}>
          <View>
            <Text>{data?.TITULO_ORIGINAL}</Text>
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width,
    alignSelf: 'flex-start',
    flex: 1,
  },
  content: {
    flex: 2,
    height: Dimensions.get('window').height * 0.7,
    width: '100%',
  },
});
