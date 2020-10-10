import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

import Search from './components/Search'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adam's Movie Browser</Text>
            <Search />
            <StatusBar style="dark" />
        </View>
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
