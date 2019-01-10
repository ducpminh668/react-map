// import { Navigation } from 'react-native-navigation';
// import AuthScreen from "./src/screens/Auth/AuthScreen";

// Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);

import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import MapView from 'react-native-maps';

const App = () => {
  return (
    <View>
      <Text>asdf</Text>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
};

export default App;
