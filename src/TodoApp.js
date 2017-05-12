import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Home from './pages/Home'
import Demo from './pages/Demo'

export default class TodoApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home Page" initial={true} />
          <Scene key="demo" component={Demo} title="Demo" />
        </Scene>
      </Router>
    );
  }
}