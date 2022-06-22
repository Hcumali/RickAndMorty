import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import * as RootNavigation from 'navigation/RootNavigation';
import api from 'api/Index';

type Props = {
  characterUrl: String,
}

export class Index extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
        characterName: null,
        characterImage: null
    };
  }

  componentDidMount() {
    this.getCharacterData()
  }

  getCharacterData() {
    const { characterUrl } = this.props;

    api.requestWithURL(characterUrl).then((res) => {
        this.setState({
            characterName: res.name,
            characterImage: res.image
        })
    });
  }

  render() {
    const { characterUrl } = this.props;
    const { characterName, characterImage } = this.state;
    
    return (
      <TouchableOpacity onPress={() => RootNavigation.navigate("Character", {characterUrl: characterUrl})}>
        <View style={styles.mainView}>
          <Image style={styles.image} source={{ uri: characterImage }} />
          <Text ellipsizeMode='tail' numberOfLines={2} style={styles.text}> {characterName} </Text>
        </View>
      </TouchableOpacity>
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

export default memo(Index)