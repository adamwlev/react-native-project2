import React from 'react'
import { StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { Input } from 'react-native-elements'

import { searchByString } from '../api'
import SearchResult from './SearchResult'

export default class Search extends React.Component {
    state = {
        searchStr: '',
        nextPage: 2,
        searchResults: []
    }
    
    onChangeText = text => {
        this.setState({ searchStr: text })
    }

    doSearch = async () => {
        const { searchStr } = this.state

        const results = await searchByString(searchStr)
        this.setState({ searchResults: results, nextPage: 2 })
    }

    getNextPage = async () => {
        const { searchStr, nextPage } = this.state

        const results = await searchByString(searchStr, nextPage)
        this.setState( ({ searchResults, nextPage }) => 
            ({ searchResults: [...searchResults, ...results], nextPage: nextPage + 1 }))
    }

    goToDetailsPage = (id) => {
        this.props.navigation.navigate("MovieDetails", { id })
    }

    renderSearchResult = (searchResult) => {
        const { goToDetailsPage } = this

        return (
            <SearchResult 
                searchResult={searchResult}
                onPress={() => goToDetailsPage(searchResult.item.id)}
            />
        )
    }
    
    render() {
        const { state: { searchStr, searchResults }, 
                onChangeText, doSearch, getNextPage,
                renderSearchResult } = this

        return (
            <>
                <Input 
                    placeholder='Search For Movies by Title'
                    onChangeText={onChangeText}
                    onBlur={doSearch} 
                    value={searchStr}
                    style={styles.input} />
                <SafeAreaView style={styles.container}>
                    <FlatList
                        renderItem={renderSearchResult}
                        data={searchResults}
                        onEndReached={getNextPage}
                        onEndReachedThreshold={.5}
                        contentContainerStyle={styles.scrollView}
                        keyExtractor={(item, index) => 'key'+index}
                    />
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#ffeee3',
        alignItems: 'center',
    },
    input: {
        fontFamily: 'Courier',
    },
})