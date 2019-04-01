import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AblumList from './src/components/albumList';
//creat a Component

//render it to the device
const App = () => (
  <View style={{flex: 1}}>
    <Header headerText="Albums" />
    <AblumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
