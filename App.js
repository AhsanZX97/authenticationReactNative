import React from 'react';
import { StyleSheet, Text, View, ClippingRectangle } from 'react-native';
import Articles from './components/articles'
import LoginForm from './components/loginForm'
import * as firebase from 'firebase';
import Loading from '/components/loading'
import api from './variables'


class App extends React.Component {

  state = {
    loggedIn: null
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDjP9p7In1Bdf5Q06a5R8jl1mq47xMFyFI",
      authDomain: "tutlogin-57054.firebaseapp.com",
      databaseURL: "https://tutlogin-57054.firebaseio.com",
      projectId: "tutlogin-57054",
      storageBucket: "tutlogin-57054.appspot.com",
      messagingSenderId: "239126905582",
      appId: "1:239126905582:web:f0193be7e7c5b19d15e9ff",
      measurementId: "G-24GVK7RH73"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({
          loggedIn:true
        })
      } else {
        this.setState({
          loggedIn:false
        })
      }
    })

  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />

      case true: 
        return <Articles />
      default:
        return <Loading />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;