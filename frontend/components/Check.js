// Check.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// CPH Business IP
const url ="http://10.50.137.142:3001/create_journey";

// Stephan IP
const url2 ="http://10.149.52.35:3001/create_journey";

// Casper IP
const url3 ="http://192.168.1.247.:3001/create_journey";


export default class Check extends Component {

  constructor(props){
    super(props);
      this.state = { buttonText: 'Check Ind' };
  }
 
                
checkedIn = () => {

  let date = new Date().getDate(); 
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let hours = new Date().getHours();
  let min = new Date().getMinutes(); 
  let sec = new Date().getSeconds(); 

  if(this.state.buttonText == 'Check Ind'){
    console.log('Checked in');

    navigator.geolocation.getCurrentPosition(
      position => {
        let longtitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        this.setState({
          journey_longtitudestart: longtitude, 
          journey_latitudestart: latitude,
        })
      },
      { enableHighAccuracy: true, timeout: 100, maximumage: 1000}
    )

    this.setState({
    journey_checkin: year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec + '.000000',
    buttonText: 'Check Ud' })
  }else{
    console.log('Checked Out');

    navigator.geolocation.getCurrentPosition(
      position => {
        let longtitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        this.setState({
          journey_longtitudeend: longtitude, 
          journey_latitudeend: latitude,
        })
      },
      { enableHighAccuracy: true, timeout: 100, maximumage: 1000}
    )
    this.setState({
      buttonText: 'Check Ind',
      journey_checkout: year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec + '.000000' })


setTimeout( () => {
let journeydata = {
    method: 'POST',
    body: JSON.stringify({
        journey_checkin: this.state.journey_checkin,
        journey_checkout: this.state.journey_checkout,
        journey_longtitudestart: this.state.journey_longtitudestart,
        journey_latitudestart: this.state.journey_latitudestart,
        journey_longtitudeend: this.state.journey_longtitudeend,
        journey_latitudeend: this.state.journey_latitudeend,
    }),
    headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json',
    }
}
console.log(this.state.journey_longtitudestart);
fetch(url, journeydata)
  .then((response) => response.text())
        .then((responseJson) => {
    }).catch((error) => {
      console.error(error);
  });

},1000)

  setTimeout( () => {
    this.setState({
      journey_checkin: '',
      journey_checkout: '',
      journey_longtitudestart: '',
      journey_latitudestart: '',
      journey_longtitudeend: '',
      journey_latitudeend: ''
    })
  },3000)
  }
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