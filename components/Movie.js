import React from 'react'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { Image, Text } from 'react-native-elements'

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

    renderRating = (rating, index) => (
        <Text key={"key"+index} style={[styles.allText, styles.ratings]}>
            {`${rating.Source}: ${rating.Value}`}
        </Text>
    )
    
    renderMovie = () => {
        const { state: { title, year, type, rated, 
                runtime, plot, poster, ratings }, renderRating } = this

        return (
            <>
                <Image
                    source={{ uri: poster }}
                    style={styles.image}
                />
                <Text style={[styles.allText, styles.title]}>
                    {title}
                </Text>
                <Text style={[styles.allText, styles.subTitle]}>
                    {`${year} ${type}, rated: ${rated}, runtime: ${runtime}`}
                </Text>
                <Text style={[styles.allText, styles.plot]}>
                    {plot}
                </Text>
                {ratings.map(renderRating)}
            </>
        )
    }
    
    render() {
        const { state: { isLoaded }, renderMovie } = this

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {isLoaded && renderMovie()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1edd7',
    },
    scrollView: {
        alignItems: 'center',
    },
    image: {
        width: 200, 
        height: 300,
    },
    allText: {
        fontFamily: 'Courier',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 8,
        marginHorizontal: 20,
    },
    subTitle: {
        fontSize: 20,
        marginHorizontal: 8,
        marginVertical: 12,
    },
    plot: {
        fontSize: 16,
        marginTop: 12,
        marginBottom: 20,
        marginHorizontal: 15,
    },
    ratings: {
        fontSize: 16,
    },
})