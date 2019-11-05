import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import RootScreen from '../screens/root.screen';
import HomeScreen from '../screens/home.screen';

const RootNavigator = createSwitchNavigator(
  {
    root: RootScreen,
    app: HomeScreen,
  },
  {
    initialRouteName: 'root',
  },
);

export default createAppContainer(RootNavigator);
