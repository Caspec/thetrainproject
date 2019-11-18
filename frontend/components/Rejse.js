// Rejse.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// !! Dynamisk IP Adresse !!
// CPH Business IP
const url ="http://10.50.137.189:3001/journeys";

// Stephan IP
const url2 ="http://10.50.137.78:3001/journeys";

// Casper IP
const url3 ="http://192.168.1.247.:3001/journeys";


export default class Rejse extends Component {

    constructor(props) {
        super(props);
        this.state = { rejser: [] };
      }
      componentDidMount(){
        fetch(url2)
        .then(response => response.json())
        .then((data)=> {
          console.log(data);
          this.setState({ rejser: data})
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }

    render() {
      return (
        <View>
            <ScrollView>
                {
                    this.state.rejser.map((rejse, index) => (
                    <View key = { rejse.journey_id } style = { styles.rejse }>

                        <View style={ styles.boxLabels }>
                            <Text>Check Ind : </Text>
                            <Text>Check Ud : </Text>
                            <Text>Pris : </Text>
                        </View>

                        <View style={ styles.boxData }>
                            <Text>{ rejse.journey_checkin }</Text>
                            <Text>{ rejse.journey_checkout }</Text>
                            <Text>{ rejse.journeyline_price } Dkk</Text>
                        </View>

                    </View>
                  ))
                }
                
            </ScrollView>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    rejse: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#F8F8FF',
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'lightgray',
        padding: 10,
        
    },
    boxLabels: {
        width: 200
    },
    boxData: {

    }
  });