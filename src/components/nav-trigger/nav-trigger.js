import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './nav-trigger.style';

const NavTrigger = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text>
      <Icon style={styles.icon} name={'bars'} />
    </Text>
  </TouchableOpacity>
);

export default NavTrigger;
