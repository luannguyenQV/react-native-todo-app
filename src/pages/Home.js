import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  Platform,
  Clipboard,
  ScrollView
} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30, borderWidth: 3, borderColor: 'black' }}>
          <Text style={{ fontSize: 30 }}> TestResponsive </Text>
        </View>
        <View style={{ marginBottom: 30, borderWidth: 3, borderColor: 'black' }}>
          <View>
            <Text style={{ fontSize: 20 }}> No Responsive </Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Image source={require('../assets/react.png')} />
          </View>
        </View>
        <View style={{ marginBottom: 30, borderWidth: 3, borderColor: 'black' }}>
          <View>
            <Text style={{ fontSize: 20 }}> Stretch </Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'center'
              }}
              resizeMode='stretch'
              source={require('../assets/react.png')} />
          </View>
        </View>
        <View style={{ marginBottom: 30, borderWidth: 3, borderColor: 'black' }}>
          <View>
            <Text style={{ fontSize: 20 }}> Contain </Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'center'
              }}
              resizeMode='contain'
              source={require('../assets/react.png')} />
          </View>
        </View>
        <View style={{ marginBottom: 30, borderWidth: 3, borderColor: 'black' }}>
          <View>
            <Text style={{ fontSize: 20 }}> Cover </Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'center'
              }}
              resizeMode='cover'
              source={require('../assets/react.png')} />
          </View>
        </View>
        <View style={{ marginBottom: 30, borderWidth: 3, borderColor: 'black' }}>
          <View>
            <Text style={{ fontSize: 20 }}> Center </Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'center'
              }}
              resizeMode='center'
              source={require('../assets/react.png')} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Home
