import {StyleSheet} from 'react-native';

import colors from '../shared/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: colors.purple,
    fontSize: 28
  }

})