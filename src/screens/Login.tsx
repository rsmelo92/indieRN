import React from 'react';
import {Text, View, Button} from 'react-native';

import type {LoginProps} from '../router';

type Props = {} & LoginProps;

export const Login = ({navigation}: Props) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};
