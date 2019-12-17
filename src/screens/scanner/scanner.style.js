import colors from '../../components/shared/colors';
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
  },
  cameraPreviewContainer: {
    height: 100 + '%',
    height: 100 + '%',
    // marginVertical: -20
  },
  cameraContainer: {
    flex: 1,
    marginHorizontal: -20,
    backgroundColor: colors.black,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
    backgroundColor: colors.white,
  },
  barcodeLine: {
    position: 'absolute',
    backgroundColor: colors.googleColor,
    width: 60 + '%',
    height: 1,
    top: 50 + '%',
    left: 20 + '%',
  },
  cameraCover: {
    position: 'absolute',
    backgroundColor: colors.mediumGreen,
    opacity: 0.5,
  },
  coverTop: {
    width: 100 + '%',
    height: 15 + '%',
    top: 0,
  },
  coverBottom: {
    width: 100 + '%',
    height: 15 + '%',
    bottom: 0,
  },
  coverLeft: {
    width: 10 + '%',
    height: 70 + '%',
    top: 15 + '%',
  },
  coverRight: {
    width: 10 + '%',
    height: 70 + '%',
    top: 15 + '%',
    right: 0,
  },
  cameraTitle: {
    fontSize: 28,
    textAlign: 'center',
    paddingVertical: 10,
    color: colors.mediumGreen,
  }
});
