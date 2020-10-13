import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Image } from 'react-native-elements'

import { getMovieById } from '../api'

export default class SearchResult extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { isLoaded: false }
        this.loadMovie(props.id)
    }

    loadMovie = async (id) => {
        const { setOptions } = this.props.navigation
        const result = await getMovieById(id)
        if (result.id) {
            result.isLoaded = true
        }
        setOptions({ title: result.title })
        this.setState(result)
    }

    renderMovie = () => {
        const { poster } = this.state

        return (
            <>
                <Image
                    source={{ uri: poster }}
                    style={styles.image}
                />
            </>
        )
    }
    
    render() {
        const { state: { isLoaded }, renderMovie } = this

        return (
            <View style={styles.container}>
                {isLoaded && renderMovie()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1edd7',
        alignItems: 'center',
    },
    image: {
        width: 200, 
        height: 300,
        marginTop: 50,
    }
})