import React, { Component } from "react";
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './AsteroidDetailScreenStyle';


interface Props {
    navigation: any;
    id: string;
    route: any;
}

interface S {
}

interface SS {
    id: any
}

class AsteroidDetailScreen extends Component<Props, S, SS> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
    }

    componentWillUnmount = () => {

    }

    render() {
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid, id } = this.props.route.params.asteroidDetail;
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

export default AsteroidDetailScreen;