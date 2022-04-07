import React from "react";
import StackNavigator from "./routes/StackWrapper";
import "./components/screenSnippets/FirebaseInit";

import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return (
    //<RatingReviews />
    <StackNavigator />
    //<CustLocation />
    // <TabNavigator />
  );
};
export default App;
