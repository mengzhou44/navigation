import React, { Component } from 'react';

import { View, Text, TouchableWithoutFeedback } from 'react-native';

export default class ScreenHome extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <TouchableWithoutFeedback
                    onPress={() => this.props.navigation.navigate('Scan')}
                >
                    <View style={styles.itemStyle}>
                        <Text style={styles.itemContentStyle}>Scan</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={() => this.props.navigation.navigate('Brand')}
                >
                    <View style={styles.itemStyle}>
                        <Text style={styles.itemContentStyle}>Brand</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 100,
        alignItems: 'stretch'
    },

    itemStyle: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },

    itemContentStyle: {
        textAlign: 'center'
    }
}