import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'

type Props = {

}

export class Screen extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  render() {
    return (
      <View>
        <Text>Character Screen Component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mainView:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 135
    },
    text:{
        fontSize: 14,
        fontWeight: '600',
        width:100
    }
})

export default memo(Screen)