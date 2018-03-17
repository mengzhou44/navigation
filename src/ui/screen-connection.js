import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class ScreenConnection extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.titleStyle}>
                    Connection
                      </Text>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
}