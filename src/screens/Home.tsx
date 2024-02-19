import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {DEV_API_URL, PROD_API_URL} from '../constants';
console.log(PROD_API_URL);
console.log(DEV_API_URL);

import type {HomeProps} from '../router';
import {Wrapper} from '../components/Wrapper';

type Props = {} & HomeProps;

export const Home = ({navigation}: Props) => {
  const {isPending, data} = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      try {
        const url = `${PROD_API_URL}/movies`;
        const response = await fetch(url);
        return response.json();
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  });

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Wrapper>
          <>
            {isPending ? (
              <Text>Loading...</Text>
            ) : (
              data?.map((movie: any) => {
                return (
                  <View key={movie.id} style={styles.movieCard}>
                    <Text
                      onPress={() => {
                        console.log(movie.CPB);

                        navigation.navigate('MovieDetail', {CPB: movie.CPB});
                      }}>
                      {movie.TITULO_ORIGINAL}
                    </Text>
                  </View>
                );
              })
            )}
          </>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
