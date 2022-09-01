import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/AntDesign";
import { Home } from "./screens/Home";
import { Details } from "./screens/Details";
import { moondust500, moondust800 } from "./colors";
const Stack = createStackNavigator();
const MyCustomHeaderBackImage = () => (
  <Icon name="arrowleft" size={30} color={moondust500} />
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitleVisible: false,
          headerBackImage: MyCustomHeaderBackImage,
          headerTitleStyle: { color: { moondust800 } },
        }}
      >
        <Stack.Screen name="Picture of the day" component={Home} />
        <Stack.Screen
          name="details"
          component={Details}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
