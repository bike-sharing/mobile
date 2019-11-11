import { StyleSheet } from 'react-native';
import colors from '../../shared/colors';

const buttonHeight = 50;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: buttonHeight,
    borderRadius: buttonHeight,
    backgroundColor: colors.white,
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
