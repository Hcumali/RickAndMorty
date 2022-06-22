import { Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React, { Component } from 'react'
import Screen from 'components/Screen/Index'
import Character from "components/Character/Index";
import api from 'api/Index';

export class Index extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: false,
      episode: null,
      episodeName: null,
      episodeDate: null,
      characters: []
    };
  }

  componentDidMount() {
    this.getEpisodeData()
  }

  getEpisodeData() {
    this.setState({
      loading: true
    })

    api.requestWithURL(this.props.route.params.url)
    .then((res) => {
      this.setState({
        episode: res.episode,
        episodeName: res.name,
        episodeDate: res.air_date,
        characters: res.characters
      });
    })
    .finally(() => {
      this.setState({
        loading: false
      })
    });
  }

  renderItem = ({item}) => {
    return(
      <View style={styles.characterView}>
        <Character characterUrl={item} />
      </View>
    );
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    const { loading, episode, episodeName, episodeDate, characters } = this.state;

    return (
      <Screen showHeader={true} showBack contentStyle={{alignItems: 'center'}} >
        <Text style={styles.boldText}>{episode}</Text>
        <Text style={styles.boldText}>{episodeName}</Text>
        <Text style={styles.boldText}>{episodeDate}</Text>
        <Text style={styles.boldTextS}>Characters</Text>
        {
          loading ?
          <ActivityIndicator size="large" color="#00ff00" />
          :
          <FlatList 
            contentContainerStyle={styles.flatList}
            data={characters}
            renderItem={this.renderItem}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={this.keyExtractor}
          />
        }
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  flatList: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%'
  },
  characterView: {
    margin: 6,
    padding: 5
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  boldTextS: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  }
})

export default Index