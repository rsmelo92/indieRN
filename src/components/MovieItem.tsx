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
    <TouchableOpacity style={styles.horizontal} onPress={onPress}>
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

export const MovieItemVertical = ({onPress, title, year, duration}: Props) => {
  return (
    <TouchableOpacity style={styles.vertical} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <FilmRoll height={100} width={100} />
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={2} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.text}>
          {year} - {duration} mins
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  vertical: {
    height: 230,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#262835',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    gap: 80,
    justifyContent: 'center',
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
