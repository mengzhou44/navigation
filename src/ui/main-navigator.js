import { StackNavigator } from 'react-navigation';

import ScreenBrand from './brand/screen-brand';
import ScreenScan from './scan/screen-scan';
import ScreenHome from './screen-home';

export const MainNavigator = StackNavigator({
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
  }
},
  {
    initialRouteName: 'Home'
  }
);



