import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Screen from "components/Screen/Index";
import { CommonActions } from "@react-navigation/native";

const image = { uri: "https://wallpaperaccess.com/full/793614.jpg" };


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.routeToMain()
  }

  routeToMain = () => {
    const { navigation } = this.props;

    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: "Flow" }],
    });

    setTimeout(function() {
      navigation.dispatch(resetAction);
    }, 1800);
  };

  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>Rick And Morty</Text>
          </ImageBackground>
        </View>
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%"
  },
  text: {
    color: "#A7C77D",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});