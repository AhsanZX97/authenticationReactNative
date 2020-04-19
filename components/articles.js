import React from 'react';
import { StyleSheet, Text, View, ClippingRectangle } from 'react-native';

class articles extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up articles.js to start working on your articles!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default articles;