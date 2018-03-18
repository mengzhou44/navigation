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

const _headerStyle = {
  headerStyle: {
    backgroundColor: colors.orange
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    color: colors.white,
    fontSize: 18,
  },
  headerBackTitleStyle: {
    color: colors.white
  }
};

export const Root = StackNavigator({
  Home: {
    screen: ScreenHome,
    navigationOptions: ({ navigation }) => ({
      title: 'SmartMat',
      headerBackTitle: 'Back',
      headerStyle: {
        backgroundColor: colors.orange
      },
      headerTitleStyle: {
        color: colors.white,
        fontSize: 20,
      }
    }),
  },
  Scan: {
    screen: ScreenScan,

    navigationOptions: ({ navigation }) => (
      {
        ..._headerStyle,
        title: 'Scan',
      }
    ),
  },
  Brand: {
    screen: ScreenBrand,
    navigationOptions: ({ navigation }) => (
      {
        ..._headerStyle,
        title: 'Brand',
      }
    ),
  },
  Settings: {
    screen: ScreenSettings,
    navigationOptions: ({ navigation }) => (
      {
        ..._headerStyle,
        title: 'Settings',
      }
    )
  },
  Connection: {
    screen: ScreenConnection,
    navigationOptions: ({ navigation }) => (
      {
        ..._headerStyle,
        title: 'Connection',
      }
    )
  }
},
  {
    initialRouteName: 'Home',
    headerMode: 'float',
  }
);





