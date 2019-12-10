import {StyleSheet} from 'react-native';
import colors from '../../components/shared/colors';


export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
  },
  map: {
    width: 100 + '%',
    height: 100 + '%'
  },
  marker: {
    width: 50,
    height: 50
  },
  markerTitle: {
    backgroundColor: colors.purple,
    color: colors.white,
    fontSize: 18
  }
});
