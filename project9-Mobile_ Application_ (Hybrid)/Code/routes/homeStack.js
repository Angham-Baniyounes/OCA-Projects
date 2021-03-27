import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header icon="home" title="Home" navigation={navigation} />
        ),
      };
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#f3690d",
    headerStyle: { backgroundColor: "black", height: 110 },
  },
});

export default HomeStack;
