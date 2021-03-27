import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  Linking,
  Image,
  ScrollView,
} from "react-native";
import Card from "../shared/team";
import Icon from "react-native-vector-icons/FontAwesome";

export default function About() {
  const [developer1] = useState([
    {
      name: "Taima Alfokaha",
      title: "Scrum master",
      img:
        "https://avatars.githubusercontent.com/u/71769659?s=460&u=f79c2bdf655b094836b60d58a15f4a478631e827&v=4",
      github: "https://github.com/alfokaha-taima",
      linkedin:
        "https://www.linkedin.com/in/taima%E2%80%99-al-fokaha%E2%80%99/",
    },
    {
      name: "Aya Abd Al-Jawad",
      title: "Developer",
      img:
        "https://avatars.githubusercontent.com/u/71769818?s=460&u=e3a9a3d9cff6f73a33c125b90b1bfa90558021a0&v=4",
      github: "https://github.com/Abdaljawad-Ayah",
      linkedin: "https://www.linkedin.com/in/ayah-imad/",
    },
    {
      name: "Mohammed Jasem",
      title: "Developer",
      img:
        "https://avatars.githubusercontent.com/u/71584041?s=460&u=a31e9887c7d7dc63c49faaa02b2cda542dbadda7&v=4",
      github: "https://github.com/Mohammed-Aljasem",
      linkedin: "https://www.linkedin.com/in/mohammed-aljasem/",
    },
  ]);
  const [developer2] = useState([
    {
      name: "Lubna Almaaweed",
      title: "Product Owner",
      img:
        "https://avatars.githubusercontent.com/u/71769638?s=460&u=02a32c80f5535ee8baf5d5146445aed584d1af22&v=4",
      github: "https://github.com/lubna-almaaweed",
      linkedin: "https://www.linkedin.com/in/lubna-almaaweed/",
    },
    {
      name: "Jenan A. Musallam",
      title: "Developer",
      img:
        "https://avatars.githubusercontent.com/u/71584331?s=460&u=59e7fe47593366524b5851eeb4a6e4cd4fba1799&v=4",
      github: "https://github.com/Jenanmusallam",
      linkedin: "https://www.linkedin.com/in/jenan-musallam/",
    },
    {
      name: "Angham Bani Younes",
      title: "Developer",
      img:
        "https://avatars.githubusercontent.com/u/71583926?s=460&u=290e3c7e943e0eea053b4bb1c89607207d67163a&v=4",
      github: "https://github.com/Angham-Baniyounes",
      linkedin: "https://www.linkedin.com/in/angham-baniyounes/",
    },
  ]);
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.container1}>
          <Text style={style.titleHeader}>About Us</Text>
          <Text style={style.desc}>
            We Address the local and global markets’ needs for qualified
            programmers by Offering The coding academy Trainees the chance to
            start a career in programming .
          </Text>
        </View>
        <Text style={{ color: "white" }}>
          _______________________________________________________
        </Text>
        <Text style={style.titleTeam}>Team</Text>
        <View style={style.container2}>
          <FlatList
            data={developer1}
            renderItem={({ item }) => (
              <View style={style.container3}>
                <Card>
                  <Image style={style.cardImage} source={{ uri: item.img }} />
                  <Text style={style.titleText}>{item.name}</Text>
                  <Text style={style.Text}>{item.title}</Text>
                  <View style={style.titleIcon}>
                    <Text>
                      <Icon
                        onPress={() => {
                          Linking.openURL(`${item.github}`);
                        }}
                        name="github"
                        color="#FF6600"
                        size={35}
                      ></Icon>
                    </Text>
                    <Text>
                      <Icon
                        onPress={() => {
                          Linking.openURL(`${item.linkedin}`);
                        }}
                        name="linkedin"
                        color="#FF6600"
                        size={35}
                      ></Icon>
                    </Text>
                  </View>
                </Card>
              </View>
            )}
          />
          <FlatList
            data={developer2}
            renderItem={({ item }) => (
              <View style={style.container3}>
                <Card>
                  <Image style={style.cardImage} source={{ uri: item.img }} />
                  <Text style={style.titleText}>{item.name}</Text>
                  <Text style={style.Text}>{item.title}</Text>
                  <View style={style.titleIcon}>
                    <Text>
                      <Icon
                        onPress={() => {
                          Linking.openURL(`${item.github}`);
                        }}
                        name="github"
                        color="#FF6600"
                        size={35}
                      ></Icon>
                    </Text>
                    <Text>
                      <Icon
                        onPress={() => {
                          Linking.openURL(`${item.linkedin}`);
                        }}
                        name="linkedin"
                        color="#FF6600"
                        size={35}
                      ></Icon>
                    </Text>
                  </View>
                </Card>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  modalContent: {
    flex: 2,
  },
  titleHeader: {
    color: "#FF6600",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    textAlign: "center",
  },
  titleTeam: {
    color: "#FF6600",
    fontWeight: "bold",
    fontSize: 30,
    margin: 10,
    textAlign: "center",
  },
  desc: {
    color: "#eee",
    borderRadius: 20,
    margin: 9,
    marginTop: 15,
    fontSize: 18,
    textAlign: "left",
    height: 110,
  },
  Card: {
    backgroundColor: "#fff",
    marginBottom: 20,
    width: "50%",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    width: 173,
    height: 170,
    resizeMode: "cover",
    position: "relative",
    bottom: 21,
    borderRadius: 6,
    right: 10,
  },
  titleText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    height: 30,
  },
  Text: {
    color: "#FF6600",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    height: 30,
  },
  titleIcon: {
    color: "#FF6600",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 34,
  },
  container: {
    padding: 25,
    backgroundColor: "#222",
  },
  container1: {
    flex: 1,
  },
  container2: {
    flex: 2,
    flexDirection: "row",
  },
  container3: {
    flex: 1,
    height: 320,
  },
});
