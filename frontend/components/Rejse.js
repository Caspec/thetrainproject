// Rejse.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';

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
        this.state = { rejser: [],
                       modalVisible: false};
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

        toggleModal(visible) {
            this.setState({ modalVisible: visible });
         }

    render() {
      return (
        <View>
            <ScrollView>
                {
                    this.state.rejser.map((rejse, index) => (
                        <TouchableOpacity onPress = {() => {this.toggleModal(true)}} key = { index }>
                            <View key = { index } style = { styles.rejse }>

                                <View style={ styles.boxLabels }>
                                    <Text style={ styles.labelText }>Check Ind : </Text>
                                    <Text style={ styles.labelText }>Check Ud : </Text>
                                    <Text style={ styles.labelText }>Pris : </Text>
                                </View>

                                <View style={ styles.boxData }>
                                    <Text>{ rejse.journey_checkin }</Text>
                                    <Text>{ rejse.journey_checkout }</Text>
                                    <Text>{ rejse.journeyline_price } Dkk</Text>
                                </View>

                                <Modal visible = {this.state.modalVisible} >
                                    <TouchableOpacity onPress = {() => {this.toggleModal(false)}}>
                                        <View style={ styles.modalWrapper }>
                                            <View style={styles.modal}>
                                                <Text >Longtitudestart : { rejse.journey_longtitudestart }</Text>
                                                <Text >Latitudestart : { rejse.journey_latitudestart }</Text>
                                                <Text >Longtitudeend : { rejse.journey_longtitudeend }</Text>
                                                <Text >Latitudeend : { rejse.journey_latitudeend }</Text>
                                            </View>
                                            <Text>Tab on the Map to close the modal</Text>
                                        </View>
                                        
                                    </TouchableOpacity>
                                    
                                </Modal>

                            </View>
                        </TouchableOpacity>
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
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#F8F8FF',
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'lightgray',
        paddingLeft: 25,
        paddingRight: 25,
        paddingVertical: 10
        
    },
    labelText: {
        fontWeight: 'bold'
    },
    modalWrapper: {
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: '95%',
        height: 300,
        backgroundColor: '#F8F8FF',
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'lightgray',
        paddingLeft: 25,
        paddingRight: 25,
        paddingVertical: 10
    }
  });