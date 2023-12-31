import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { useState } from "react";
import InputError from "./InputError";
import generateRandomNumber from "./randomNumber";

const RandomGenerator = () => {
  const [startingValue, setStartingValue] = useState("1");
  const [endValue, setEndValue] = useState("30");
  const [randomNumber, setRandomNumber] = useState(0);
  const handleInputChange = () => {
    if (!startingValue.trim() || !endValue.trim()) {
      Alert.alert("Please enter a value");
    } else {
      try {
        const startingValueNumber = parseInt(startingValue);
        const endValueNumber = parseInt(endValue);
        if (isNaN(startingValueNumber) || isNaN(endValueNumber)) {
          throw new InputError("Please enter a number", "InputError");
        } else {
          //Genrate random number
          try {
            const randomNumber = generateRandomNumber(
              startingValueNumber,
              endValueNumber,
            );
            setRandomNumber(randomNumber);
          } catch {
            Alert.alert("Please enter a valid range");
          }
        }
      } catch (err) {
        if (err instanceof InputError) {
          console.log(err.name);
        } else {
          Alert.alert("An error occurred, not InputError");
        }
      }
    }
  };
  return (
    <View style={styles.containerStyle}>
      <View style={styles.field}>
        <View style={styles.inputStyle}>
          <View style={styles.inputField}>
            <Text style={styles.labelStyle}> Starting Value</Text>
            <TextInput
              placeholder="Starting value"
              style={styles.startingValueStyle}
              value={startingValue}
              onChangeText={(text) => setStartingValue(text)}
            ></TextInput>
          </View>
          <View style={styles.inputField}>
            <Text style={styles.labelStyle}> End Value</Text>
            <TextInput
              placeholder="End value"
              value={endValue}
              style={styles.endValueStyle}
              onChangeText={(text) => setEndValue(text)}
            ></TextInput>
          </View>
          <View style={styles.inputField}>
            <Text style={randomNumber ? styles.labelStyle : styles.resultHide}>
              {" "}
              Result
            </Text>
            {randomNumber ? (
              <Text style={styles.resultShow}>{randomNumber}</Text>
            ) : null}
          </View>
        </View>

        <TouchableOpacity
          style={styles.generateButton}
          onPress={handleInputChange}
        >
          <Text style={styles.generateButtonText}>Generate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 20,
  },
  containerStyle: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#5d2735",
  },
  field: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 30,
    backgroundColor: "#bfc12f",
    color: "#6351c1",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6351c1",
  },
  inputStyle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  startingValueStyle: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#ca0b74",
    color: "white",
    borderRadius: 10,
  },
  endValueStyle: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#ca0b74",
    color: "white",
    borderRadius: 10,
  },
  generateButton: {
    backgroundColor: "#35ecfb",
    padding: 15,
    borderRadius: 10,
  },
  generateButtonText: {
    color: "white",
    fontSize: 16,
  },
  resultShow: {
    backgroundColor: "#5c7440",
    padding: 15,
    color: "white",
    borderRadius: 10,
  },
  resultHide: {
    display: "none",
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default RandomGenerator;
