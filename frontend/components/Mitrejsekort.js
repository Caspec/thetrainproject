// Mitrejsekort.js
import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Header from './Header';

// !! Dynamisk IP Adresse !!
// CPH Business IP
const url ="http://10.50.137.189:3001/user/1";

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
      <View style={styles.wrapper}>
      <Header />
     
        <View>
            <ImageBackground source={require('../assets/rejsekort.png')} style={styles.imgBackground} resizeMode="stretch">
              <View style={styles.cardView}>

                <View style={styles.containerInfo}>
                  <Image source={require('../assets/noboy.png')} style={styles.profileImg}></Image>
                  <Text style={styles.rejseData}>{rejseData}</Text>
                </View>

                <View style={styles.creditView}>

                <Text>Kredit på kontoen</Text> 
                <TextInput style={styles.textInputKredit} value={this.state.balance.toString() + DK} editable={false} />
                </View>
              </View>
            </ImageBackground>
        </View>
        
        <View style={styles.topUpview}>

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
    cardView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15
    },
    imgBackground: {
      width: 400, 
      height: 270, 
      marginTop: 30
    },
    creditView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'baseline',
    },
    topUpview: {
      flex: 1,
      flexDirection: 'column',
      padding: 15,
      backgroundColor: 'gray'
    },


    containerInfo: {
      flex: 1.7,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },
    profileImg: {
      width: 100,
      height:130,
    },
    rejseData: {
      marginTop: 30,
    },
    heading: {
        flexDirection: "row",
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerKredit: {
      //flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      //marginLeft: 20,
      //marginTop: 50,
      width: '60%',
      backgroundColor: 'gray'
    },
    containerImage: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginRight: 10,
      marginTop: 80
    },
    view3: {
      flex: 1,
      backgroundColor: 'gray'
    },
    textInputKredit: {
      width: 120, 
      height: 40, 
      borderColor: 'black', 
      borderWidth: 1, 
      paddingLeft: 5
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