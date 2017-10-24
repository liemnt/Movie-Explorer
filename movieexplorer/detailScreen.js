import React, {Component} from 'react';
import {
    TouchableHighlight, Image, AppRegistry,
    StyleSheet, Text, View
} from 'react-native';
import api from './api.js';

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        api.view(this.props.navigation.state.params.movieId).then((data) => {
            this.setState(data);
            console.log('DetailData', data);
        });
    }

    saperator() {
        return (
            <View style={{height: 1, backgroundColor: 'lightgray', margin: 5}}/>
        );
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <View style={{flex: 1}}>
                    <Image style={styles.image}
                           source={{uri: `http://image.tmdb.org/t/p/w185/${this.state.poster_path}`}}/>
                    <Text style={styles.subTitle}>Tagline: {this.state.tagline}</Text>
                    <Text style={styles.subTitle}>Vote Average: {this.state.vote_average}</Text>
                </View>
                <View style={{flex: 2, padding: 10}}>
                    <Text style={styles.title}>{this.state.title} ({this.state.release_date})</Text>
                    {this.saperator()}
                    <Text>Released: {this.state.Released} [{this.state.release_date}]</Text>
                    {this.saperator()}
                    <Text>{this.state.overview}</Text>
                    {this.saperator()}
                    <Text>Tag line: {this.state.tagline}</Text>
                    {this.saperator()}
                    <Text>Revenue: {this.state.revenue} USD</Text>
                    {this.saperator()}
                    <Text>Popularity: {this.state.popularity}</Text>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 70,
        flexDirection: 'row'
    },
    image: {
        height: 200
    },
    title: {
        fontSize: 25
    },
    subTitle: {
        fontSize: 20
    }
});

export default DetailScreen;