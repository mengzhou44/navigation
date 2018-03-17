import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { Root } from './navigators'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Root />
      </View>
    );
  }
}


