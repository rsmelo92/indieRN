import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Wrapper} from '../components/Wrapper';
import {Tag} from '../components/Tag';

import type {HomeProps} from '../router';
import {SearchInput} from '../components/SearchInput';

type Props = {} & HomeProps;

const tags = [
  'Documentário',
  'Ficção',
  'Animação',
  'Variedades',
  'Religiosa',
  'Jornalistíca',
  'Vídeo Musical',
];

export const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Wrapper style={styles.wrapper}>
          <View style={styles.inputWrapper}>
            <Text style={styles.title}>Cinema Absoluto</Text>
            <SearchInput
              autoFocus={false}
              onFocus={() => {
                navigation.navigate('Search');
              }}
            />
          </View>
          <View>
            <Text style={styles.secondTitle}>Por categoria</Text>
            <View style={styles.tagsWrapper}>
              {tags.map(item => (
                <Tag
                  key={item}
                  title={item}
                  onPress={() => {
                    console.log(`{TIPO_OBRA:${item.toUpperCase()}}`);

                    navigation.navigate('MovieList', {
                      query: `{"TIPO_OBRA": "${item.toUpperCase()}"}`,
                    });
                  }}
                />
              ))}
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  movieCard: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    marginBottom: 10,
  },
  inputWrapper: {
    width: '100%',
    paddingVertical: 20,
  },
  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: '#ccc',
    color: '#fff',
    fontSize: 16,
  },
  secondTitle: {
    color: '#fff',
    fontSize: 24,
    marginTop: 40,
    marginBottom: 26,
  },
  tagsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
});
