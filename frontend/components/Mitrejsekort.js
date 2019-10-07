// Mitrejsekort.js
import React, { Component } from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';

// CPH Business IP
const url ="http://10.50.136.229:3001/user/1";

// Stephan IP
const url2 ="http://10.50.136.229:3001/user/1";

// Casper IP
const url3 ="http://10.50.136.229:3001/user/1";

export default class Mitrejsekort extends Component {

    constructor(props) {
        super(props);
        this.state = { rejse: [] };
      }
      componentDidMount(){
        fetch(url)
        .then(response => response.json())
        .then((data)=> {
          console.log(data);
          this.setState({ rejse: data })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }

  render() {
      const rejseData = this.state.rejse.map((el, key) => <Text key={key}>{el.user_id}</Text>);
    return (
      <View>
      <View style={styles.heading}>
            <Text>Mit Rejsekort</Text>
      </View>
        <View>
            <ImageBackground source={require('../assets/rejsekort.png')} style={styles.imgBackground} resizeMode="contain">
                <View style={styles.container}>
                    
                  {rejseData}
                </View>
            </ImageBackground>
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
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgBackground: {
        width: 400, 
        height: 200, 
        marginTop: 50
    }
  });