import { StyleSheet } from 'react-native';
import colors from '../../components/shared/colors';

export default StyleSheet.create({
  container: {
    width: 100 + '%',
    height: 100 + '%',
    backgroundColor: colors.lightGrey,
  },
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  logoContainer: {
    paddingVertical: 20,
  },
  descriptionContainer: {
    paddingBottom: 100,
    alignItems: 'center',
  },
  separator: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 5,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
    width: 100 + '%',
    justifyContent: 'center',
  },
});
