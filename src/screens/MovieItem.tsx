import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FilmRoll} from '../assets/FilmRoll';

type Props = {
  onPress: () => void;
  title: string;
  year: string;
  duration: number;
};

export const MovieItem = ({onPress, title, year, duration}: Props) => {
  return (
    <TouchableOpacity style={styles.movieCard} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <FilmRoll height={70} width={70} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>
          {year} - {duration} mins
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  imageWrapper: {
    flex: 1,
  },
  textWrapper: {
    flex: 3,
    gap: 5,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
