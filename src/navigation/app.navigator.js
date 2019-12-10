import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../screens/home/home.screen';
import { SettingsScreen } from '../screens/settings/settings.screen';

const AppNavigator = createDrawerNavigator(
  {
    home: {
      screen: HomeScreen,
    },
    settings: {
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: 'home',
  },
);

export default AppNavigator;
