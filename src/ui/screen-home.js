import React, { Component } from 'react';

import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
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
                        <View style={styles.buttonStyle}>
                            <Text style={styles.buttonContentStyle}>Scan</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Brand')}
                    >
                        <View style={styles.buttonStyle}>
                            <Text style={styles.buttonContentStyle}>Brand</Text>
                        </View>
                    </TouchableWithoutFeedback>
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
        paddingTop: 100,
        alignItems: 'stretch'
    },

    buttonStyle: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 3,
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.blue,
        borderWidth: StyleSheet.hairlineWidth,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        margin: 10
    },

    buttonContentStyle: {
        textAlign: 'center',
        fontWeight: '600'
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