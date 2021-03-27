import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Trainee({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.cardImage2}
              source={{ uri: navigation.getParam("image") }}
            />
          </View>
          <Text style={styles.titleText}>{navigation.getParam("name")}</Text>
          <Text style={{ ...styles.titleText, ...styles.titleText1 }}>
            {navigation.getParam("title")}
          </Text>
          <Text style={styles.text}>{navigation.getParam("description")}</Text>
          <View style={styles.skills}>
            <Text
              style={{
                backgroundColor: "#47ffcc",
                borderRadius: 5,
                width: 80,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              HTML
            </Text>
            <Text
              style={{
                backgroundColor: "#fff05a",
                borderRadius: 5,
                width: 80,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              CSS
            </Text>
            <Text
              style={{
                backgroundColor: "#ffd39c",
                borderRadius: 5,
                width: 80,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              JavaScript
            </Text>
            <Text
              style={{
                backgroundColor: "#ff7d51",
                borderRadius: 5,
                width: 80,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              React
            </Text>
            <Text
              style={{
                backgroundColor: "#ff9f9f",
                borderRadius: 5,
                width: 80,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              MernStack
            </Text>
            <Text
              style={{
                backgroundColor: "#e59cff",
                borderRadius: 5,
                width: 80,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              Python
            </Text>
            <Text
              style={{
                backgroundColor: "#ffad92",
                borderRadius: 5,
                width: 80,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              GitHup
            </Text>
            <Text
              style={{
                backgroundColor: "#83b799",
                borderRadius: 5,
                width: 80,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              WordPress
            </Text>
            <Text
              style={{
                backgroundColor: "#fbd266",
                borderRadius: 5,
                width: 90,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              React-Native
            </Text>
            <Text
              style={{
                backgroundColor: "#8fb0a9",
                borderRadius: 5,
                width: 80,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              Php
            </Text>
            <Text
              style={{
                backgroundColor: "#38ddd9",
                borderRadius: 5,
                width: 80,
                padding: 3,
                margin: 5,
                textAlign: "center",
              }}
            >
              Laravel
            </Text>
          </View>
          <View style={styles.Iconcontainer}>
            <View>
              <Text
                style={styles.hyperlinkStyle}
                onPress={() => {
                  Linking.openURL("github");
                }}
              >
                <Icon name="github" size={50} color="#FF6600" />
              </Text>
            </View>
            <View>
              <Text
                style={styles.hyperlinkStyle}
                onPress={() => {
                  Linking.openURL(`${navigation.getParam("linkedIn")}`);
                }}
              >
                <Icon name="linkedin" size={50} color="#FF6600" />
              </Text>
            </View>
            <View>
              <Text
                onPress={() => {
                  Linking.openURL(`tel: ${navigation.getParam("number")}`);
                }}
              >
                <Icon name="phone" size={50} color="#FF6600" />
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 10,
    flex: 1,
    backgroundColor:'#333'
  },
  cardImage2: {
    width: "94%",
    height: 370,
    resizeMode: "cover",
    marginLeft:12,
    borderRadius:10,
    marginTop:10
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    height: "100%",
    shadowColor: "#FFFFFF",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderRadius:5,
  },
  titleText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
    textAlign: "center",
    color: "#FF6600",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 9,
    marginTop: 9,
  },
  titleText1: {
    fontWeight: "normal",
    fontSize: 18,
    fontWeight: "bold",
  },
  Iconcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  skills: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    flexWrap: "wrap",
  },
  skillsText: {
    color: "#fff",
    padding: 8,
    margin: 5,
  },
});
