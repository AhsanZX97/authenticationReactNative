import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LoginForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up loginForm.js to start working on your loginForm!</Text>
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

export default LoginForm;