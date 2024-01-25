import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import PokemonCard from "./components/PokemonCard";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
        });
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // or some loading component
  }

  return (
    <SafeAreaView style={styles.appContainier}>
      {/* <Text style={{ fontFamily: "Inter-Black", fontSize: 50 }}>Home</Text> */}
      <FlatList
        data={PokemonsData}
        // keyExtractor={()}
        renderItem={({ item }) => {
          return <PokemonCard {...item} />;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainier: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

const PokemonsData = [
  {
    name: "Squirtle",
    image: require("./assets/images/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  },
  {
    name: "Charmander",
    image: require("./assets/images/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  },
  {
    name: "Bulbasaur",
    image: require("./assets/images/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  },
  {
    name: "Pikachu",
    image: require("./assets/images/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  },
];
