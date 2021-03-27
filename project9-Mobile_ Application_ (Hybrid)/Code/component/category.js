import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Card from "../shared/cardCategory";

export default function Category({ navigation }) {
  const aboutHandler = () => {
    navigation.navigate("About");
  };
  const traineeHandler = () => {
    navigation.navigate("Trainee");
  };
  const trainersHandler = () => {
    navigation.navigate("Trainers");
  };
  const galleryHandler = () => {
    navigation.navigate("Gallery");
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.Category}>OCA</Text>
        <View style={style.container2}>
          <View
            style={{
              flexDirection: "column",
              width: "50%",
            }}
          >
            <TouchableOpacity onPress={traineeHandler}>
              <View style={style.container3}>
                <Card>
                  <Image
                    style={style.cardImage}
                    source={{
                      uri:
                        "https://img.icons8.com/color/70/000000/coworking.png",
                    }}
                  />
                  <Text style={style.titleText}>Trainees</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={aboutHandler}>
              <View style={style.container3}>
                <Card>
                  <Image
                    style={style.cardImage}
                    source={{
                      uri: "https://img.icons8.com/color/70/000000/cottage.png",
                    }}
                  />
                  <Text style={style.titleText}>About us</Text>
                </Card>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "column",
              width: "50%",
              marginHorizontal: 5,
            }}
          >
            <TouchableOpacity onPress={trainersHandler}>
              <View style={style.container3}>
                <Card>
                  <Image
                    style={style.cardImage}
                    source={{
                      uri:
                        "https://img.icons8.com/color/70/000000/administrator-male.png",
                    }}
                  />
                  <Text style={style.titleText}>Trainers</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={galleryHandler}>
              <View style={style.container3}>
                <Card>
                  <Image
                    style={style.cardImage}
                    source={{
                      uri: "https://cesar.esa.int/images/icon_gallery2.png",
                    }}
                  />
                  <Text style={style.titleText}>Gallery</Text>
                </Card>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  Category: {
    color: "#f87501",
    color: "#000",
    margin: 4,
    fontWeight: "bold",
    fontSize: 25,
    backgroundColor: "#fff",
    // borderBottomLeftRadius: 40,
    // borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  Card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    backgroundColor: "white",
    flexBasis: "42%",
    marginHorizontal: 10,
  },
  cardImage: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  titleText: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#000",
    fontWeight: "bold",
  },
  container: {
    padding: 25,
    backgroundColor: "#f87501",
    // backgroundColor: "##f87501",
  },
  container1: {
    flex: 1,
  },
  container2: {
    flex: 2,
    flexDirection: "row",
  },
});
