// Check.js
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

// CPH Business IP
const url ="http://10.50.136.229:3001/journey/1";

// Stephan IP
const url2 ="http://10.149.52.35:3001/journey/1";

// Casper IP
const url3 ="http://192.168.1.247.:3001/journey/1";


export default class Check extends Component {
  constructor(props){
    super(props);
      this.state = { checkinfo: { Journey_id: 0,
                                  Journey_checkin: 'None',
                                  Journey_checkout: 'None',
                                  Journey_longtitudestart: 1.1,
                                  Journey_latitudestart: 2.2,
                                  Journey_longtitudeend: 3.3,
                                  Journey_latitudeend: 4.4
                                } 
                   }
  }

  

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.check}>
          <Text style={styles.text}>Check Ind</Text>
        </View>
        <View style={styles.info}>
          <Text>Journey_id:              { this.state.checkinfo.Journey_id }</Text>
          <Text>Journey_checkin:         { this.state.checkinfo.Journey_checkin } </Text>
          <Text>Journey_checkout:        { this.state.checkinfo.Journey_checkout } </Text>
          <Text>Journey_longtitudestart: { this.state.checkinfo.Journey_longtitudestart } </Text>
          <Text>Journey_latitudestart:   { this.state.checkinfo.Journey_latitudestart } </Text>
          <Text>Journey_longtitudeend:   { this.state.checkinfo.Journey_longtitudeend } </Text>
          <Text>Journey_latitudeend:     { this.state.checkinfo.Journey_latitudeend } </Text>
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
    padding: '10%'
  },
  check: {
    width: 350,
    height: 350,
    backgroundColor: 'dodgerblue',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
    },
    text: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'white'
    },
    info: {
      width: '100%',
      alignItems: 'flex-start'
    }
    
  });