import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Screen from "components/Screen/Index";
import Episode from "components/Episode/Index";

export class Index extends Component {
  render() {
    return (
      <Screen showHeader={true} >
        <View>
          <Episode name={"Pilot"} episode={"5. Bölüm"} date={"5 Haziran 2021"} />
        </View>
      </Screen>
    )
  }
}

export default Index