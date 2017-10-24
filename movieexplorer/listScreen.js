import React, {Component} from 'react';
import {TouchableOpacity, AppRegistry, ListView, StyleSheet, Text, View, Image} from 'react-native';
import api from './api';

class ListScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }
        );
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
        api.search('batman').then((data) => {
            console.log(data);
            this.setState({dataSource: ds.cloneWithRows(data)});
        });
    }

    render() {
        // console.log(this.state.dataSource);
        return (
            <ListView style={styles.container}
                      dataSource={this.state.dataSource}
                      enableEmptySections={true}
                      renderRow={(rowData) => {
                          console.log('rowData', rowData);
                          const {navigate} = this.props.navigation;
                          return (

                              <TouchableOpacity onPress={() => {
                                  navigate('DetailScreen', {movieId: rowData.id});
                              }

                              }>
                                  <View style={styles.row}>
                                      <View style={{flex: 3}}>
                                          <Image style={styles.image}
                                                 source={{uri: `http://image.tmdb.org/t/p/w185/${rowData.poster_path}`}}/>
                                      </View>
                                      <View style={{flex: 10, padding: 10}}>
                                          <Text style={styles.title}>{rowData.title} ({rowData.release_date})</Text>
                                      </View>
                                      <View style={{flex: 1, justifyContent: 'center'}}>
                                          <Text style={styles.title}>></Text>
                                      </View>
                                  </View>
                              </TouchableOpacity>
                          )
                      }

                      }
                      renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
                          <View key={rowID} style={{height: 1, backgroundColor: 'lightgray'}}/>
                      }
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 65,
        flex: 1
    },
    row: {
        flexDirection: 'row',
        height: 100
    },
    image: {
        height: 100
    },
    title: {
        fontSize: 20
    }
});

export default ListScreen;