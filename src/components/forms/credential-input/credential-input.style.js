import { StyleSheet } from 'react-native';
import colors from '../../shared/colors';

const inputHeight = 50;
export default StyleSheet.create({
  container: {
    flex: 1,
    height: inputHeight,
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: inputHeight,
    overflow: 'hidden',
  },
  iconContainer: {
    height: inputHeight,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: colors.lightGreen,
    width: inputHeight,
  },
  iconContainerHighlighted: {
    backgroundColor: colors.black,
  },
  icon: {
    fontSize: 18,
    color: colors.mediumGreen,
  },
  textInput: {
    fontSize: 18,
    color: colors.darkGreen,
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 10,
    textAlign: 'left',
    backgroundColor: colors.white,
    height: inputHeight,
    lineHeight: inputHeight,
  },
});
