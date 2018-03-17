import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { MainNavigator } from './main-navigator'


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}


