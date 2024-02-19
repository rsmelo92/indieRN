import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './screens/Home';
import {Login} from './screens/Login';

import type {StackScreenProps} from '@react-navigation/stack';
import {MovieDetail} from './screens/MovieDetail';
import {Search} from './screens/Search';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Search: undefined;
  MovieDetail: {CPB: string};
};

export type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;
export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type SearchProps = StackScreenProps<RootStackParamList, 'Search'>;
export type MovieDetailProps = StackScreenProps<
  RootStackParamList,
  'MovieDetail'
>;

const Stack = createStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        title: '',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#191a23',
        },
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        initialParams={{CPB: ''}}
      />
    </Stack.Navigator>
  );
};
