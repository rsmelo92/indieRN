import React from 'react';
import {StyleSheet, View} from 'react-native';

import type {StyleProp, ViewStyle} from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Wrapper = ({children, style}: Props) => {
  return <View style={[style, styles.wrapper]}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
