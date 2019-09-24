import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navbar from '../components/Navbar';



class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Test screen 1!</Text>
          <Button title='press me!' onPress={() => this.props.navigation.navigate('test2')} />
        </View>

        <View style={styles.navbar}>
          <Navbar />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'black'
  }
});

export default test;