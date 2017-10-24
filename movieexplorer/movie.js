import React, {Component} from 'react';
import {
    StatusBar, TouchableHighlight,
    AppRegistry, StyleSheet, Text, View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import ListScreen from './listScreen.js';
import DetailScreen from './detailScreen.js';

const RootNavigator = StackNavigator({
    ListScreen: {
        screen: ListScreen,
    },
    DetailScreen: {
        screen: DetailScreen,
    },
});
class l8_movie extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="darkred"
                    barStyle="light-content"
                />
                <RootNavigator/>
            </View>
        );
    }
}


export default l8_movie;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigationBar: {
        backgroundColor: 'darkred',
    },
    navigationBarText: {
        color: 'white',
        padding: 10,
        fontSize: 15
    },
    titleText: {
        fontSize: 20,
        paddingTop: 5
    }

});

AppRegistry.registerComponent('movieexplorer', () => l8_movie);
