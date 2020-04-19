import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './logo'
import EmailAndPassword from './emailAndPassword'

class LoginForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.logoContainer}>
                    <Logo/>
                </View>
                <View style = {styles.emailAndPassword}>
                    <EmailAndPassword/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    emailAndPassword: {
        flex: 2
    }
});

export default LoginForm;