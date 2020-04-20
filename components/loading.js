import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

class Loading extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size = "large"/>
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