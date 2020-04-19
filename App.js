import React from 'react';
import { StyleSheet, Text, View, ClippingRectangle } from 'react-native';
import Articles from './components/articles'
import LoginForm from './components/loginForm'


class App extends React.Component {

  state = {
    loggedIn:false
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm/>
    
      default:
        return <Articles/>
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
    justifyContent: 'center',
  },
});

export default App;