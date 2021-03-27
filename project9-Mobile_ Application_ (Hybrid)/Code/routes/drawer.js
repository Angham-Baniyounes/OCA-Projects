import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import TraineeStack from "./traineeStack";
import TrainersStack from "./trainersStack";
import GalleryStack from "./galleryStack";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Trainee: {
    screen: TraineeStack,
  },
  Trainers: {
    screen: TrainersStack,
  },
  About: {
    screen: AboutStack,
  },
  Gallery: {
    screen: GalleryStack,
  },
});
export default createAppContainer(RootDrawerNavigator);
