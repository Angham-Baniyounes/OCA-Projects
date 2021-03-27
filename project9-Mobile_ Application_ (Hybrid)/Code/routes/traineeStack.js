import { createStackNavigator } from "react-navigation-stack";
import Trainee from "../screens/trainee";
import TraineeDetails from "../component/traineeDetails";
import Header from "../shared/header";
import React from "react";

const screens = {
  Trainee: {
    screen: Trainee,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header icon="users" title="Trainees" navigation={navigation} />
        ),
      };
    },
  },
  TraineeDetails: {
    screen: TraineeDetails,
    navigationOptions: {
      title: "Trainee Details",
    },
  },
};

const TraineeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#f3690d",
    headerStyle: { backgroundColor: "black", height: 110 },
  },
});

export default TraineeStack;
