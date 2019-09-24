import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class Navbar extends Component {
    render() {
        return (
            <View style={styles.container}>

                
                    <View style={styles.navContainer}>
                        <Button color='#ccc' title='Check In/Out' onPress={() => this.props.navigation.navigate('test2')} />
                        <Button color='#ccc' title='rejsekort' onPress={() => this.props.navigation.navigate('test2')} />
                        <Button color='#ccc' title='Lone' onPress={() => this.props.navigation.navigate('test2')} />
                        <Button color='#ccc' title='JB Juice' onPress={() => this.props.navigation.navigate('test2')} />
                    </View>
                


                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',

        backgroundColor: '#fff',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 70,
        minHeight: 50,
        width: '100%',
        backgroundColor: '#ccc'
    }
});

export default Navbar;