import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/wayback.jpg")}
        ></Image>

        <Text style={styles.title}>Internet Archive</Text>
        <TextInput style={styles.input} placeholder="E-Mail" />
        <TextInput style={styles.input} placeholder="Password" />

        <View style={styles.mainButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("MyTabs")}
          >
            <Text style={styles.text}>Validation</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 30,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    flex: 0.5,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "#a92e33",
    textAlign: "center",
  },

  text: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },

  button: {
    flex: 0.5,
    width: "80%",
    borderRadius: 25,
    backgroundColor: "#a92e33",
  },

  input: {
    flex: 0.5,
  },

  logo: {
    flex: 1,
    marginTop: 50,
    padding: 80,
    height: 300,
    width: 300,
  },

  mainButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
