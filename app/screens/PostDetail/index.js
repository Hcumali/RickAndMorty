import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Screen from 'components/Screen/Index'

export class Index extends Component {
  constructor(props) {
    super();
    this.state = {
      test: null
    };
  }

  // Reach Parameter: this.props.route.params

  componentDidMount() {
    console.log("post url: ", this.props.route.params.url);
  }

  render() {
    return (
      <Screen showHeader={true} showBack contentStyle={{alignItems: 'center'}} >
        <View>
          <Text>Post Detail Screen</Text>
        </View>
      </Screen>
    )
  }
}

export default Index