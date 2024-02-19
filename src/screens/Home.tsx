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

export const Home = () => {
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
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.wrapper}>
          <>
            {isPending ? (
              <Text>Loading...</Text>
            ) : (
              data?.map((movie: any) => {
                return <Text key={movie.id}>{movie.TITULO_ORIGINAL}</Text>;
              })
            )}
          </>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
