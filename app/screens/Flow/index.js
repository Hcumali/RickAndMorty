import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import Screen from "components/Screen/Index";
import Button from "components/Button/Index";
import Episode from "components/Episode/Index";
import api from 'api/Index';


export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEpisodes: null,
      nextPage: null,
      episodes: [],
      loading: false,
      refreshPage: false
    };
  }

  componentDidMount() {
    this.getFirstData()
  }

  repeatFunction = () => {
    this.setState({
      refreshPage: true
    }, () => {
      this.getFirstData()
    })
  }

  //#region Functions

  getFirstData() {
    api.getFirstPageEpisodes()
    .then((res) => {
      this.setState({
        numberOfEpisodes: res.info.count,
        nextPage: res.info.next,
        episodes: res.results
      });
    })
    .finally(() => {
      this.setState({
        refreshPage: false
      });
    });
  }

  loadMoreData = () => {
    const { nextPage, episodes } = this.state;

    var tempArr = episodes;

    if (nextPage != null) {
      this.setState({loading: true});

      api.requestWithURL(nextPage)
      .then((res) => {
        this.setState({
          nextPage: res.info.next
        })

        res.results.forEach(item => {
          tempArr.push(item)
        });
      })
      .finally(() => {
        this.setState({
          episodes: tempArr,
          loading: false
        })
      });
    }
  }

  renderItem = ({item}) => {
    return(
      <Episode name={item.name} episode={item.episode} date={item.air_date} episodeUrl={item.url} />
    );
  }

  keyExtractor = (item, index) => index.toString()

  ListFooterComponent = () => {
    const { nextPage } = this.state;

    return(
      nextPage != null ?
      <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 9}}>
        <Button name={"Daha Fazla Göster"} onPress={this.loadMoreData} />
      </View>
      :
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.boldText}>SON</Text>
      </View>
    )
  }

  //#endregion

  render() {
    const { numberOfEpisodes, nextPage, episodes, loading, refreshPage } = this.state;

    return (
      <Screen showHeader={true} showRepeat repeatFunction={() => this.repeatFunction()} contentStyle={{alignItems: 'center'}} >
        <Text style={styles.boldText}>{numberOfEpisodes} adet bölüm bulundu.</Text>
        <FlatList
            data={episodes}
            renderItem= {this.renderItem}
            keyExtractor={this.keyExtractor}
            ListFooterComponent={this.ListFooterComponent}
            refreshing={refreshPage}
            onRefresh={() => this.repeatFunction()}
        />
        {
          loading ?
          <ActivityIndicator size="large" color="#00ff00" />
          :
          null
        }
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 9
  }
})

export default Index