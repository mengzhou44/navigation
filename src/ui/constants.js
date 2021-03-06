import { Platform } from 'react-native';

export const colors = {
    white: '#fff',
    black: '#000',
    gray: '#e0e0e0',
    deepGray: '#a9a9a9',
    red: '#d03027',
    blue: '#87CEFA',
    green: '#00a98f',
    orange: '#f58426',
    yellow: '#FFFF00',
    lightOrange: '#FFA500',
    whitesmoke: '#f5f5f5'
};


export const globalStyles = {
    defaultFontSize: (Platform.OS === 'ios' ? 17 : 20),
    defaultFontWeight: (Platform.OS === 'ios' ? '700' : '500'),
    greenButton: {
        backgroundColor: colors.green,
        borderColor: colors.green
    },
    grayButton: {
        backgroundColor: colors.deepGray,
        borderColor: colors.deepGray,
    },
    redButton: {
        backgroundColor: colors.red,
        borderColor: colors.red
    },
    tabBar: {
        height: 54,
        paddingTop: 5,
        paddingBottom: 1,
        paddingHorizontal: 28,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.3)',
        backgroundColor: colors.orange
    },
    tabBarLabel: {
        fontSize: 9,
        letterSpacing: 0,
        color: colors.white
    },

    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },


};
