// Homescreen.js
import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
      <Header/>
          <View style={styles.textBox}>
            <Text style={styles.text}>
            Hallo dette er en infobox Hallo dette er en infobox 
          Hallo dette er en infoboxHallo dette er en 
          infoboxHallo dette er en infoboxHallo dette er en infobo
            </Text>
            <ImageBackground source={require('../assets/home.png')} style={styles.imgBackground} resizeMode="cover">
          </ImageBackground>
          </View>
          <View style={styles.Box}>
           
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 25,
    marginRight: 25,
  },
  textBox: {
    width: 374,
    height: 370,
    padding: 35,
    borderRadius: 4,
    opacity: 0.9,
    backgroundColor: '#F8F8FF',
    marginBottom: 30,
    justifyContent: 'flex-start'
  },
  text: {
    color: 'black',
  },
  Box: {
    flex: 0.8,
    flexDirection: 'column',
    width: 150,
    height: 80,
  },
  imgBackground: {
    width: 400, 
    height: 200,

  },
  
 
});