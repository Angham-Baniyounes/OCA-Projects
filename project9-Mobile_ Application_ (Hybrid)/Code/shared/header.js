import React from "react";
import { StyleSheet, Text, ImageBackground, View, Image,TouchableWithoutFeedback,
  Keyboard } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function Header({ navigation, title, icon }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dis')
    }}>
    <ImageBackground style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/logo1.jpg")}
          style={styles.headerImg}
        />
        <FontAwesome name={icon} size={28} style={styles.iconHeader} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    flexDirection: "row",
    marginHorizontal: 30,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 30,
    color: "#eee",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
    color: "#eee",
  },
  iconHeader: {
    color: "#eee",
    paddingTop: 30,
    marginHorizontal: 10,
  },
  headerImg: {
    width: 100,
    height: 88,
    marginHorizontal: 30,
    position: "relative",
    bottom: 6,
  },
});
