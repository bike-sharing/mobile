import { StyleSheet } from 'react-native';
import colors from '../shared/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colors.lightGreen,
    marginRight: 5,
  },
  bicycle: {
    color: colors.lightGreen,
  },
  sharing: {
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  large: {
    fontSize: 42,
  },
  medium: {
    fontSize: 32,
  },
  small: {
    fontSize: 18,
  },
});
