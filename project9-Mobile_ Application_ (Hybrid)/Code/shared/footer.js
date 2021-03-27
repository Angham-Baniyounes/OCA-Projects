// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   ImageBackground,
//   View,
//   TouchableOpacity,
// } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";

// export default function Footer({ navigation }) {
//   const homeHandler = () => {
//     navigation.push("Home");
//   };
//   const traineeHandler = () => {
//     navigation.push("Trainee");
//   };
//   const trainersHandler = () => {
//     navigation.push("Trainers");
//   };
//   const galleryHandler = () => {
//     navigation.navigate("Gallery");
//   };
//   return (
//     <ImageBackground style={styles.footer}>
//       <TouchableOpacity onPress={homeHandler}>
//         <View title="home" style={styles.footerTitle}>
//           <FontAwesome name="home" size={28} style={styles.iconHeader} />
//           <Text style={styles.footerText}>Home</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={traineeHandler}>
//         <View style={styles.footerTitle}>
//           <FontAwesome name="users" size={28} style={styles.iconHeader} />
//           <Text style={styles.footerText}>Trainees</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={trainersHandler}>
//         <View style={styles.footerTitle}>
//           <FontAwesome name="wechat" size={28} style={styles.iconHeader} />
//           <Text style={styles.footerText}>Trainers</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={galleryHandler}>
//         <View style={styles.footerTitle}>
//           <FontAwesome name="image" size={28} style={styles.iconHeader} />
//           <Text style={styles.footerText}>Gallery</Text>
//         </View>
//       </TouchableOpacity>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   footer: {
//     width: "100%",
//     height: 66,
//     flexDirection: "row",
//     backgroundColor: "#000",
//     alignItems: "center",
//     position: "relative",
//     top: 490,
//     justifyContent: "space-between",
//   },
//   footerTitle: {
//     flexDirection: "column",
//     marginHorizontal: 10,
//   },
//   footerText: {
//     fontSize: 13,
//     color: "#fff",
//     letterSpacing: 1,
//     fontWeight: "bold",
//     marginHorizontal: 6,
//   },
//   iconHeader: {
//     color: "#FF6600",
//     marginHorizontal: 15,
//     marginBottom: 7,
//     marginTop: 7,
//   },
// });
