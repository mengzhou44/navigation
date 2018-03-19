import { View, Text } from 'react-native';

import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';



import { colors, globalStyles } from './constants';
import ScreenBrand from './brand/screen-brand';
import ScreenScan from './scan/screen-scan';
import ScreenScanStart from './scan/screen-scan-start';
import ScreenHome from './screen-home';
import ScreenSettings from './screen-settings';
import ScreenConnection from './screen-connection';

const _headerStyle = {
  headerStyle: {
    backgroundColor: colors.orange
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    color: colors.white
  },
  headerBackTitleStyle: {
    color: colors.white
  }
};

const ScanNav = StackNavigator({
  Scan: {
    screen: ScreenScan,
  },
  ScanStart: {
    screen: ScreenScanStart,
  }
}, {
    initialRouteName: 'Scan',
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  })

export const Root = StackNavigator({
  Home: {
    screen: ScreenHome,
    navigationOptions: ({ navigation }) => ({
      title: 'SmartMat',
      headerBackTitle: null,
      headerLeft: null
    }),
  },
  Scan: {
    screen: ScanNav
  },
  Brand: {
    screen: ScreenBrand,
    navigationOptions: ({ navigation }) => (
      {
        title: 'Brand',
      }
    ),
  },
  Settings: {
    screen: ScreenSettings,
    navigationOptions: ({ navigation }) => (
      {
        title: 'Settings',
      }
    )
  },
  Connection: {
    screen: ScreenConnection,
    navigationOptions: ({ navigation }) => (
      {
        title: 'Connection',
      }
    )
  }
},
  {
    initialRouteName: 'Home',
    headerMode: 'float',
    mode: 'modal',
    navigationOptions: ({ navigation }) => (
      {
        ..._headerStyle,
      })
  }
);





