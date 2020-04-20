import React from 'react';
import { StyleSheet, Text, View, ClippingRectangle } from 'react-native';

class Loading extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up loading.js to start working on your loading!</Text>
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

export default Loading;