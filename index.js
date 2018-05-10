import React from 'react';
import {AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a Component
const App = () =>
(
  <View>
  <Header headerText ={'Records'}/>
  <AlbumList />
  </View>

)


//Render it On the Device

AppRegistry.registerComponent('gymappreact', () => App);
