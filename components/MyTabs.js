import * as React from "react";
import HomeScreen from "./HomeScreen";
import Preview from "./Preview";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchBar from "./SearchBar";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" size={20} color="#a92e33" />
          ),
        }}
      />
      <Tab.Screen
        name="Recherche"
        component={SearchBar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-circle-outline" size={30} color="#a92e33" />
          ),
        }}
      />
      <Tab.Screen
        name="Preview"
        component={Preview}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="eye-outline" size={30} color="#a92e33" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
