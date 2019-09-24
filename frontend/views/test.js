import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navbar from '../components/Navbar';



class test extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>Test screen 1!</Text>
        <Button title='press me!' onPress={()=> this.props.navigation.navigate('test2')} />
        <Navbar/>
      </View>
    );
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

export default test;