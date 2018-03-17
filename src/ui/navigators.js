import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

import { colors, globalStyles } from './constants';
import ScreenBrand from './brand/screen-brand';
import ScreenScan from './scan/screen-scan';
import ScreenHome from './screen-home';
import ScreenSettings from './screen-settings';
import ScreenConnection from './screen-connection';

export const Root = StackNavigator({
  Home: {
    screen: ScreenHome,
    navigationOptions: ({ navigation }) => ({
      title: `Home`
    }),
  },
  Scan: {
    screen: ScreenScan,
    navigationOptions: ({ navigation }) => ({
      title: `Scan`
    }),
  },
  Brand: {
    screen: ScreenBrand,
    navigationOptions: ({ navigation }) => ({
      title: `Brand`
    }),
  },
  Settings: {
    screen: ScreenSettings,
    navigationOptions: ({ navigation }) => ({
      title: `Settings`
    }),
  },
  Connection: {
    screen: ScreenConnection,
    navigationOptions: ({ navigation }) => ({
      title: `Connection`
    }),
  }
},
  {
    initialRouteName: 'Home'
  }
);





