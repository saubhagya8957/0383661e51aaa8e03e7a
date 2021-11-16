import React, { Component } from "react";
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './AsteroidDataListStyle';


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

class AsteroidDataList extends Component<Props, S, SS> {
    constructor(props: Props) {
        super(props);
        this.state = {
            asteroidData: this.props.route.params.asteroidData,
            asteroidDataList: [],
        }
    }

    componentDidMount = () => {
        console.log('@@@ Asteroid Params Response ===========', this.props.route.params.asteroidData);
    }

    componentWillUnmount = () => {

    }

    render() {
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid, id } = this.state.asteroidData;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.asteroidDataCell}>
                    <Text style={styles.key}>Name: {name}</Text>
                    <Text style={styles.key}>NASA JPL URL: {nasa_jpl_url}</Text>
                    <Text style={styles.key}>IS POTENTIALLY HAZARDOUS ASTEROID: {String(is_potentially_hazardous_asteroid)}</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default AsteroidDataList;