import React from 'react';
import { StyleSheet, Text, View, ClippingRectangle, TouchableOpacity } from 'react-native';

class Articles extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.articleContainer}>
                    <Text style={styles.header}>
                        Welcome to the authorised screen
                    </Text>
                    <Text style={styles.content}>
                        You are logged in from firebase
                    </Text>
                    <TouchableOpacity style={{padding:20}}>
                        <Text style={{color:'#1B9CFC'}}>LogOut</Text>
                    </TouchableOpacity>
                </View>
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
    articleContainer: { 
        padding:10,
        borderBottomColor:'rgba(255,255,255,.7)',
        borderBottomWidth:5
    },
    header:{
        fontSize:22,
        color:'black',
        padding:10,
        marginBottom:5
    },
    content: {
        marginTop:10,
        fontSize:19,
    }
});

export default Articles;