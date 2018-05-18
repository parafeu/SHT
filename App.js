import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StackNavigator from './router'

export default class App extends React.Component {
  render() {
    return (
      <StackNavigator/>
    );
  }
}

