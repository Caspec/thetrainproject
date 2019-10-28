// Mitrejsekort.js
import React, { Component } from 'react';
import { Button, View, Text, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

// !! Dynamisk IP Adresse !!
// CPH Business IP
const url ="http://10.50.136.238:3001/user/1";

// CPH Business PUT 
const urlPUT = "http://10.50.136.238:3001/update_balance"

// Stephan IP
const url2 ="http://10.50.136.229:3001/user/1";

// Casper IP
const url3 ="http://192.168.1.247.:3001/user/1";

export default class Mitrejsekort extends Component {

    constructor(props) {
        super(props);
        this.state = { rejse: [], balance: 0 };
      }
      componentDidMount(){
        fetch(url)
        .then(response => response.json())
        .then((data)=> {
          console.log(data);
          this.setState({ rejse: data, totalbalance: '', balance: data[0].user_balance })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }

        addbalance = () => {
         let totalbalance = parseFloat(this.state.balance) + parseFloat(this.state.newbalance); 
          let addToBalance = {
            method: 'PUT',
            body: JSON.stringify({
                user_id: 1,
                user_firstname: 'Posemand',
                user_lastname: 'Eriksen',
                user_email: 'posemand@gmail.com',
                user_image: 'no.png',
                user_balance: totalbalance,
            }),
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
            }
        }
        fetch(urlPUT, addToBalance)
          .then((response) => response.text())
                .then((responseJson) => {
                  this.setState({ balance: totalbalance, newbalance: '' })
            }).catch((error) => {
              console.error(error);
          });
        }

  render() {
      const rejseData = this.state.rejse.map((el, key) => <Text key={key} style={styles.minInfo}>{el.user_firstname} {'\n'}{el.user_lastname} {'\n'}{el.user_email}</Text>);
      const DK = " DKK";
      console.log(this.state.balance);
    return (
      <View>
      <View style={styles.heading}>
            <Text>Mit Rejsekort</Text>
      </View>
        <View>
            <ImageBackground source={require('../assets/rejsekort.png')} style={styles.imgBackground} resizeMode="stretch">
                <View style={styles.containerInfo}>
                  {rejseData}
                </View>
            </ImageBackground>
        </View>
        <View style={styles.containerKredit}>
          <Text>Kredit på kontoen</Text> 
          <TextInput style={styles.textInputKredit} value={this.state.balance.toString() + DK} editable={false} />
        </View>
        <View>
            <View style={styles.containerImage}>
               <Image source={require('../assets/noboy.png')}></Image>
            </View>
        </View>
        <View>
            <View style={styles.containerKredit}>
            <Text>Optankning til dit Rejsekort</Text> 
            <TextInput style={styles.textInputKredit} editable={true} keyboardType='numeric' onChangeText={(newbalance) => this.setState({ newbalance })} value={this.state.newbalance} />
            <TouchableOpacity onPress={this.addbalance} style={styles.addbutton}>
            <View>
              <Text style={styles.addcenter}>Tilføj</Text>
            </View>
          </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: "row",
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerInfo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 125
    },
    containerKredit: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: 20,
      marginTop: 50,
      width: '60%'
    },
    containerImage: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginRight: 10,
      marginTop: 80
    },
    textInputKredit: {
      width: 120, 
      height: 40, 
      borderColor: 'black', 
      borderWidth: 1, 
      paddingLeft: 5
    },
    imgBackground: {
        width: 400, 
        height: 200, 
        marginTop: 50
    },
    minInfo: {
      fontSize: 18,
      fontWeight: "bold"
    },
    addbutton: {
      height: 30,
      width: 120,
      backgroundColor: '#057D8B',
      marginTop: 15,
      borderRadius: 5,
      paddingTop: 5,
    },
    addcenter: {
      textAlign: 'center',
      color: '#fff'
    }
  });