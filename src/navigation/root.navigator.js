import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import RootScreen from '../screens/root.screen';
import HomeScreen from '../screens/home.screen';
import LoginScreen from '../screens/login/login.screen';

const RootNavigator = createSwitchNavigator(
  {
    root: RootScreen,
    app: HomeScreen,
    auth: LoginScreen
  },
  {
    initialRouteName: 'root',
  },
);

export default createAppContainer(RootNavigator);
