import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class SearchResult extends React.Component {
    render() {
        const { title, year, type } = this.props.searchResult.item
        return (
            <View style={styles.item}>
                <Text style={[styles.allText, styles.titleText]}>
                    {`${title} (${year})`}
                </Text>
                <Text style={[styles.allText, styles.subText]}>
                    {`  ${type}`}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        borderWidth: 2,
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