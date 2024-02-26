import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonItem = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      backgroundColor="#262835"
      highlightColor="#393b4a"
      speed={900}>
      <SkeletonPlaceholder.Item >
        <SkeletonPlaceholder.Item width={200} height={230} borderRadius={8} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export const CarouselSkeleton = () => {
  return (
    <View style={styles.view}>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    gap: 20,
    paddingLeft: 20,
    flexDirection: 'row',
  },
});
