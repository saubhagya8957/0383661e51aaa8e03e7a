import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreenComponent from "../SplashComponent/SplashComponent";
import AsteroidDashboard from '../AsteroidDashboard/AsteroidDashboard';
import AsteroidDataList from '../AsteroidDataList/AsteroidDataList';
import AsteroidListScreen from '../AsteroidListScreen/AsteroidListScreen';
import AsteroidDetailScreen from '../AsteroidDetailScreen/AsteroidDetailScreen';

const RootStackNavigator = createNativeStackNavigator();


const RootStackScreenFlow = () => {
    return (
        <RootStackNavigator.Navigator>
            <RootStackNavigator.Screen options={{ headerShown: false }} component={SplashScreenComponent} name={"SplashScreenComponent"} />
            <RootStackNavigator.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid Dashboard',
                    headerTitleAlign: 'center',
                    headerShown: false,
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })}
                name={"AsteroidDashboard"}
                component={AsteroidDashboard}
            />
            <RootStackNavigator.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid Data List',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })}
                name={"AsteroidDataList"}
                component={AsteroidDataList}
            />
            <RootStackNavigator.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid List Screen',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })}
                name={"AsteroidListScreen"}
                component={AsteroidListScreen}
            />
            <RootStackNavigator.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid Detail Screen',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })}
                name={"AsteroidDetailScreen"}
                component={AsteroidDetailScreen}
            />
        </RootStackNavigator.Navigator>
    )
};

export default RootStackScreenFlow;