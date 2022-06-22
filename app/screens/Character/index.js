import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import Screen from 'components/Screen/Index'
import Character from 'components/Character/Screen'
import * as js from "utils/stringFunctions/Index"
import api from 'api/Index';

export class Index extends Component {
  constructor(props) {
    super();
    this.state = {
      image: null,
      name: null,
      species: null,
      status: null,
      type: null,
      gender: null,
      nameOfOrigin: null,
      nameOfLocation: null,
      episodes: []
    };
  }

  componentDidMount() {
    this.getCharacterData()
  }

  getCharacterData() {
    var _episodes = [];

    api.requestWithURL(this.props.route.params.characterUrl)
    .then((res) => {
      res.episode.forEach(item => {
        _episodes.push(js.splitBySpecialCharacter(js.reverse(item), "/")[0])
      });
      this.setState({
        image: res.image ,
        name: res.name ,
        status: res.status ,
        species: res.species ,
        type: res.type ,
        gender: res.gender ,
        nameOfOrigin: res.origin.name ,
        nameOfLocation: res.location.name
      });
    })
    .finally(() => {
      this.setState({
        episodes: _episodes
      })
    });
  }

  render() {
    const { image, name, status, species, type, gender, nameOfOrigin, nameOfLocation, episodes } = this.state;

    return (
      <Screen showHeader={true} showBack contentStyle={{alignItems: 'center'}}>
        <Character
          image={image} 
          name={name} 
          status={status} 
          species={species} 
          gender={gender} 
          nameOfOrigin={nameOfOrigin} 
          nameOfLocation={nameOfLocation} 
          episodes={episodes} 
        />
      </Screen>
    )
  }
}

export default Index