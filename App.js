
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import  Navigation from './src/Navigation'
import Splash from './src/SplashScreen'

export default class App extends Component {
  constructor(){
    super()
  this.state = {
    screen:'splash'
  }
  }
componentDidMount(){
  setTimeout( () => {
    this.setState({screen:'a'})
  },5000) 
}
  render() {
    return (
      <Navigation/>
    );
  }
}
