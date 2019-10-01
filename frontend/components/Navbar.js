import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


class Navbar extends Component {

    onPressButton = () => {
      'Skal modtage et argument som fortæller hvilken knap der er trykket og hvor den skal linke hen?'
      }

    render() {
        //const{ navigate } = this.props.navigation
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => navigate('test2', {screen: 'test2'})}  style={styles.button}>
                    <Text style={styles.buttonText}>Check Ind&Ud</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
                    <Text style={styles.buttonText}>Mit Rejsekort</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
                    <Text style={styles.buttonText}>Kort</Text>
                </TouchableOpacity>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        height: 90,
        width: '100%',
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        borderRadius: 7
    },
    button: {
        height: 90,
        width: 150, 
        justifyContent: 'center',
        alignItems: 'center',    
    },
    buttonText: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
});

export default Navbar;