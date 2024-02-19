import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './screens/Home';
import {Login} from './screens/Login';

import type {StackScreenProps} from '@react-navigation/stack';
import {MovieDetail} from './screens/MovieDetail';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  MovieDetail: {CPB: string};
};

export type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;
export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
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
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        initialParams={{CPB: ''}}
      />
    </Stack.Navigator>
  );
};
