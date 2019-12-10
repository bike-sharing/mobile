import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import RootScreen from '../screens/root.screen';
import LoginScreen from '../screens/login/login.screen';
import AppNavigator from '../navigation/app.navigator';

const RootNavigator = createSwitchNavigator(
  {
    root: RootScreen,
    app: AppNavigator,
    auth: LoginScreen
  },
  {
    initialRouteName: 'root',
  },
);

export default createAppContainer(RootNavigator);
