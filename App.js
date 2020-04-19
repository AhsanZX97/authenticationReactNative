import React from 'react';
import { StyleSheet, Text, View, ClippingRectangle } from 'react-native';
import articles from './components/articles'
import LoginForm from './components/loginForm'


class App extends React.Component {

  state = {
    loggedIn:true
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return <LoginForm/>
    
      default:
        return <articles/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderContent() }
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

export default App;