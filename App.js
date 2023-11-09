import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LaunchScreen from "./src/screens/LaunchScreen";
import MainScreen from "./src/screens/MainScreen";
import LoginScreen from "./src/screens/LoginScreen.js";
import DetailScreen from "./src/screens/DetailScreen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Launch" component={LaunchScreen} options={{headerShown: false}}></stack.Screen>
        <stack.Screen name="Home" component={MainScreen} options={{headerBackVisible: false, headerLargeTitle: true}}></stack.Screen>
        <stack.Screen name="Login" component={LoginScreen}></stack.Screen>
        <stack.Screen name="Detail" component={DetailScreen}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  )
}