import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showBack } = this.props;

        const backButtonHitSlop = {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        };

        if (showBack) {
            return (
                <View style={styles.container}>
                    <Icon name='qr-code-sharp' size={26} />
                    <Text style={styles.rickMorty}>Rick And Morty</Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text>Work</Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgb(255,255,255)",
      height: 65,
      padding: 18,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    rickMorty: {
        fontWeight: 'bold',
        color: 'green'
    }
});

export default Header