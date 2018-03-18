import React, { Component } from 'react';

import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from './_common';
import { colors, globalStyles } from './constants';



export default class ScreenHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{ borderColor: colors.white, borderWidth: 1 }}>

                    <Button
                        onPress={() => this.props.navigation.navigate('Brand')}
                    >
                        Brand
                    </Button>

                    <Button
                        onPress={() => this.props.navigation.navigate('Scan')}
                    >
                        Scan
                    </Button>
                </View>
                <View style={styles.bottomStyle}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Settings')}
                    >
                        <View style={{ width: 100, flex: 1, justifyContent: 'center' }} >
                            <Icon name='cog' style={{ color: 'white', alignSelf: 'center' }} size={22} />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Connection')}
                    >
                        <View style={{ width: 100, flex: 1, justifyContent: 'center' }} >
                            <Icon style={{ color: 'white', alignSelf: 'center' }} name='phone' size={22} />
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
        backgroundColor: colors.white,
        paddingTop: 100,
        alignItems: 'stretch'
    },

    bottomStyle: {
        height: 60,
        backgroundColor: colors.orange,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    bottomTextStyle: {
        fontSize: 20,
        color: colors.white
    }
}