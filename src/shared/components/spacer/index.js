
import React from 'react';
import { View } from 'react-native';

const Spacer = ({ width, height }) => (
  <View style={{
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  }}
  />
);

export default Spacer;