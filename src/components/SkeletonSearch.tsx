import {StyleSheet, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonItem = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      backgroundColor="#262835"
      highlightColor="#393b4a"
      speed={900}>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="flex-start">
        <SkeletonPlaceholder.Item marginLeft={8} gap={28}>
          <SkeletonPlaceholder.Item height={32} gap={8}>
            <SkeletonPlaceholder.Item width="90%" height={16} />
            <SkeletonPlaceholder.Item width="80%" height={16} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item height={32} gap={8}>
            <SkeletonPlaceholder.Item width="90%" height={16} />
            <SkeletonPlaceholder.Item width="80%" height={16} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item height={32} gap={8}>
            <SkeletonPlaceholder.Item width="90%" height={16} />
            <SkeletonPlaceholder.Item width="80%" height={16} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export const SkeletonSearch = () => {
  return (
    <View testID="skeleton-search" style={styles.wrapper}>
      <SkeletonItem />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 20,
  },
});
