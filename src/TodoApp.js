import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import home from 'pages/home'
import about from 'pages/about'

export default class TodoApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={home} title="Home Page" initial={true} />
          <Scene key="about" component={about} title="About" initial={true} />
        </Scene>
      </Router>
    );
  }
}