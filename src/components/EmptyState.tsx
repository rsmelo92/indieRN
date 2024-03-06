import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {EmptyScreen} from '../assets/EmptyScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const EmptyState = ({onPress}: {onPress: () => void}) => {
  return (
    <View style={styles.wrapper}>
      <EmptyScreen height="20%" width="50%" />
      <Text style={styles.title}>Nenhuma obra encontrada</Text>
      <Text style={styles.subtitle}>Por favor tente outra busca</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: Dimensions.get('window').height - 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '30%',
  },
  title: {
    marginTop: 40,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  button: {
    marginTop: 40,
    height: 70,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
