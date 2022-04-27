import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
var backgroundimage = require("../../assets/presignin/background.jpg");
var logo = require("../../assets/icons/beingIT.png");

const PreSignUp = (navigationProps) => {
  return (
    <React.Fragment>
      <View style={myStyles.mainPage}>
        <Image
          source={backgroundimage}
          style={{
            height: windowHeight * 1,
            width: windowWidth * 1,
            position: "absolute",
          }}
        />
        <View style={myStyles.pageTop}>
          <Image
            source={logo}
            style={{
              height: windowHeight * 0.1,
              width: windowWidth * 0.08,
              position: "relative",
            }}
          />

          <Text
            style={[
              myStyles.pageTopText,
              {
                marginLeft: windowWidth * 0.3,
                paddingTop: windowHeight * 0.03,
              },
            ]}
            onPress={() => {
              Linking.openURL(
                "https://github.com/m-usamasaleem/policy/blob/main/README.md"
              );
            }}
          >
            PRIVACY
          </Text>

          <TouchableOpacity
            onPress={() => navigationProps.navigation.navigate("SignInUser")}
          >
            <Text
              style={[
                myStyles.pageTopText,
                {
                  marginLeft: windowWidth * 0.08,
                  paddingTop: windowHeight * 0.03,
                },
              ]}
            >
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>

        <View style={myStyles.pageBottom}>
          <Text style={myStyles.pageBottomTexta}>
            Unlimited films, TV programmes, & more
          </Text>
          <Text style={myStyles.pageBottomTextb}>
            Watch anywhere. Cancet at any time.
          </Text>
        </View>

        <TouchableOpacity
          style={myStyles.loginScreenButton}
          onPress={() => navigationProps.navigation.navigate("SignUpUser1")}
        >
          <Text style={myStyles.loginText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const myStyles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  mainPage: {
    backgroundColor: "black",
    height: windowHeight,
  },

  pageTop: {
    marginTop: windowHeight * 0.01,
    flexDirection: "row",
    padding: 30,
  },

  pageTopText: {
    color: "white",
    fontWeight: "bold",
    flex: 1,
    fontSize: 15,
  },

  pageBottom: {
    marginLeft: windowWidth * 0.1,
    marginRight: windowWidth * 0.1,
    position: "absolute",
    top: windowHeight - windowHeight * 0.4,
  },

  pageBottomTexta: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
  },
  pageBottomTextb: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },

  loginScreenButton: {
    top: windowHeight - windowHeight * 0.3,
    backgroundColor: "#e30914",
  },
  loginText: {
    color: "white",
    textAlign: "center",
    paddingTop: windowHeight * 0.015,
    paddingBottom: windowHeight * 0.015,
    fontSize: 20,
    position: "relative",
  },

  signUp: {},
});

export default PreSignUp;
