// Rejsehistorik.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Rejse from './Rejse';

export default class Rejsehistorik extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header />
        <View style={styles.RHBox}>
          
          <Rejse />
          
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
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 25,
    marginRight: 25,
  },
  RHBox: {
    height: 560,
    width: '100%',
  },
});