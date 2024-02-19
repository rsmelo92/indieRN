import React from 'react';
import {Text, Button} from 'react-native';

import type {LoginProps} from '../router';
import {Wrapper} from '../components/Wrapper';

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
