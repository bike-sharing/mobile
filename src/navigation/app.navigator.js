import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../screens/home/home.screen';
import SettingsScreen from '../screens/settings/settings.screen';
import ScannerScreen from '../screens/scanner/scanner.screen';

const AppNavigator = createDrawerNavigator(
  {
    home: {
      screen: HomeScreen,
    },
    settings: {
      screen: SettingsScreen,
    },
    scan: {
      screen: ScannerScreen
    }
  },
  {
    initialRouteName: 'home',
  },
);

export default AppNavigator;
