import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Card from "../shared/cardTrainers";

const trainersApi = "https://mohammed-aljasem.000webhostapp.com/api/gettrainers.php?trainers";

export default function Trainers({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetch(trainersApi)
      .then((res) => res.json())
      .then((json) => {
        setTrainers(json);
      })
      .catch((error) => alert(error))
      .finally(setLoading(false))
  })
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (<ActivityIndicator />) : (
      <View style={styles.container}>
        <FlatList
          data={trainers}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("TrainerScreen", item)}
            >
              <Card>
                <Image
                  source={{ uri: item.image }} 
                  style={styles.imgStyle}
                />
                <Text style={styles.text}>{item.name}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
  },
  paragraph: {
    margin: 50,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "coral",
  },
  imgStyle: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 5,
    borderRadius: 100 / 2,
  },
  text: {
    color: "#FF6600",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 30,
    margin: 22,
  },
});
