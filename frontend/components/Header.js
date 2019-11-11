// Header.js
import React, { Component } from 'react';
import {  View,  ImageBackground, StyleSheet, Image } from 'react-native';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.logo}>
      
        <Image source={require('../assets/header.png')} resizeMode='cover'></Image>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    marginBottom: 30,
  }
});