import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { colors, globalStyles } from '../constants';

import { Header } from '../_common';

export default class ScreenScanStart extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Header title='Start Scan' onBackPressed={() => this.props.navigation.navigate('Scan')} />

                <Text style={styles.titleStyle}>
                    Scan Start
                      </Text>
            </View>
        );
    }
}

const styles = {
    constainerStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.white
    },

    titleStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
}