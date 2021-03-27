import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    flex: 1,
    margin: 10,
    marginTop: 6,
    elevation: 3,
    backgroundColor: "#F2F2F2",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "coral",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
