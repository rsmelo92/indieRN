import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const URL = 'https://postgres-prisma-nextjs-six.vercel.app/api/movies';

export const Home = () => {
  const {isPending, data} = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await fetch(URL);
      return response.json();
    },
  });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log({data});

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.wrapper}>
          <>
            {isPending ? (
              <Text>Loading...</Text>
            ) : (
              data.map((movie: any) => {
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
