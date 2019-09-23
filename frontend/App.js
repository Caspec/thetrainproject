import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from './views/test'

export default function App() {
  return (
    <View style={styles.container}>
      <Test></Test>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
