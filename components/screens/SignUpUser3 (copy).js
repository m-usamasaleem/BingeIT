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
import { Alert } from "react-native";
import { Col, Cols, Cell } from "react-native-table-component";

var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
HeadTable = ["Basic", "Standard", "Premium"];
DataTable = [
  ["1", "2", "3"],
  ["a", "b", "c"],
  ["1", "2", "3"],
  ["a", "b", "c"],
];
function _alertIndex(value) {
  Alert.alert(`This is column ${value}`);
}

const elementButton = (value) => {
  <TouchableOpacity onPress={() => _alertIndex(value)}>
    <View>
      <Text style={{ color: "black" }}>button</Text>
    </View>
  </TouchableOpacity>;
};

tableTitle = ["Title", "Title2", "Title3", "Title4"];
tableData = [
  [
    <TouchableOpacity onPress={() => _alertIndex(1)}>
      <View>
        <Text style={{ color: "black" }}>button</Text>
      </View>
    </TouchableOpacity>,
    "a",
    "b",
    "c",
    "d",
  ],
  [elementButton("2"), "1", "2", "3", "4"],
  [elementButton("3"), "a", "b", "c", "d"],
];

const SignUp = (navigationProps) => {
  var logo = require("../../assets/icons/beingITlogo.png");

  return (
    <React.Fragment>
      <View style={myStyles.backgroudStyle}>
        <Table
          style={{ top: 100 }}
          borderStyle={{
            borderWidth: 1,
            borderColor: "#ffa1d2",
          }}
        >
          <Row data={HeadTable} style={{}} textStyle={{ color: "white" }} />
          <Rows data={DataTable} style={{}} textStyle={{ color: "white" }} />
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
        <Text style={myStyles.title}> Step 2 of 3 </Text>

        <Text
          style={{
            color: "white",
            fontSize: 25,
            marginLeft: windowWidth * 0.1,
            marginRight: windowWidth * 0.1,
          }}
        ></Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginLeft: windowWidth * 0.11,
            marginRight: windowWidth * 0.1,
          }}
        >
          <Text>{"\u2022 Watch as much as you want. Advert free.\n\n"}</Text>
          <Text>{"\u2022 Recommendations just for you.\n\n"}</Text>
          <Text>{"\u2022 Change or cancel your plan time.\n\n"}</Text>
        </Text>

        <TouchableOpacity
          style={[
            myStyles.inputField,
            { marginTop: windowHeight * 0.03, backgroundColor: "#e30914" },
          ]}
          onPress={() => navigationProps.navigation.navigate("SignUpUser1")}
        >
          <Text style={myStyles.loginText}>SEE THE PLANS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Table
          style={{ flexDirection: "row" }}
          borderStyle={{ borderWidth: 1 }}
        >
          {/* Left Wrapper */}
          <TableWrapper style={{ width: 80 }}>
            <Cell data="" style={styles.singleHead} />
            <TableWrapper style={{ flexDirection: "row" }}>
              <Col
                data={["H1", "H2"]}
                style={styles.head}
                heightArr={[60, 60]}
                textStyle={styles.text}
              />
              <Col
                data={tableTitle}
                style={styles.title}
                heightArr={[30, 30, 30, 30]}
                textStyle={styles.titleText}
              ></Col>
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper */}
          <TableWrapper style={{ flex: 1 }}>
            <Cols
              data={tableData}
              heightArr={[40, 30, 30, 30, 30]}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({});

const myStyles = StyleSheet.create({
  btnText: { textAlign: "center" },
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
    backgroundColor: "blue",
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
