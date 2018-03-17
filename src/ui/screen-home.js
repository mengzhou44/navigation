import React, { Component } from 'react';

import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { BottomNavigator } from './navigators';
import { colors } from './constants';

export default class ScreenHome extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View>
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
                <View style={styles.bottomStyle}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Settings')}
                    >
                        <View>
                            <Text>Settings</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Connection')}
                    >
                        <View>
                            <Text>Connection</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'space-between',
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
    },
    bottomStyle: {
        padding: 20,
        height: 60,
        backgroundColor: colors.orange,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}