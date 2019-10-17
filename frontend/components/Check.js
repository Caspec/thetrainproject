// Check.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// CPH Business IP
const url ="http://10.50.136.229:3001/journey/1";

// Stephan IP
const url2 ="http://10.149.52.35:3001/journey/1";

// Casper IP
const url3 ="http://192.168.1.247.:3001/journey/1";


export default class Check extends Component {

  constructor(props){
    super(props);
      this.state = { buttonText: 'Check Ind' };
  }
 
                
checkedIn = () => {
  navigator.geolocation.getCurrentPosition(
    position => {
      let longtitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      let date = new Date().getDate(); //Current Date
      let month = new Date().getMonth() + 1; //Current Month
      let year = new Date().getFullYear(); //Current Year
      let hours = new Date().getHours(); //Current Hours
      let min = new Date().getMinutes(); //Current Minutes
      let sec = new Date().getSeconds(); //Current Seconds

      if(this.state.buttonText == 'Check Ind'){
        console.log('Checked in');

        this.setState({
        journey_longtitudestart: longtitude, 
        journey_latitudestart: latitude,
        journey_checkin: date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        buttonText: 'Check Ud' })
      }else{
        console.log('Checked Out');
        this.setState({
          buttonText: 'Check Ind',
          journey_longtitudeend: longtitude,
        journey_latitudeend: latitude,
      journey_checkout: date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec })
      }
      
        // Indsætte data i databasen
        
        // Clear state
    },
    { enableHighAccuracy: true, timeout: 100, maximumage: 1000}
  )
};
  

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.checkedIn}>
          <View style={styles.check}>
            <Text style={styles.text}>{this.state.buttonText}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.info}>
          <Text>Journey_id:              { this.state.journey_id }</Text>
          <Text>Journey_checkin:         { this.state.journey_checkin } </Text>
          <Text>Journey_checkout:        { this.state.journey_checkout } </Text>
          <Text>Journey_longtitudestart: { this.state.journey_longtitudestart } </Text>
          <Text>Journey_latitudestart:   { this.state.journey_latitudestart } </Text>
          <Text>Journey_longtitudeend:   { this.state.journey_longtitudeend } </Text>
          <Text>Journey_latitudeend:     { this.state.journey_latitudeend } </Text>
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