import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';
//creat a Component

//render it to the device
const App = () => <Header title="Hello World!!!"/>;

AppRegistry.registerComponent('albums', () => App);
