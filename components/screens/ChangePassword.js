import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Linking,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import SignUpForm from "../screenSnippets/ChangePasswordForm";
var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
const SignUp = (navigationProps) => {
  var logo = require("../../assets/icons/beingITlogo.png");
  return (
    <SafeAreaView>
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
                marginLeft: windowWidth * 0.75,
                paddingTop: windowHeight * 0.07,
                fontWeight: "bold",
              },
            ]}
          >
            PRIVACY
          </Text>
          <Text style={myStyles.title}> Change Password </Text>

          <SignUpForm navigateTo={navigationProps.navigation.navigate} />
          <Text style={myStyles.termsofservice}></Text>
        </View>
      </React.Fragment>
    </SafeAreaView>
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
