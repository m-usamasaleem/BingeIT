import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Linking,
  Dimensions,
} from "react-native";
var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
const SignUp = (navigationProps) => {
  var logo = require("../../assets/icons/beingITlogo.png");
  return (
    <React.Fragment>
      <View style={myStyles.backgroudStyle}>
        <Image
          source={logo}
          style={{
            height: windowHeight * 0.07,
            width: windowWidth * 0.3,
            marginTop: windowHeight * 0.05,
            marginLeft: windowWidth * 0.05,
            position: "absolute",
          }}
        />
        <Text
          style={[
            myStyles.pageTopText,
            {
              marginLeft: windowWidth * 0.55,
              paddingTop: windowHeight * 0.07,
            },
          ]}
        >
          PRIVACY
        </Text>
        <Text
          style={[
            myStyles.pageTopText,
            {
              marginLeft: windowWidth * 0.75,
              paddingTop: windowHeight * 0.07,
              fontWeight: "bold",
            },
          ]}
        >
          SIGN IN
        </Text>
        <Text style={myStyles.title}> Step 2 of 3 </Text>

        <Text
          style={{
            color: "white",
            fontSize: 25,
            marginLeft: windowWidth * 0.1,
            marginRight: windowWidth * 0.1,
          }}
        >
          {"Choose your plan.\n"}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginLeft: windowWidth * 0.11,
            marginRight: windowWidth * 0.1,
          }}
        >
          <Text>{"\u2022 No commitments, cancel at any time.\n\n"}</Text>
          <Text>{"\u2022 Everything on BingeIT for one low price.\n\n"}</Text>
          <Text>{"\u2022 Unlimited viewing on all your devices.\n\n"}</Text>
        </Text>

        <TouchableOpacity
          style={[
            myStyles.inputField,
            { marginTop: windowHeight * 0.03, backgroundColor: "#e30914" },
          ]}
          onPress={() => navigationProps.navigation.navigate("SignUpUser3")}
        >
          <Text style={myStyles.loginText}>SEE THE PLANS</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const myStyles = StyleSheet.create({
  inputField: {
    padding: 6,
    color: "white",
    backgroundColor: "#474747",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: 1.25,
    width: windowWidth * 0.9,
    height: windowHeight * 0.07,
    borderRadius: 5,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    padding: windowHeight * 0.01,
  },
  backgroudStyle: {
    backgroundColor: "black",
    position: "absolute",
    height: windowHeight,
    width: windowWidth,
  },
  pageTopText: {
    color: "white",
    flex: 1,
    fontSize: 15,
    position: "absolute",
  },
  title: {
    fontSize: 30,
    marginTop: windowHeight * 0.15,
    textAlign: "center",
    padding: 15,
    color: "white",
  },

  signin: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    padding: 3,
    color: "white",
  },
  useyouraccount: {
    fontSize: 9,

    textAlign: "center",
  },
  termsofservice: {
    color: "black",
    fontSize: 12,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    color: "white",
  },
  pageBottom: {
    paddingTop: 60,
    fontSize: 12,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    color: "#e30914",
  },
  urlLinking: {
    paddingLeft: 20,
    color: "#35b8b6",
    fontSize: 12,
    padding: 10,
    textAlign: "center",
    marginLeft: 25,
    marginRight: 25,
    color: "white",
    color: "#e30914",
  },
});

export default SignUp;
