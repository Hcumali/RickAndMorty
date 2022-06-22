import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as RootNavigation from 'navigation/RootNavigation';

type Props = {
  name: String,
  episode: String,
  date: String
}

export class Index extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, episode, date } = this.props;

    return (
      <TouchableOpacity onPress={() => RootNavigation.navigate("PostDetail", {test: "testt235"})} style={{margin: 5}}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.boldText}>{name}</Text>
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
    backgroundColor: '#B4F2B6'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "50%",
  },
  imageView: {
    alignItems: 'center',
    height: "100%",
    width: "50%",
  },
  image: {
    marginTop: 5,
    width: 150,
    height: 190
  },
  boldText: {
    fontSize: 19,
    fontWeight: 'bold'
  }
})

export default Index