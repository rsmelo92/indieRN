import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

type Props = {
  onSearch?: (value: string) => void;
  onFocus?: () => void;
};

export const SearchInput = ({onSearch, onFocus}: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Procure por uma obra nacional"
      placeholderTextColor="#ccc"
      autoFocus
      onChangeText={value => {
        if (onSearch) {
          onSearch(value);
        }
      }}
      onFocus={() => {
        if (onFocus) {
          onFocus();
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: '#ccc',
    color: '#fff',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
});
