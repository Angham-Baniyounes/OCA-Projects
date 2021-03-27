import { createStackNavigator } from "react-navigation-stack";
import Gallery from "../screens/gallery";
import Header from "../shared/header";
import React from "react";

const screens = {
  Gallery: {
    screen: Gallery,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header icon="image" title="Gallery" navigation={navigation} />
        ),
      };
    },
  },
};

const GalleryStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#f3690d",
    headerStyle: { backgroundColor: "black", height: 110 },
  },
});

export default GalleryStack;
