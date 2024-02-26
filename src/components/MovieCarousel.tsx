import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {useQuery} from '@tanstack/react-query';

import {MovieItemVertical} from './MovieItem';
import {API_URL} from '../constants';
import {getDuration} from '../utils';

import type {Movie} from '../../types';

type Props = {
  type: 'curta' | 'media' | 'longa';
  navigation: any;
  title: string;
};

const Separator = () => <View style={styles.separator} />;

export const MovieCarousel = ({title, type, navigation}: Props) => {
  const classifications = {
    curta: 'OBRA COM DURAÇÃO INFERIOR A 15 MINUTOS',
    media: 'OBRA COM DURAÇÃO ENTRE 15 E 30 MINUTOS',
    longa: 'OBRA COM DURAÇÃO SUPERIOR A 30 MINUTOS',
  };
  const query = `{"CLASSIFICACAO_OBRA": "${classifications[type]}"}`;
  const {isPending, data} = useQuery<Movie[]>({
    queryKey: ['movies-carousel'],
    queryFn: async () => {
      try {
        const url = `${API_URL}/movies?query=${query}`;
        const response = await fetch(url);
        return response.json();
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  });

  if (isPending) {
    return null;
  }
  console.log(data);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapper}>
        <FlashList
          data={data}
          horizontal
          estimatedItemSize={280}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.content}
          estimatedListSize={{
            width: Dimensions.get('window').width,
            height: 280,
          }}
          renderItem={({item}) => (
            <View>
              <MovieItemVertical
                title={item.TITULO_ORIGINAL}
                year={item.ANO_PRODUCAO_FINAL ?? item.ANO_PRODUCAO_INICIAL}
                duration={getDuration(item.DURACAO_TOTAL)}
                onPress={() => {
                  navigation.navigate('MovieDetail', {CPB: item.CPB});
                }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 280,
  },
  wrapper: {
    height: 280,
  },
  separator: {
    width: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginTop: 40,
    marginBottom: 26,
    paddingLeft: 20,
  },
});
