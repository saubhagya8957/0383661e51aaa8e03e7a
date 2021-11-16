import React, { Component } from "react";
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from './AsteroidDashboardStyle';


interface Props {
    navigation: any;
    id: string;
}

interface S {
    asteroidData: any;
    asteroidValue: any;
    asteroidDataList: any;
    showLoader: boolean;
}

interface SS {
    id: any
}

class AsteroidDashboard extends Component<Props, S, SS> {
    constructor(props: Props) {
        super(props);
        this.state = {
            asteroidValue: '',
            asteroidData: null,
            asteroidDataList: [],
            showLoader: false,
        }
    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    onFindAsteroidData = async () => {
        this.setState({ showLoader: true });
        try {
            let asteroidResponse = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${this.state.asteroidValue}?api_key=o65fRk7BljKimvXXqaIqaloMrmgyOuV74vy29lP2`);
            let asteroidJson: any = await asteroidResponse.json();
            this.setState({ showLoader: false, asteroidData: asteroidJson }, () => {
                if(asteroidJson.status === 404) {
                    Alert.alert('Invalid asteroid ID, please check it again');
                    return;
                }
                this.props.navigation.navigate('AsteroidDataList', { asteroidData: this.state.asteroidData });
                console.log('@@@ Asteroid JSON Response ===========', `https://api.nasa.gov/neo/rest/v1/neo/${this.state.asteroidValue}?api_key=o65fRk7BljKimvXXqaIqaloMrmgyOuV74vy29lP2`, this.state.asteroidData);
            })
        } catch (error) {
            console.log('@@@ Error Asteroid ===========', error);
        }
    }

    onFindRandomAsteroidData = async () => {
        this.setState({ showLoader: true });
        try {
            let asteroidResponse = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=o65fRk7BljKimvXXqaIqaloMrmgyOuV74vy29lP2`);
            let asteroidJson: any = await asteroidResponse.json();
            this.setState({ showLoader: false, asteroidDataList: asteroidJson.near_earth_objects }, () => {
                if(asteroidJson.status === 404) {
                    Alert.alert('Invalid asteroid ID, please check it again');
                    return;
                }
                console.log('@@@ Asteroid Random JSON Response ===========', this.state.asteroidDataList);
                this.props.navigation.navigate('AsteroidListScreen', { asteroidDataList: this.state.asteroidDataList });
            })
        } catch (error) {
            console.log('@@@ Error Asteroid ===========', error);
        }
    }

    renderLoader = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
                <ActivityIndicator size="large" color={'#ffffff'} />
            </View>
        )
    }

    render() {
        const isSubmitDisabled = this.state.asteroidValue.trim().length === 0;
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={styles.asteroidForm}>
                        <Text style={styles.asteroidHeadingText}>Search Asteroid Data</Text>
                        <TextInput
                            testID="searchTextInputID"
                            style={styles.inputStyle}
                            placeholder={'Enter Asteroid ID'}
                            placeholderTextColor={'#ffffff'}
                            value={this.state.asteroidValue}
                            onChangeText={(value) => this.setState({ asteroidValue: value })}
                            keyboardType={'numeric'}
                        />
                        <TouchableOpacity onPress={() => this.onFindAsteroidData()} disabled={isSubmitDisabled} testID="submitButtonTestID" style={[styles.submitButtonStyle, { backgroundColor: isSubmitDisabled ? '#757575' : '#00c92f'}]}>
                            <Text style={styles.submitText}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onFindRandomAsteroidData()} testID="randomButtonTestID" style={styles.randomButtonStyle}>
                            <Text style={styles.randomText}>Random Asteroid</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
                {this.state.showLoader && this.renderLoader()}
            </SafeAreaView>
        );
    }
}

export default AsteroidDashboard;