import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import * as RootNavigation from 'navigation/RootNavigation';

type Props = {
  name: String,
  episode: String,
  date: String,
  episodeUrl: String
}

export class Index extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, episode, date, episodeUrl } = this.props;

    return (
      <TouchableOpacity onPress={() => RootNavigation.navigate("PostDetail", {url: episodeUrl})}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.boldTextForName}>{name}</Text>
            <Text style={styles.boldText}>{episode}</Text>
            <Text style={styles.boldText}>{date}</Text>
          </View>
          <View style={styles.imageView}>
            <Image 
              source={require('../../assets/images/RickAndMorty.jpg')} 
              style={styles.image} 
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#B4F2B6',
    margin: 10
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "50%",
  },
  imageView: {
    alignItems: 'center',
    width: "50%",
  },
  image: {
    width: 150,
    height: 190,
    marginVertical: 3
  },
  boldText: {
    fontSize: 15,
    fontWeight: '500'
  },
  boldTextForName: {
    fontWeight: 'bold'
  }
})

export default memo(Index)