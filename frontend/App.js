// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator} from "react-navigation-tabs";

// route components
import HomeScreen from './components/Homescreen';
import Check from './components/Check';
import MitRejsekort from './components/Mitrejsekort';
import FindRejse from './components/Findrejse';

// route testing
import AboutScreen from './components/Aboutscreen';
import ContactScreen from './components/Contactscreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createBottomTabNavigator({
  'Home': { screen: HomeScreen },
  'Check ind / Check ud': { screen: Check},
  'Mit Rejsekort': { screen: MitRejsekort },
  'Find Rejse': { screen: FindRejse },
},{
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: 'black',
    showIcon: true,
      style: {
        backgroundColor: 'dodgerblue',
        height: 80,
      
    },
    labelStyle:{
      fontSize: 22,
      fontFamily: 'Roboto',
      justifyContent: 'center',
      alignItems: 'center', 
      padding: 20,
      fontWeight: 'bold',
      

    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  }
});