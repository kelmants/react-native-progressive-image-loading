import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import ProgressiveImage from 'react-native-progressive-image-loading';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Example</Text>
      <ProgressiveImage
        style={styles.box}
        source={{ uri: 'https://images.pexels.com/photos/6044441/pexels-photo-6044441.jpeg' }}
        thumbnailSource={{ uri: 'https://images.pexels.com/photos/6044441/pexels-photo-6044441.jpeg' }}
      />
      <ProgressiveImage style={styles.box} source={{ uri: 'https://images.pexels.com/photos/6044441/pexels-photo-6044441.jpeg' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    marginVertical: 20,
  },
  box: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
