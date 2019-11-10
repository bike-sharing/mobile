import { StyleSheet } from 'react-native';
import colors from '../../shared/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		height: 35,
		flexDirection: 'row',
		marginVertical: 5
	},
	iconContainer: {
		height: 35,
		paddingHorizontal: 10,
		justifyContent: 'center',
    backgroundColor: colors.white,
	},
	iconContainerHighlighted: {
		backgroundColor: colors.black
	},
	icon: {
		fontSize: 18,
		color: colors.mediumGreen
	},
	textInput: {
		fontSize: 18,
		color: colors.darkGreen,
		flex: 1,
		paddingVertical: 0,
		paddingHorizontal: 10,
		textAlign: 'left',
		backgroundColor: colors.white,
		height: 35,
		lineHeight: 35
	}
});