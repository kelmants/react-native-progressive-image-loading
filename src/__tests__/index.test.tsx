import React from 'react';
import { render } from '@testing-library/react-native';
import ProgressiveImage from '../';

test('<ProgressiveImage> Component with default values', async () => {
  const { toJSON } = render(<ProgressiveImage style={{ width: 200, height: 200, marginVertical: 20 }} source={{ uri: 'https://images.pexels.com/photos/6044441/pexels-photo-6044441.jpeg' }} />);
  expect(toJSON()).toMatchSnapshot();
});

test('<ProgressiveImage> Component with thumbnailSource', async () => {
  const { toJSON } = render(
    <ProgressiveImage
      style={{ width: 200, height: 200, marginVertical: 20 }}
      source={{ uri: 'https://images.pexels.com/photos/6044441/pexels-photo-6044441.jpeg' }}
      thumbnailSource={{ uri: 'https://images.pexels.com/photos/6044441/pexels-photo-6044441.jpeg' }}
    />
  );
  expect(toJSON()).toMatchSnapshot();
});
