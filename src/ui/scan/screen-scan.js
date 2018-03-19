import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { globalStyles, colors } from '../constants';

import { Button, Header } from '../_common';


export default class ScreenScan extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Header title='SmartMat' onBackPressed={() => this.props.navigation.navigate('Home')} />

                <Button style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('ScanStart')} >
                    Start
                </Button>
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
