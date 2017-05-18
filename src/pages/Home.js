import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Col>
          <ScrollableTabView
            style={{ marginTop: 64 }}
            renderTabBar={() => <DefaultTabBar />}
          >
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
          </ScrollableTabView>
        </Col>
        <Col>
          <View><Text>Half</Text></View>
        </Col>
      </Grid>
    )
  }
}
