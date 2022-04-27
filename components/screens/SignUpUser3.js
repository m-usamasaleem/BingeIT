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
import { Table, TableWrapper, Rows, Row } from "react-native-table-component";

var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
const SignUp = (navigationProps) => {
  var logo = require("../../assets/icons/beingITlogo.png");
  const _changeStyle = () => {
    ({});
  };
  const rendering_headline = (text, marginPara, widthPara) => {
    return (
      <TouchableOpacity
        style={[
          myStyles.headlines,
          {
            marginLeft: windowWidth * marginPara,
            width: windowWidth * widthPara,
          },
        ]}
        onPress={() =>
          navigationProps.navigation.navigate("SplashScreenSignup")
        }
      >
        <Text style={[myStyles.loginText, {}]}> {text}</Text>
      </TouchableOpacity>
    );
  };

  // HeadTable = [
  //   rendering_headline("Basic", 0.0, 0.25),
  //   rendering_headline("Standard", 0.06, 0.3),
  //   rendering_headline("Premium", 0.1, 0.3),
  // ];

  DataTable = [
    [
      rendering_headline("Basic", 0.0, 0.23),
      rendering_headline("Standard", 0.0, 0.23),
      rendering_headline("Pro", 0.0, 0.23),
    ],
    ["$9.99", "$15.49", "$19.99"],

    ["Good", "Better", "Best"],
    ["480p", "1080p", "4K+HDR"],
  ];

  return (
    <React.Fragment>
      <View style={myStyles.backgroudStyle}>
        <Text style={myStyles.title}> Step 3 of 3 </Text>

        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginTop: windowHeight * 0.06,
            marginLeft: windowWidth * 0.11,
            marginRight: windowWidth * 0.1,
          }}
        >
          <Text>{"\u2022 Watch as much as you want. Advert free.\n\n"}</Text>
          <Text>{"\u2022 Recommendations just for you.\n\n"}</Text>
          <Text>{"\u2022 Change or cancel your plan time.\n\n"}</Text>
        </Text>

        <Table
          style={{
            marginLeft: windowWidth * 0.05,
            marginRight: windowWidth * 0.05,
          }}
          borderStyle={{}}
        >
          {/* <Row
            data={HeadTable}
            style={{}}
            widthArr={[
              windowWidth * 0.25,
              windowWidth * 0.25,
              windowWidth * 0.25,
            ]}
            heightArr={[windowHeight * 0.15]}
            textStyle={{ color: "white", fontWeight: 20, margin: 100 }}
          /> */}
          <Rows
            data={DataTable}
            style={{
              top: windowHeight * 0.0,
              marginLeft: windowWidth * 0.05,
              marginRight: windowWidth * 0.05,
            }}
            widthArr={[
              windowWidth * 0.25,
              windowWidth * 0.25,
              windowWidth * 0.25,
            ]}
            heightArr={[
              windowHeight * 0.1,
              windowHeight * 0.1,
              windowHeight * 0.1,
            ]}
            textStyle={{ color: "white", marginLeft: windowWidth * 0.05 }}
          />
        </Table>

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

        {/* <TouchableOpacity
          style={[
            myStyles.inputField,
            { marginTop: windowHeight * 0.03, backgroundColor: "#e30914" },
          ]}
          onPress={() => navigationProps.navigation.navigate("SignUpUser1")}
        >
          <Text style={myStyles.loginText}>SEE THE PLANS</Text>
        </TouchableOpacity> */}
      </View>
    </React.Fragment>
  );
};

const myStyles = StyleSheet.create({
  headlines: {
    paddingTop: 6,
    paddingBottom: 6,
    color: "white",
    backgroundColor: "#e30914",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: 1.25,
    height: windowHeight * 0.07,
    borderRadius: 5,
  },
  headlines2: {
    position: "relative",
    marginLeft: windowWidth * 0.1,

    padding: 6,
    color: "white",
    backgroundColor: "#474747",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: 1.25,
    width: windowWidth * 0.25,
    height: windowHeight * 0.07,
    borderRadius: 5,
  },
  headlines3: {
    padding: 6,
    marginLeft: windowWidth * 0.1,
    color: "white",
    backgroundColor: "#474747",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: 1.25,
    width: windowWidth * 0.25,
    height: windowHeight * 0.07,
    borderRadius: 5,
  },

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
    fontSize: 13,
    paddingTop: windowHeight * 0.01,
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
    marginTop: windowHeight * 0.2,
    textAlign: "center",
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
