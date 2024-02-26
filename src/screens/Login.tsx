import React from 'react';
import {Text, Button} from 'react-native';

import {Wrapper} from '../components/Wrapper';

import type {LoginProps} from '../router';

type Props = {} & LoginProps;

export const Login = ({navigation}: Props) => {
  return (
    <Wrapper>
      <Text>Login</Text>
      <Button
        title="Go Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </Wrapper>
  );
};
