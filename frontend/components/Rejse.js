// Rejse.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// !! Dynamisk IP Adresse !!
// CPH Business IP
const url ="http://10.50.137.93:3001/journeys";

// Key Cph business 
const urlKey ="http://10.50.137.93:3001/key";

// Stephan IP
const url2 ="http://10.149.52.35:3001/journeys";

// Casper IP
const url3 ="http://192.168.1.247.:3001/journeys";


export default class Rejse extends Component {

    constructor(props) {
        super(props);
        this.state = { rejser: [],
                       key: "",
                       modalVisible: false};
      }
      
      componentDidMount(){
        fetch(url)
        .then(response => response.json())
        .then((data)=> {
          console.log(data);
          this.setState({ rejser: data})
        })
        .catch(error=>console.log(error)) //to catch the errors if any

        fetch(urlKey)
        .then(response => response.json())
        .then((data)=> {
          console.log(data[0].key_key);
          this.setState({ key: data[0].key_key})
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
                                                <MapView 
                                                style={ styles.map } 
                                                initialRegion={{ latitude: 55.773381, longitude: 12.510874, latitudeDelta: 0.02, longitudeDelta: 0.02}} 
                                                zoomEnabled= {true}
                                                >
                                                
                                                <Marker
                                                coordinate= {{ latitude: this.state.rejser[index].journey_latitudestart, longitude: this.state.rejser[index].journey_longtitudestart }}
                                                title= {"menja flise"}
                                                description= {"Her står hun og trækker"}>
                                                    <Image 
                                                        style={{width: 25, height: 35}}
                                                        source={require('../assets/pinStart.png')}
                                                    />
                                                </Marker>

                                                <Marker
                                                coordinate= {{ latitude: this.state.rejser[index].journey_latitudeend, longitude: this.state.rejser[index].journey_longtitudeend }}
                                                title= {"menja flise"}
                                                description= {"Her står hun og trækker"}
                                                >
                                                    <Image 
                                                        style={{width: 25, height: 35}}
                                                        source={require('../assets/pinEnd.png')}
                                                    />
                                                </Marker>
                                                 </MapView>   
                                                
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
        paddingVertical: 10,
        marginBottom: 10
        
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
    },
    map: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "flex-end",
        alignItems: "center"
    }
  });