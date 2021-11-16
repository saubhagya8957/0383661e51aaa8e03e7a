import React, { Component } from "react";
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import styles from './AsteroidListScreenStyle';


interface Props {
    navigation: any;
    id: string;
    route: any;
}

interface S {
    asteroidData: any;
    asteroidDataList: any;
}

interface SS {
    id: any
}

class AsteroidListScreen extends Component<Props, S, SS> {
    constructor(props: Props) {
        super(props);
        this.state = {
            asteroidData: this.props.route.params.asteroidDataList,
            asteroidDataList: [],
        }
    }

    componentDidMount = () => {
        console.log('@@@ Asteroid Params Response ===========', this.props.route.params.asteroidData);
    }

    componentWillUnmount = () => {

    }

    renderAsteroidCell = (item: any, index: any) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AsteroidDetailScreen', { asteroidDetail: item })} style={styles.asteroidDataCell}>
                <Text style={styles.key}>Name: {item.name}</Text>
                <Text style={styles.key}>NASA JPL URL: {item.nasa_jpl_url}</Text>
                <Text style={styles.key}>IS POTENTIALLY HAZARDOUS ASTEROID: {String(item.is_potentially_hazardous_asteroid)}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.asteroidData}
                    renderItem={({ item, index }) => this.renderAsteroidCell(item, index)}
                    keyExtractor={(item) => item.id}
                    extraData={this.state}
                />
            </SafeAreaView>
        );
    }
}

export default AsteroidListScreen;