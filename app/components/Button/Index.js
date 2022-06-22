import { Text, View, StyleSheet, Pressable } from 'react-native'
import React, { memo } from 'react'

type Props = {
    name: String,
    onPress: Function
}

export class Index extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render(){
    const { name, onPress } = this.props;

    return(
      <Pressable onPress={() => onPress()}>
        <View style={styles.buttonView}>
          <Text style={styles.boldText}>
            {name}
          </Text>
        </View>
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: 'green',
    alignItems: 'center', 
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 10, 
    borderRadius: 15,
    width: '50%'
  },
  boldText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default memo(Index)