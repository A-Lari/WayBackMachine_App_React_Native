import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

function Preview({ route }) {
  console.log(route.params.uri.url);
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 0.3, justifyContent: "center", alignItems: "center" }}
      >
        <Ionicons name="eye-outline" size={80} color="#a92e33" />
        <Text>Preview</Text>
      </View>
      <WebView
        style={styles.webViewContainer}
        source={{ uri: route.params.uri.url }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  webViewContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default Preview;
