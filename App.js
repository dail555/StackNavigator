import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants';
import StackNavigator from './stack/StackNavigator';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <StackNavigator />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
});
