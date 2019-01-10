/** @format */
import React from 'react';
import { AppRegistry } from "react-native";
import App from "./App";
import configureStore from "./src/store/configureStore";
import { Provider } from "react-redux";
import { name as appName } from "./app.json";

const store = configureStore();
const rootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const app = AppRegistry.registerComponent(appName, () => rootApp);
