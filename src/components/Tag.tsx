import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  onPress?: () => void;
  title: string;
};

export const Tag = ({onPress, title}: Props) => {
  return (
    <View>
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
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
