import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './social-button.style.js';

export default ({ media, style }) => (
  <TouchableNativeFeedback useForeground={true}>
    <View style={[styles.container, style]}>
      <View style={[styles.iconContainer, media === 'facebook' ? styles.fbIconContainer : styles.googleIconContainer]}>
        <Icon
          name={media === 'facebook' ? 'facebook-f' : 'google'}
          style={[styles.icon, media === 'facebook' ? styles.fbIcon : styles.googleIcon]}
          brand
        />
      </View>
      <View style={styles.captionContainer}>
        <Text style={[styles.caption, media === 'facebook' ? styles.fbCaption : styles.googleCaption]}>{media}</Text>
      </View>
    </View>
  </TouchableNativeFeedback>
);
