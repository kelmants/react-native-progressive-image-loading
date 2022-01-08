import React, { useRef, memo } from 'react';
import { View, StyleSheet, Animated, ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';
interface ProgressiveImageStyle {
  imageOverlay: ImageStyle;
  container: ViewStyle;
}

const styles = StyleSheet.create<ProgressiveImageStyle>({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});

export interface ProgressiveImageProps {
  source: ImageSourcePropType;
  thumbnailSource?: ImageSourcePropType;
  style?: ImageStyle;
}

function ProgressiveImage({ thumbnailSource, source, style, ...props }: ProgressiveImageProps) {
  const thumbnailAnimated = useRef(new Animated.Value(0)).current;

  const imageAnimated = useRef(new Animated.Value(0)).current;

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  const handleImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {source && <Animated.Image {...props} source={thumbnailSource || { uri: '' }} style={StyleSheet.flatten([style, { opacity: thumbnailAnimated }])} onLoad={handleThumbnailLoad} blurRadius={1} />}
      <Animated.Image {...props} source={source} style={StyleSheet.flatten([styles.imageOverlay, { opacity: imageAnimated }, style])} onLoad={handleImageLoad} />
    </View>
  );
}

export default memo(ProgressiveImage);
