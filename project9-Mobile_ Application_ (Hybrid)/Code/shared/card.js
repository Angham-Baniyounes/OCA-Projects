import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1, flexDirection: "row" }}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    flex: 1,
    margin: 10,
    marginTop: 6,
    padding: 10,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#FFFFFF",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
