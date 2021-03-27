import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Card from "../shared/card";
import { FontAwesome } from "@expo/vector-icons";

export default function Trainee({ navigation }) {
  
  
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
    fetch('https://mohammed-aljasem.000webhostapp.com/api/getstudents.php?students')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("TraineeDetails", item)}
      >
        <Card style={styles.card}>
          <Image style={styles.cardImage} source={{ uri: item.image}} />
          <Text style={styles.titleText}>{item.name}</Text>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    
    <View style={{ backgroundColor: "#222" }}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.inputSearch}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FontAwesome name="search" size={28} style={styles.searchIcon} />
      </View>
      <FlatList
        data={filteredDataSource}
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    
  );
}
const styles = StyleSheet.create({
  cardImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 5,
    borderRadius: 100 / 2,
  },
  titleText: {
    color: "#FF6600",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 30,
    margin: 22,
  },
  searchSection: {
    margin: 10,
  },
  // inputSearch: {
  //   backgroundColor: "#fff",
  //   color: "#000",
  //   padding: 12,
  //   position: "absolute",
  //   width: "90%",
  // },
  // searchIcon: {
  //   left: "90%",
  //   backgroundColor: "#fff",
  //   width: "9%",
  //   height: 52,
  //   padding: 5,
  // },
  inputSearch: {
    backgroundColor: "#fff",
    color: "#FF6600",
    fontSize: 18,
    padding: 12,
    position: "absolute",
    left: "9%",
    width: "90%",
  },
  searchIcon: {
    left: 1,
    backgroundColor: "#fff",
    width: "10%",
    height: 52,
    padding: 5,
    color: "#FF6600",
    paddingTop: 10,
  },
});
