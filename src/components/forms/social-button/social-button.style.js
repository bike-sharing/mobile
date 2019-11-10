import { StyleSheet } from 'react-native';
import colors from '../../shared/colors';

const buttonHeight = 50;
export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: buttonHeight,
    borderRadius: buttonHeight,
    backgroundColor: colors.white,
    overflow: 'hidden',
    flex: 1,
  },
  iconContainer: {
    width: buttonHeight,
    height: buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  fbIconContainer: {
    borderRightColor: colors.facebookColor,
  },
  googleIconContainer: {
    borderRightColor: colors.googleColor,
  },
  icon: {
    fontSize: 28,
  },
  fbIcon: {
    color: colors.facebookColor,
  },
  googleIcon: {
    color: colors.googleColor,
  },
  captionContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  caption: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  fbCaption: {
    color: colors.facebookColor,
  },
  googleCaption: {
    color: colors.googleColor,
  },
});
