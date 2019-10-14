// Mitrejsekort.js
import React, { Component } from 'react';
import { Button, View, Text, ImageBackground, StyleSheet, Image, TextInput } from 'react-native';

// CPH Business IP
const url ="http://10.50.136.229:3001/user/1";

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
        fetch(url3)
        .then(response => response.json())
        .then((data)=> {
          console.log(data);
          this.setState({ rejse: data, balance: data[0].user_balance })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
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
    }
  });