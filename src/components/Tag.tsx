import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  onPress?: (e: GestureResponderEvent) => void;
  title: string;
};

export const Tag = ({onPress, title}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text} onPress={onPress}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#8d8e98',
    height: 36,
    minWidth: 80,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
