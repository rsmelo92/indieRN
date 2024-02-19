import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './screens/Home';
import {Login} from './screens/Login';

import type {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

export type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;
export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

const Stack = createStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
