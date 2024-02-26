import React from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Tag} from '../components/Tag';
import {SearchInput} from '../components/SearchInput';
import {MovieCarousel} from '../components/MovieCarousel';
import {NAVIGATION_HEADER_HEIGHT} from '../constants';

import type {HomeProps} from '../router';

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
    <>
      <View style={styles.wrapper}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          contentInsetAdjustmentBehavior="automatic">
          <View style={styles.inputWrapper}>
            <Text style={styles.title}>Cinema Absoluto</Text>
            <SearchInput
              autoFocus={false}
              onFocus={() => {
                navigation.navigate('Search');
              }}
            />
          </View>
          <View style={styles.categories}>
            <Text style={styles.secondTitle}>Por categoria</Text>
            <View style={styles.tagsWrapper}>
              {tags.map(item => (
                <Tag
                  key={item}
                  title={item}
                  onPress={() => {
                    navigation.navigate('MovieList', {
                      query: `{"TIPO_OBRA": "${item.toUpperCase()}"}`,
                      title: item,
                    });
                  }}
                />
              ))}
            </View>
          </View>
          <View style={styles.carousel}>
            <MovieCarousel
              title="Curtas"
              navigation={navigation}
              type="curta"
            />
          </View>
          <View style={styles.carousel}>
            <MovieCarousel
              title="Longas"
              navigation={navigation}
              type="longa"
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height:
      Dimensions.get('window').height -
      (StatusBar.currentHeight || 0) -
      NAVIGATION_HEADER_HEIGHT,
  },
  scrollViewContent: {
    paddingBottom: 120,
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
    padding: 20,
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
  categories: {
    flex: 1,
    paddingHorizontal: 20,
  },
  secondTitle: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 26,
  },
  tagsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  carousel: {
    marginBottom: 40,
  },
});
