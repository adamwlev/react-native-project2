import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class SearchResult extends React.Component {
    render() {
        const { title, year, type } = this.props.searchResult.item
        return (
            <TouchableOpacity style={styles.item} onPress={this.props.onPress}>
                <Text style={[styles.allText, styles.titleText]}>
                    {`${title} (${year})`}
                </Text>
                <Text style={[styles.allText, styles.subText]}>
                    {`  ${type}`}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        marginTop: 5,
        marginBottom: 7,
        borderWidth: 2,
        minWidth: "90%",
        maxWidth: "90%",
    },
    allText: {
        fontFamily: 'Courier',
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    subText: {
        fontSize: 16,
    }
})