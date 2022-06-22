import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import * as RootNavigation from 'navigation/RootNavigation';

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showBack, showRepeat, repeatFunction } = this.props;

        const backButtonHitSlop = {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        };

        if (showBack) {
            return (
                <View style={styles.container1}>
                    <View>
                        <TouchableOpacity onPress={() => RootNavigation.goBack()}>
                            <View>
                                <Icon name='caret-back-sharp' color={"black"} size={24} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => RootNavigation.navigate("Flow")}>
                            <View>
                                <Text style={styles.rickMorty}>Rick And Morty</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        if (showRepeat) {
            return (
                <View style={styles.container1}>
                    <View>
                        <TouchableOpacity onPress={() => repeatFunction()}>
                            <View>
                                <Icon name='repeat' color={"black"} size={27} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => RootNavigation.navigate("Flow")}>
                            <View>
                                <Text style={styles.rickMorty}>Rick And Morty</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.container2}>
            <View>
                <Text style={styles.rickMorty}>Rick And Morty</Text>
            </View>
        </View>
        );

    }
}

const styles = StyleSheet.create({
    container1: {
      backgroundColor: "#A2E5DA",
      height: 65,
      padding: 18,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    container2: {
        backgroundColor: "#A2E5DA",
        height: 65,
        padding: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    rickMorty: {
        fontWeight: 'bold',
        color: 'green'
    }
});

export default Header