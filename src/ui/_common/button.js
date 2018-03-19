import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors, globalStyles } from '../constants';

const Button = ({ onPress, children, buttonStyle, textStyle }) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, buttonStyle]}>
            <Text style={[styles.textStyle, textStyle]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: globalStyles.defaultFontSize
    },
    buttonStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',

        borderColor: colors.whitesmoke,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        backgroundColor: colors.blue,
        shadowColor: colors.blue,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        margin: 10
    }
};

export { Button };


