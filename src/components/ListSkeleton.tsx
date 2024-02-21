import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonItem = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item width={70} height={70} borderRadius={70} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={220} height={16} />
          <SkeletonPlaceholder.Item marginTop={6} width={100} height={16} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

const getItemsAmount = () => {
  // Each skeleton should fill 12% of the screen height
  const {height} = Dimensions.get('window');
  const itemHeight = height * 0.12;
  const itemsAmount = Math.floor(height / itemHeight);
  return itemsAmount;
};

export const ListSkeleton = () => {
  const itemsAmount = getItemsAmount();
  const items = Array.from({length: itemsAmount}).map((_, i) => i);
  return (
    <View style={styles.view}>
      {items.map(item => (
        <SkeletonItem key={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    gap: 26,
    paddingTop: 18,
  },
});
