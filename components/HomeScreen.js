import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.homeView}>
      <Text style={styles.homeTitle1}>Bienvenue dans la</Text>
      <Text style={styles.homeTitle2}>WayBack Machine</Text>
      <Image
        style={styles.homeImage}
        source={require("../assets/waybackmain.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a92e33",
  },

  homeTitle1: {
    fontSize: 20,
    marginTop: 30,
    textAlign: "center",
    color: "white",
  },
  homeTitle2: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
    color: "white",
  },

  homeImage: {
    flex: 1,
    marginBottom: 50,
  },
});

export default HomeScreen;
