import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
  Image,
  ScrollView,
  SliderComponent,
} from "react-native";
import ImageElement from "../component/ImageElement";
export default class ImageGallery extends Component {
  state = {
    modalVisible: false,
    modalImage: require("../assets/gallery/1.jpg"),
    images: [
      require("../assets/gallery/1.jpg"),
      require("../assets/gallery/2.jpg"),
      require("../assets/gallery/3.jpg"),
      require("../assets/gallery/4.jpg"),
      require("../assets/gallery/5.jpg"),
      require("../assets/gallery/6.jpg"),
      require("../assets/gallery/7.jpg"),
      require("../assets/gallery/8.jpg"),
      require("../assets/gallery/9.jpg"),
      require("../assets/gallery/10.jpg"),
      require("../assets/gallery/11.jpg"),
      require("../assets/gallery/12.jpg"),
      require("../assets/gallery/13.jpg"),
      require("../assets/gallery/14.jpg"),
      require("../assets/gallery/15.png"),
      require("../assets/gallery/16.jpg"),
      require("../assets/gallery/17.jpg"),
      require("../assets/gallery/18.jpg"),
    ],
  };

  setModalVisible(visible, imageKey) {
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });
  }

  getImage() {
    return this.state.modalImage;
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return (
        <TouchableWithoutFeedback
          key={key}
          onPress={() => this.setModalVisible(true, key)}
        >
          <View style={styles.imagewrap}>
            <ImageElement imgsource={val}></ImageElement>
          </View>
        </TouchableWithoutFeedback>
      );
    });
    return (
      <ScrollView>
        <View style={styles.menuContainer}></View>
        <View style={styles.container}>
          <Modal
            style={styles.modal}
            animationType={"slide"}
            carousel={SliderComponent}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              document.write("Modal has been closed");
            }}
          >
            <View style={styles.modal}>
              <Text
                style={styles.text}
                onPress={() => {
                  this.setModalVisible(false);
                }}
              >
                X
              </Text>
              <ImageElement imgsource={this.state.modalImage}></ImageElement>
            </View>
          </Modal>

          {images}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    paddingTop: 50,
    backgroundColor: "#000000",
    paddingBottom: 100,
    paddingLeft: 3,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: Dimensions.get("window").height / 12 + 15,
    width: Dimensions.get("window").width / 4 + 20, // dynamic responsive height and width
    backgroundColor: "#fff",
    borderColor: "#FF6600",
    borderWidth: 1,
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.5)",
    position: "relative",
    top: 10,
    right: 143,
    width: 700,
    transform: [
      { scaleY: 0.5 },
      { scaleX: 0.5 },
      { translateX: 2 },
      { translateY: 2 },
    ],
  },

  text: {
    width: "100%",
    marginTop: 30,
    color: "#FF6600",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },

  top: {
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
    color: "orange",
  },
  header: {
    width: "100%",
    color: "#FF6600",
    fontSize: 28,
    borderColor: "#FF6600",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
});
