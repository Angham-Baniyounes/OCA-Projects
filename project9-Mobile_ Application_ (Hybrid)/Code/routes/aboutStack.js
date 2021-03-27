import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header icon="address-book" title="About" navigation={navigation} />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#f3690d",
    headerStyle: { backgroundColor: "black", height: 110 },
  },
});

export default AboutStack;
