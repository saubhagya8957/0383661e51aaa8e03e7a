import React, { Component } from "react";
import { View, SafeAreaView, Text } from 'react-native';
import styles from './SplashComponentStyle';


interface Props {
    navigation: any;
    id: string;
}

interface S {

}

interface SS {
    id: any
}

class SplashScreenComponent extends Component<Props, S, SS> {
    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.replace('AsteroidDashboard');
        }, 1000);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.appText}>Welcome to Asteroid App</Text>
            </SafeAreaView>
        );
    }
}

export default SplashScreenComponent;