import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './logo.style.js';

export default ({ size }) => (
  <View style={styles.container}>
    <Icon name="bicycle" style={[styles.icon, styles[size]]} />
    <Text style={[styles.bicycle, styles[size]]}>Bicycle</Text>
    <Text style={[styles.sharing, styles[size]]}>Sharing</Text>
  </View>
);
