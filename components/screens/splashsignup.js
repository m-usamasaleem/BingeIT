import React, { Component } from "react";
import { Image, Text, StyleSheet, Dimensions, View } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
//import ChatBot from 'react-simple-chatbot';
var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
var logo = require("../../assets/icons/beingITlogo.png");
var signedup = require("../../assets/icons/accept.png");

export default class SplashScreen extends Component {
  constructor(props) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "SignInUser" })],
    });
    super(props);

    setTimeout(() => {
      this.props.navigation.dispatch(resetAction);
    }, 3000);
  }
  render() {
    return (
      <View style={myStyles.screenbackgroud}>
        <Image
          source={logo}
          style={{
            height: windowHeight * 0.16,
            width: windowWidth * 0.75,
            marginTop: windowHeight * 0.0,
          }}
        />
        <View style={myStyles.pageBottom}>
          <Text style={myStyles.pageBottomTexta}>
            Congratulations, you have signed up successfully.
          </Text>
          <Text style={myStyles.pageBottomTextb}>
            Wish you have a nice experience!.
          </Text>
        </View>
        <Image source={signedup} style={{ marginTop: windowHeight * 0.02 }} />
      </View>
    );
  }
}

const myStyles = StyleSheet.create({
  screenbackgroud: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  mobMech: {
    marginTop: 30,
  },

  pageTop: {
    fontWeight: "bold",
    fontSize: 40,
    marginTop: windowHeight * 0.01,
    textAlign: "center",
  },
  signin: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    padding: 3,
  },

  useyouraccount: {
    fontSize: 9,
    textAlign: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 40,
    marginTop: windowHeight * 0.01,
    textAlign: "center",
    padding: 30,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#35b8b6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    position: "relative",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  pageBottom: {
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    top: 0,
  },

  pageBottomTexta: {
    textAlign: "center",
    color: "#009900",
    fontWeight: "bold",
    fontSize: 25,
  },
  pageBottomTextb: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
  signUp: {},
});
