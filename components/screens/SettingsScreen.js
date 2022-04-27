import React, { useState } from "react";
import { View, Text, Image, Dimensions, Linking } from "react-native";
import { FontAwesome, Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";

var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;

const SettingsCust = (tabsNavigationProps) => {
  const [name, setName] = useState("Steamer@99");
  let image = require("../../assets/john-doe.jpg");

  return (
    <React.Fragment>
      <View style={{ backgroundColor: "black", height: windowHeight }}>
        <View
          style={{
            marginTop: windowHeight * 0.1,
            flexDirection: "row",
            marginBottom: windowHeight * 0.06,
          }}
        >
          <Image
            style={{
              width: windowWidth * 0.35,
              height: windowHeight * 0.2,
              borderRadius: windowWidth * 0.5,
              marginLeft: windowWidth * 0.05,
            }}
            source={image}
          />
          <Text
            style={{
              marginLeft: windowWidth * 0.05,
              fontWeight: "bold",
              fontSize: 24,
              marginTop: windowHeight * 0.06,
              color: "white",
            }}
          >
            {" "}
            {name}{" "}
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", marginBottom: windowHeight * 0.05 }}
        >
          <Ionicons
            style={{ marginLeft: windowWidth * 0.05 }}
            name="person"
            size={24}
            color="#87CEEB"
          />
          <Text style={{ marginLeft: windowWidth * 0.02, color: "white" }}>
            {" "}
            Online Status{" "}
          </Text>
          <FontAwesome
            style={{ marginLeft: windowWidth * 0.5 }}
            name="toggle-off"
            size={30}
            color="gray"
          />
        </View>

        <View
          style={{ flexDirection: "row", marginBottom: windowHeight * 0.05 }}
        >
          <Ionicons
            style={{ marginLeft: windowWidth * 0.05 }}
            name="notifications"
            size={24}
            color="green"
          />
          <Text style={{ marginLeft: windowWidth * 0.02, color: "white" }}>
            {" "}
            Notifications Alert{" "}
          </Text>
          <FontAwesome
            style={{ marginLeft: windowWidth * 0.42 }}
            name="toggle-on"
            size={30}
            color="green"
          />
        </View>

        <View
          style={{ flexDirection: "row", marginBottom: windowHeight * 0.05 }}
        >
          <Entypo
            style={{ marginLeft: windowWidth * 0.05 }}
            name="key"
            size={24}
            color="yellow"
          />
          <Text
            style={{ marginLeft: windowWidth * 0.02, color: "white" }}
            onPress={() =>
              tabsNavigationProps.navigation.navigate("ChangePassword")
            }
          >
            {" "}
            Change Password{" "}
          </Text>
          <Feather
            style={{ marginLeft: windowWidth * 0.42 }}
            name="arrow-right"
            size={24}
            color="gray"
          />
        </View>

        <View
          style={{ flexDirection: "row", marginBottom: windowHeight * 0.05 }}
        >
          <Ionicons
            style={{ marginLeft: windowWidth * 0.05 }}
            name="document-text-sharp"
            size={24}
            color="#7BCCB5"
          />
          <Text
            style={{ marginLeft: windowWidth * 0.02, color: "white" }}
            onPress={() =>
              Linking.openURL(
                "https://github.com/m-usamasaleem/policy/blob/main/README.md"
              )
            }
          >
            {" "}
            Terms of Service{" "}
          </Text>
          <Feather
            style={{ marginLeft: windowWidth * 0.45 }}
            name="arrow-right"
            size={24}
            color="gray"
          />
        </View>

        <View
          style={{ flexDirection: "row", marginBottom: windowHeight * 0.05 }}
        >
          <Entypo
            style={{ marginLeft: windowWidth * 0.05 }}
            name="log-out"
            size={24}
            color="red"
          />

          <Text
            style={{ marginLeft: windowWidth * 0.02, color: "red" }}
            onPress={() =>
              tabsNavigationProps.navigation.navigate("SignInUser")
            }
          >
            {" "}
            Sign Out{" "}
          </Text>
        </View>
      </View>
    </React.Fragment>
  );
};
export default SettingsCust;
