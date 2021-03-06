import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import store from "./redux/store";
import Users from "./screens/Users";
import UserDetail from "./screens/UserDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#2A2928" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#2A2928",
              height: 80,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Users}
            options={{
              title: "Usuarios",
            }}
          />
          <Stack.Screen
            name="Detail"
            component={UserDetail}
            options={{
              title: "Detalle de Usuario",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
