import React, { Component } from 'react';

import { View, Text, TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, globalStyles } from '../constants';

class Header extends Component {
    render() {
        return (<View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => this.props.onBackPressed()}>
                <View style={styles.headerLeft}>
                    <Icon size={35} name='angle-left' style={styles.iconStyle} />
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.titleStyle} > {this.props.title} </Text>
        </View>
        );
    }
}

const styles = {
    header: {
        height: 60,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.orange
    },

    headerLeft: {
        width: 100,
        position: 'absolute',
        left: 0,
        paddingLeft: 10,
        paddingTop: 20
    },

    iconStyle: {
        color: colors.white,
    },

    titleStyle: {
        flex: 0.8,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: colors.white
    }
}
export { Header };

