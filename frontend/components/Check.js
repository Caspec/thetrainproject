// Check.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './Header';

// CPH Business IP
const url ="http://10.50.137.142:3001/create_journey";

// Stephan IP
const url2 ="http://10.149.52.35:3001/create_journey";

// Casper IP
const url3 ="http://192.168.1.247.:3001/create_journey";


export default class Check extends Component {

  constructor(props){
    super(props);
      this.state = { CheckedIn: false,
                     GreetingText: 'Tryk på det blå punkt for at checke ',
                     InOut: 'Ind' };
  }
 
                
checkedIn = () => {

  let date = new Date().getDate(); 
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let hours = new Date().getHours();
  let min = new Date().getMinutes(); 
  let sec = new Date().getSeconds(); 

  if(this.state.CheckedIn == false){
    console.log('Checked in');
    this.setState({ GreetingText: 'Tak fordi du Checked ind med vores App.' })
    navigator.geolocation.getCurrentPosition(
      position => {
        let longtitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        this.setState({
          journey_longtitudestart: longtitude, 
          journey_latitudestart: latitude,
        })
      },
      { enableHighAccuracy: true, timeout: 1000, maximumage: 1000}
    )

    this.setState({
    journey_checkin: year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec + '.000000',
    CheckedIn: true,
    GreetingText: 'Tryk på det blå punkt for at checke ',
    InOut: 'Ud.'})
  }else{
    console.log('Checked Out');
    this.setState({ GreetingText: 'Forsat god rejse.' })
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
      CheckedIn: false,
      journey_checkout: year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec + '.000000',
      InOut: 'Ind',
      GreetingText: 'Tryk på det blå punkt for at checke ' })


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
fetch(url2, journeydata)
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
  <Header />
        <TouchableOpacity onPress={this.checkedIn}>
          <View style={styles.check}>
            <Text style={styles.text}> { this.state.GreetingText }{ this.state.InOut } </Text>
          </View>
        </TouchableOpacity>

        <View style={this.state.CheckedIn
                            ? styles.infoboxRed
                            : styles.infoboxGreen}>
            
            <Text style={styles.status}>Check</Text>
            <Text style={styles.status}>{ this.state.InOut }</Text>
                  
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
  check: {
    width: 370,
    height: 370,
    backgroundColor: 'dodgerblue',
    borderRadius: 200,
    borderColor: '#186fc4',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
  },
  infoboxGreen: {
    flex: 0.8,
    flexDirection: 'column',
    width: 150,
    height: 80,
    backgroundColor: 'green',
    borderColor: 'darkgreen',
    borderWidth: 4,
    marginBottom: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoboxRed: {
    flex: 0.8,
    flexDirection: 'column',
    width: 150,
    height: 80,
    backgroundColor: 'red',
    borderColor: 'darkred',
    borderWidth: 4,
    marginBottom: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  status: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 35,
  }
    
  });