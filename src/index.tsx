import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();
  const goToRoute = (routeName: string) => {
    // @ts-expect-error The navigation.navigate method is not recognized by TypeScript.
    // It is a valid method provided by the navigation library.
    // Expecting an error on the following line.
    navigation.navigate(routeName);
  };
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => goToRoute("RandomGenerator")}
        >
          <Text style={styles.buttonText}>Random Generator</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => goToRoute("RandomCivMap")}
        >
          <Text style={styles.buttonText}>Random Civ Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#5d2735",
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#52af06",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
  },
  sectionButton: {
    padding: 10,
    flex: 1,
    maxHeight: 50,
    minWidth: 200,
    marginVertical: 2,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#26293b",
  },
});

export default Index;
