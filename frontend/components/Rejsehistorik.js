// Rejsehistorik.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';


export default class Rejsehistorik extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header />
      <View style={styles.data}>
        <Text>Rejsehistorik</Text>
      </View>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  data: {
    height: 300
  }
});