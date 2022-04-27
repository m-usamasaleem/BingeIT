import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { createAppContainer } from "react-navigation";
import SettingsMech from "../components/screens/Suggestions";
import HomeScreen from "../components/screens/HomeScreen";
import SettingsScreen from "../components/screens/SettingsScreen";
import CustomerResponses from "../components/screens/SignInUser";

import { Feather, TextInput, Ionicons, FontAwesome5 } from "@expo/vector-icons";

// const screens = {
//   Home: {
//     screen: ServiceRequests,
//     navigationOptions: {
//       tabBarIcon: (iconProps) => {
//         return (
//           <FontAwesome5 name="home" size={23} color={iconProps.tintColor} />
//         );
//       },
//     },
//   },

//   Responses: {
//     screen: CustomerResponses,
//     navigationOptions: {
//       tabBarIcon: (iconProps) => {
//         return (
//           <FontAwesome5
//             name="user-check"
//             size={23}
//             color={iconProps.tintColor}
//           />
//         );
//       },
//     },
//   },
//   Settings: {
//     screen: SettingsMech,
//     navigationOptions: {
//       tabBarIcon: (iconProps) => {
//         return (
//           <Feather name="settings" size={25} color={iconProps.tintColor} />
//         );
//       },
//     },
//   },
//   Profile: {
//     screen: ProfileMechanic,
//     navigationOptions: {
//       tabBarIcon: (iconProps) => {
//         return <Ionicons name="person" size={25} color={iconProps.tintColor} />;
//       },
//     },
//   },
// };
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const tabs = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (iconProps) => {
          return <Ionicons name="home" size={25} color={iconProps.tintColor} />;
        },
      },
    },
    News: {
      screen: SettingsMech,
      navigationOptions: {
        tabBarIcon: (iconProps) => {
          return <Entypo name="news" size={25} color={iconProps.tintColor} />;
        },
      },
    },
    Library: {
      screen: SettingsMech,
      navigationOptions: {
        tabBarIcon: (iconProps) => {
          return (
            <FontAwesome5
              name="download"
              size={23}
              color={iconProps.tintColor}
            />
          );
        },
      },
    },
    Profile: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: (iconProps) => {
          return (
            <FontAwesome5 name="user" size={23} color={iconProps.tintColor} />
          );
        },
      },
    },
  },
  {
    initialRouteName: "Home",
    activeColor: "red",
    inactiveColor: "white",
    barStyle: { backgroundColor: "gray", size: 25 },
    size: 25,
  }
);
const appContainer = createAppContainer(tabs);

export default appContainer;
