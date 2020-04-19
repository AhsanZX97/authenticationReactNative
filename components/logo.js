import React from 'react';
import { StyleSheet, Text, View, ClippingRectangle } from 'react-native';

class logo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up logo.js to start working on your logo!</Text>
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

export default logo;