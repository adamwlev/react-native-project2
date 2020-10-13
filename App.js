import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './screens/Main'
import MovieDetails from './screens/MovieDetails'

const Stack = createStackNavigator()

const screenBaseOptions = {
    headerStyle: {
        backgroundColor: '#d1edd7',
    },
    headerTitleStyle: {
        fontFamily: 'Courier',
    },
    headerTintColor: '#a1501a',
}

const movieDetailsScreenOptions = ({ route }) => (
    {
        ...screenBaseOptions,
        title: "",
    }
)

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen 
                    name="Adam's Movie Browser" 
                    component={Main}
                    options={screenBaseOptions}
                />
                <Stack.Screen 
                    name="MovieDetails"
                    component={MovieDetails}
                    options={movieDetailsScreenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
