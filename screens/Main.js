import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Search from '../components/Search'

export default function Main({ navigation }) { 
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Search navigation={navigation}/>
                <StatusBar style="dark" />
        </View>
        </TouchableWithoutFeedback>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1edd7',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        marginTop: 40,
        fontFamily: 'Courier',
    }
})
