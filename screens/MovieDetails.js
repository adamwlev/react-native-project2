import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import Movie from '../components/Movie'

export default function MovieDetails({ route }) {
    return (
        <View style={styles.container}>
            <Movie id={route.params.id}/>
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
