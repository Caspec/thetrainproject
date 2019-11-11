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
        <View style={styles.outerBox}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
            Hallo dette er en infobox Hallo dette er en infobox 
          Hallo dette er en infoboxHallo dette er en 
          infoboxHallo dette er en infoboxHallo dette er en infobo
            </Text>
          </View>
          <View>
            <ImageBackground source={require('../assets/home.png')} style={styles.imgBackground} resizeMode="cover">
          </ImageBackground>
          </View>
          
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
  outerBox: {
    //backgroundColor: 'dodgerblue',
    width: '76%',
    height: '50%',
    padding: 15,
    borderRadius: 6,
    flex: 1
  },
  textBox: {
    //backgroundColor: '#F8F8FF',
    width: '85%',
    padding: 20,
    borderRadius: 4,
    opacity: 0.9,
    flex: 4
  },
  text: {
    color: 'black',
  },
  imgBackground: {
    width: 400, 
    height: 200,

  },
  header: {
    width: '60%',
    height: 'auto'
  }
 
});