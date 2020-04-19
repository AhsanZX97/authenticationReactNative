import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Logo extends React.Component {
    render() {
        return (
            <View>
                <Image source={{uri:'https://uilogos.co/img/logotype/circle.png'}} style= {{height:150,width:150}}/>
            </View>
        )
    }
}

export default Logo;