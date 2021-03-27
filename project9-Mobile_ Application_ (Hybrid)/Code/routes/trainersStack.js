import { createStackNavigator } from "react-navigation-stack";
import Trainers from "../screens/trainers";
import TrainerScreen from "../screens/trainerScreen";
import Header from "../shared/header";
import React from "react";

const screens = {
  Trainers: {
    screen: Trainers,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header icon="wechat" title="Our Trainers" navigation={navigation} />
        ),
      };
    },
  },
  TrainerScreen: {
    screen: TrainerScreen,
    navigationOptions: {
      title: "Trainer Profile",
    },
  },
};

const TrainersStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#f3690d",
    headerStyle: { backgroundColor: "black", height: 110 },
  },
});

export default TrainersStack;
