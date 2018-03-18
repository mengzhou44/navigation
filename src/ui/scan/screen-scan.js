import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { globalStyles } from '../constants';

export default class ScreenScan extends Component {
    render() {
        return (
            <View style={globalStyles.containerStyle}>
                <Text style={styles.titleStyle}>
                    Scan
                      </Text>
            </View>
        );
    }
}

const styles = {

    titleStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
}