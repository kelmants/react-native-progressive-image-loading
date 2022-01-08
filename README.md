# react-native-progressive-image-loading

Image component with the progressive image when it is loading

## Installation

```sh
npm install react-native-progressive-image-loading
```

## Usage

```js
import ProgressiveImage from "react-native-progressive-image-loading";

      <ProgressiveImage
        style={styles.box}
        source={{ uri: 'https://images.pexels.com/photos/6044441/pexels-photo-6044441.jpeg' }}
        thumbnailSource={{ uri: 'https://images.pexels.com/photos/6044441/pexels-photo-6044441.jpeg' }}
      />
      <ProgressiveImage style={styles.box} source={{ uri: 'https://images.pexels.com/photos/6044441/pexels-photo-6044441.jpeg' }} />
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
