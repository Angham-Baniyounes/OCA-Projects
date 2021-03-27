import React from "react";
import { StyleSheet, View, Text, Image, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function TrainerScreen({ navigation }) {
  return (
    <View style={styles.fullView}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{ uri: navigation.getParam("image") }}
            style={styles.profileImg}
          />
          <View style={styles.contant}>
            <Text style={styles.title}>About Trainer:</Text>
            <Text>
              <Text style={styles.subtitle}>Name :</Text> {"\t"}
              {navigation.getParam("name")}{" "}
            </Text>
            <Text>
              <Text style={styles.subtitle}>Job Title : </Text>
              {"\t"} {navigation.getParam("job_title")}{" "}
            </Text>
            <Text>
              <Text style={styles.subtitle}>About : </Text>
              {"\t"} {navigation.getParam("about")}{" "}
            </Text>
          </View>
          <View style={styles.icons}>
            <Text
              onPress={() => {
                Linking.openURL(`tel: ${navigation.getParam("mobile")}`);
              }}
            >
              <Icon name="phone" size={40} color="#FF6600" />
            </Text>
            <Text
              onPress={() => {
                Linking.openURL(`${navigation.getParam("linkedin")}`);
              }}
            >
              <Icon name="linkedin" size={40} color="#FF6600" />
            </Text>
            <Text
              onPress={() => {
                Linking.openURL(`mailto: ${navigation.getParam("email")}`);
              }}
            >
              <Icon name="envelope" size={40} color="#FF6600" />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  fullView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#222",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 18,
    marginVertical: 10,
    height: 500,
    resizeMode: "cover",
    borderRadius: 6,
    marginTop: 10,
    elevation: 3,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
  },
  card: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  contant: {
    paddingTop: 8,
    paddingLeft: 8,
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  profileImg: {
    borderRadius: 8,
    width: 360,
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6600",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF6600",
    marginBottom: 5,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
