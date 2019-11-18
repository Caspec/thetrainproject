// Rejsehistorik.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Rejse from './Rejse';

// !! Dynamisk IP Adresse !!
// CPH Business IP
const url ="http://10.50.137.142:3001/user/1";

// CPH Business PUT 
const urlPUT = "http://10.50.136.238:3001/update_balance"

// Stephan IP
const url2 ="http://10.50.136.229:3001/user/1";

// Casper IP
const url3 ="http://192.168.1.247.:3001/user/1";

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