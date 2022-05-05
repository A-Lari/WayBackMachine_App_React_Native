import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import * as WebBrowser from "expo-web-browser";
import { Searchbar } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NavigationContext } from "@react-navigation/native";
import services from "../services";
import {
  TouchableOpacity,
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
} from "react-native";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [result, setResult] = useState(null);
  const [previewResult, setPreviewResult] = useState(null);
  const navigation = useContext(NavigationContext);

  //récupérer les infos de l'API
  const [apiResponse, setApiResponse] = useState({});

  //FONCTION DU BOUTON RECHERCHE
  function handlePress() {
    const dateForApi = moment(date).format("YYYYMMDDhhmmss");

    console.log("date au format API", dateForApi);

    getDataFromApi(searchQuery, dateForApi);
  }

  //GET DATA FROM API WAYBACK
  const getDataFromApi = (url, timestamp) => {
    console.log("getDataFromApi", url, timestamp);

    services
      .searchByUrlAndTime(url, timestamp)
      .then((res) => {
        setApiResponse(res);
        console.log("affiche result", res);
      })
      .catch((error) => console.log(error));
  };

  //all DATEPICKER

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }
  };

  //bouton pour afficher aller vers le lien API
  const handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      apiResponse.archived_snapshots.closest.url
    );
    setResult(result);
  };

  //bouton pour afficher dans page preview
  const handlePressButtonPrevAsync = async (url) => {
    console.log("affichage url for preview", url);
    navigation.navigate("Preview", {
      uri: apiResponse,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <Ionicons name="search-circle-outline" size={80} color="#a92e33" />
        <Text style={styles.searchTitle}>Search The World</Text>
      </View>

      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Entrer une URL"
          multiline
          blurOnSubmit
          onChangeText={(searchQuery) => setSearchQuery(searchQuery)}
          value={searchQuery}
        />
      </View>

      <View style={styles.picker}>
        {/* Display the selected date */}
        <View style={styles.pickedDateContainer}>
          <Text style={styles.pickedDate}>{date.toString()}</Text>
        </View>

        {/* The button that used to trigger the date picker */}
        {!isPickerShow && (
          <View style={styles.btnContainer}>
            <Button title="Calendrier" color="#a92e33" onPress={showPicker} />
          </View>
        )}

        {/* The date picker */}
        {isPickerShow && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onChange}
            style={styles.datePicker}
          />
        )}
      </View>

      <TouchableOpacity style={styles.buttonSearch}>
        <Button
          title="Lancer la recherche"
          color="#a92e33"
          onPress={() => handlePress()}
        />
      </TouchableOpacity>

      <View style={styles.result}>
        <Text>{JSON.stringify(apiResponse)}</Text>
      </View>

      <View style={styles.resultBtn}>
        <Button
          onPress={() => handlePressButtonAsync()}
          title="Afficher la page"
        />
      </View>

      <View style={styles.resultBtn}>
        <Button
          onPress={() => handlePressButtonPrevAsync()}
          title="Afficher dans la preview"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  searchView: {
    justifyContent: "center",
    alignItems: "center",
  },

  searchTitle: {
    fontSize: 24,
  },

  searchBar: {
    width: "80%",
    margin: 20,
  },

  picker: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 5,
    margin: 10,
  },

  pickedDateContainer: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
  },

  pickedDate: {
    flex: 1,
    fontSize: 12,
    color: "black",
  },

  buttonSearch: {
    flex: 1,
    width: "80%",
    margin: 10,
  },

  result: {
    flex: 2,
    margin: 5,
  },

  resultBtn: {
    flex: 1,
    color: "#841584",
  },
});

export default SearchBar;
