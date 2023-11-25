import {
  View,
  Text,
  Button,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const getRandomMap = (maps: string[]) => {
  const randomIndex = Math.floor(Math.random() * maps.length);
  return maps[randomIndex];
};
const Wheel = () => {
  const maps = [
    "Continents",
    "Fractal",
    "Inland Sea",
    "Island Plates",
    "Pangaea",
    "Shuffle",
    "4-Leaf Clover",
    "6-Armed Snowflake",
    "Earth",
    "True Start Location Earth",
    "Earth Huge",
    "True Start Location Earth Huge",
    "Mediteranian Large",
    "True Start Location Mediteranian",
    "Archipelago",
    "Seven Seas",
    "Small Continents",
    "East Asia",
    "True Start Location East Asia",
    "Europe",
    "True Start Location Europe",
    "Continents and Islands",
    "Lakes",
    "Mirror",
    "Splintered Fractal",
    "Primordial",
    "Terra",
    "Tilted Axis",
    "Highlands",
    "Wetlands",
  ];
  const [randomMap, setRandomMap] = useState("");
  return (
    <View style={styles.container}>
      {/* Result */}
      {randomMap ? (
        <View style={styles.mapContainer}>
          <Text style={styles.mapText}>{randomMap}</Text>
        </View>
      ) : null}
      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setRandomMap(getRandomMap(maps))}
      >
        <Text style={styles.buttonText}>Get Random Map</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5d2735",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  mapText: {
    fontSize: 18,
    color: "blue",
  },
  mapContainer: {
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    width: 300,
    height: 150,
    backgroundColor: "#1ef7c2",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#40E0D0",
    color: "white",
    fontSize: 16,
    padding: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
export default Wheel;
