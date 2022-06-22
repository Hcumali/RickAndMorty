import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Screen from 'components/Screen/Index'

export class Index extends Component {
  render() {
    return (
      <Screen showHeader={true} >
        <View>
          <Text>FLOW SCREEN</Text>
        </View>
      </Screen>
    )
  }
}

export default Index