import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { memo } from 'react'

type Props = {
  image: String,
  name: String,
  status: String,
  species: String,
  gender: String,
  nameOfOrigin: String,
  nameOfLocation: String,
  episodes: Array
}

export class Screen extends React.Component<Props> {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

  render() {
    const { 
      image, 
      name, 
      status, 
      species, 
      gender, 
      nameOfOrigin, 
      nameOfLocation, 
      episodes 
    } = this.props;

    return (
    <View style={styles.mainView}>
      <Image style={styles.image} source={{ uri: image }} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rowView}>
          <Text style={styles.title}>İsim: </Text>
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.title}>Durum: </Text>
          <Text style={styles.text}>{status}</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.title}>Tür: </Text>
          <Text style={styles.text}>{species}</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.title}>Cinsiyet: </Text>
          <Text style={styles.text}>{gender}</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.title}>Menşei: </Text>
          <Text style={styles.text}>{nameOfOrigin}</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.title}>Konum: </Text>
          <Text style={styles.text}>{nameOfLocation}</Text>
        </View>

        <View style={styles.columnView}>
          <Text style={styles.title}>Oynadığı Bölümler: </Text>
          <Text style={styles.text}>{episodes}</Text>
        </View>
      </ScrollView>
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
    margin: 15,
    width: 210,
    height: 260
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
  columnView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  text:{
    fontSize: 16,
    fontWeight: '600'
  }
})

export default memo(Screen)