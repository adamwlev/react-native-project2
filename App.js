import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './screens/Main'
import MovieDetails from './screens/MovieDetails'

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="MovieDetails" component={MovieDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
