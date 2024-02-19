import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollView,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {PROD_API_URL} from '../constants';
import {Wrapper} from '../components/Wrapper';
import {capitalizeFirstLetter, getDuration} from '../utils';

import type {MovieDetailProps} from '../router';
import type {Movie} from '../../types';

export const MovieDetail = ({route}: MovieDetailProps) => {
  const {CPB} = route.params;
  console.log({CPB});
  const {isPending, data} = useQuery<Movie>({
    queryKey: ['singleMovie', CPB],
    queryFn: async () => {
      try {
        const url = `${PROD_API_URL}/singleMovie?CPB=${CPB}`;
        const response = await fetch(url);
        return response.json();
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  });

  if (isPending || data === undefined) {
    return (
      <Wrapper>
        <Text>Loading..</Text>
      </Wrapper>
    );
  }

  const type = capitalizeFirstLetter(data.TIPO_OBRA);
  const subtype = data.SUBTIPO_OBRA
    ? `, ${capitalizeFirstLetter(data.SUBTIPO_OBRA)}`
    : '';

  console.log({data});

  return (
    <Wrapper>
      <Image
        style={styles.cover}
        source={require('../assets/placeholder.jpeg')}
      />
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.title}>
              {capitalizeFirstLetter(data.TITULO_ORIGINAL)}
            </Text>
            <Text style={styles.subtitle}>
              {data.ANO_PRODUCAO_FINAL ?? data.ANO_PRODUCAO_INICIAL} -{' '}
              {getDuration(data.DURACAO_TOTAL)} mins
            </Text>
            <Text style={styles.tags}>
              {capitalizeFirstLetter(data.CLASSIFICACAO_OBRA)} -{' '}
              {`${type}${subtype}`} -{' '}
              {capitalizeFirstLetter(data.SEGMENTO_DESTINACAO_INICIAL)}
            </Text>
            <Text>
              {capitalizeFirstLetter(data.MUNICIPIO_REQUERENTE)} -{' '}
              {data.UF_REQUERENTE}
            </Text>
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width,
    alignSelf: 'flex-start',
    flex: 1,
  },
  content: {
    flex: 2,
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  tags: {
    fontSize: 14,
    lineHeight: 22,
    color: '#fff',
    marginBottom: 10,
  },
});
