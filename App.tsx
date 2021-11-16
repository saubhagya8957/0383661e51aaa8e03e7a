import React,  { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from './app/screens/RootStackNavigator/RootStackNavigator';

interface Props {
  navigation: any;
  id: string;
}

interface S {

}

interface SS {
  id: any
}

class App extends Component<Props, S, SS> {
  constructor(props: Props) {
      super(props);
      this.state = {

      }
  }

  componentDidMount = () => {
  }

  render() {
      return (
          <NavigationContainer>
            <RootStackNavigation />
          </NavigationContainer>
      );
  }
}

export default App;