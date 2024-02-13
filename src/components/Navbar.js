import React, { useContext} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
    const { isDarkTheme, lightTheme, darkTheme} = useContext(ThemeContext);
    const {isLoggedIn, changeAuthStatus } = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const { headerContainer, headerText, headerTagContainer, headerTap } = styles;


    return (
        <View style={[headerContainer, theme]} >
            <Text style={[headerText, theme]} >OakAcademy</Text>
            <TouchableOpacity onPress={changeAuthStatus}>
            <Text style={[headerText, theme]}>{isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
            </TouchableOpacity>
            <View style={headerTagContainer} >
                <Text style={headerTap} >Overview</Text>
                <Text style={headerTap} >Contact</Text>
                <Text style={headerTap} >Support</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#7BD17D',
        height: 230,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10
    },

    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 25
    },

    headerTagContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignSelf: 'flex-end',
        backgroundColor: 'white'
    },

    headerTap: {
        fontSize: 22,
        paddingVertical: 10
    }
});

export default Navbar;