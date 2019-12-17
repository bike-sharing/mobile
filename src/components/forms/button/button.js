import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import styles from './button.style.js';

export default ({ title, style, onPress }) => (
  <TouchableNativeFeedback useForeground={true} onPress={onPress}>
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableNativeFeedback>
);
