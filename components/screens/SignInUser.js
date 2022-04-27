import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Linking,
  Dimensions,
} from "react-native";
import SignInUserForm from "../screenSnippets/SignInUserForm";
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
        <Text style={myStyles.title}> SIGN IN </Text>

        <SignInUserForm navigateTo={navigationProps.navigation.navigate} />
        <Text style={myStyles.termsofservice}>
          <Text style={myStyles.termsofservice}>
            {" "}
            By continuing, you agree to our{" "}
          </Text>

          <Text
            style={myStyles.urlLinking}
            onPress={() =>
              Linking.openURL(
                "https://github.com/m-usamasaleem/policy/blob/main/README.md"
              )
            }
          >
            PRIVACY POLICY
          </Text>
          <Text> and </Text>
          <Text
            style={myStyles.urlLinking}
            onPress={() => {
              Linking.openURL(
                "https://github.com/m-usamasaleem/policy/blob/main/README.md"
              );
            }}
          >
            TERMS OF SERVICE
          </Text>
        </Text>
        <View>
          <Text style={myStyles.pageBottom}>
            {" "}
            Already Have an Account?{" "}
            <Text
              style={{ color: "#e30914" }}
              onPress={() => navigationProps.navigation.navigate("PreSignIn")}
            >
              {" "}
              SIGN UP{" "}
            </Text>{" "}
          </Text>
        </View>
      </View>
    </React.Fragment>
  );
};

const myStyles = StyleSheet.create({
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
