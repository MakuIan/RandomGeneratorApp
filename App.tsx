import Index from "./src/Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RandomGenerator from "./src/RandomGenerator";
import RandomCivMap from "./src/RandomCivMap";

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  const screenOptions = {
    headerStyle: {
      backgroundColor: "#6330e5", // Set the background color of the navigation bar
    },
    headerTintColor: "white", // Set the text color of the navigation bar
    headerTitleStyle: {
      fontWeight: "bold" as const, // Set the font weight of the navigation bar title
    },
    headerTitleAlign: "center" as const, // Set the position of the navigation bar title // Set the title of the navigation bar conditionally
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="RandomGenerator" component={RandomGenerator} />
        <Stack.Screen name="RandomCivMap" component={RandomCivMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
