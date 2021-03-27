import React from "react";
import { View, ScrollView } from "react-native";
// import Footer from "../shared/footer";
import Slider from "../component/slider";
import Category from "../component/category";
// import Search from "./search";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View>
        {/* <Footer navigation={navigation} /> */}
        <Slider />
        <Category navigation={navigation} />
        {/* <Search/> */}
      </View>
    </ScrollView>
  );
}
