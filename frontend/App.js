// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator} from "react-navigation-tabs";

// Icon
import Icon from 'react-native-vector-icons/FontAwesome';

// route components
import HomeScreen from './components/Homescreen';
import Check from './components/Check';
import MitRejsekort from './components/Mitrejsekort';
import RejseHistorik from './components/Rejsehistorik';

// route testing
import AboutScreen from './components/Aboutscreen';
import ContactScreen from './components/Contactscreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createBottomTabNavigator({
  Home : { screen: HomeScreen,
  navigationOptions: {
    tabBarIcon: ({ tintColor }) =>(<Icon size={ 28 } name={ 'home' } color={ tintColor }/>)
  }},
  CheckIndUd: { screen: Check,
  navigationOptions: {
    tabBarIcon: ({ tintColor }) =>(<Icon size={ 28 } name={ 'check-circle-o' } color={ tintColor }/>)
    }},
  MitRejsekort: { screen: MitRejsekort,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>(<Icon size={ 28 } name={ 'id-card-o' } color={ tintColor }/>)
    }},
  FindRejse: { screen: RejseHistorik,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>(<Icon size={ 28 } name={ 'history' } color={ tintColor }/>)
    } },
},{
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: 'black',
    showIcon: true,
    showLabel: false,
      style: {
        backgroundColor: 'dodgerblue',
        height: 80,
      
    },
    labelStyle:{
      fontSize: 16,
      fontFamily: 'Roboto',
      justifyContent: 'center',
      alignItems: 'center', 
      padding: 1,
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