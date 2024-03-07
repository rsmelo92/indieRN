import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './screens/Home';
import {MovieDetail} from './screens/MovieDetail';
import {Search} from './screens/Search';
import {MovieList} from './screens/MovieList';

import type {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  MovieDetail: {CPB: string};
  MovieList: {
    query: string;
    title: string;
  };
};

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type SearchProps = StackScreenProps<RootStackParamList, 'Search'>;
export type MovieDetailProps = StackScreenProps<
  RootStackParamList,
  'MovieDetail'
>;
export type MovieListProps = StackScreenProps<RootStackParamList, 'MovieList'>;

const Stack = createStackNavigator<RootStackParamList>();

export const Router = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: '',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#191a23',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        initialParams={{CPB: ''}}
      />
      <Stack.Screen
        name="MovieList"
        component={MovieList}
        initialParams={{query: '', title: ''}}
      />
    </Stack.Navigator>
  );
};
