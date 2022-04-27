import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Linking,
  Dimensions,
  ScrollView,
} from "react-native";
import { withOrientation } from "react-navigation";
import movies from "../data/movies.json";
import Row from "../HomeScreenComponents/row";

var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;

const HomeScreen = (navigationProps) => {
  var logo = require("../../assets/icons/beingITlogo.png");
  return (
    <React.Fragment>
      <View style={myStyles.backgroudStyle}>
        <View style={myStyles.elevatedElement}>
          <Text
            style={{
              height: windowHeight * 0.08,
              width: windowWidth * 0.5,
              marginTop: windowHeight * 0.065,
              marginLeft: windowWidth * 0.05,
              position: "absolute",
              color: "white",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            New & Hot
          </Text>
        </View>
        {/* <ScrollView style={myStyles.scrollViewButtons} horizontal>
                    <Text 
                        style={myStyles.suggestButtons}>
                            Coming Soon
                    </Text>
                    <Text 
                        style={myStyles.suggestButtons}>
                            Everyone's Watching
                    </Text>
                    <Text 
                        style={myStyles.suggestButtons}>
                            Suggestions
                    </Text>
                </ScrollView> */}
        {/* <Text style={[myStyles.scrollViewButtons, {color: "white", fontSize: 50}]}>asefdsfe</Text> */}
        <ScrollView style={myStyles.scrollView}>
          {Object.keys(movies).map((key) => {
            return (
              <View key={movies[key].id} style={myStyles.row}>
                <View style={myStyles.details}>
                  <Text style={myStyles.arriveText}>
                    Coming {movies[key].arriving}
                  </Text>
                  <Text style={myStyles.text}>{movies[key].name}</Text>
                  {/* <Text style={myStyles.text}>{movies[key].duration}</Text> */}
                  <Text style={myStyles.text}>{movies[key].year}</Text>
                </View>
                <Image
                  source={{ uri: movies[key].image }}
                  style={{
                    marginLeft: windowWidth * 0.2,
                    width: "50%",
                    height: 280,
                    borderRadius: 20,
                    marginTop: windowHeight * 0.003,
                  }}
                  resizeMode="cover"
                />
                <View>
                  <Text style={myStyles.description}>
                    {movies[key].description}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
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
  scrollView: {
    marginTop: windowHeight * 0.1,
    marginLeft: windowWidth * 0.01,
  },
  scrollViewButtons: {
    padding: 5,
    // marginTop: windowHeight * 0.12,
    zIndex: 5,
    // marginLeft: windowWidth * 0.01,
  },
  elevatedElement: {
    zIndex: 3,
    elevation: 3,
    backgroundColor: "black",
  },
  //   topMargin: {
  //     marginTop: windowHeight * 0.15
  //   },
  text: {
    color: "#E0E0E0",
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    marginLeft: windowWidth * 0.07,
  },
  arriveText: {
    color: "black",
    fontSize: 25,
    marginLeft: -15,
    marginBottom: 5,
    marginTop: 20,
    marginRight: windowWidth * 0.3,
    padding: 5,
    backgroundColor: "#A0A0A0",
    borderRadius: 20,
    textAlign: "center",
  },
  description: {
    color: "grey",
    marginTop: windowHeight * 0.01,
    marginLeft: windowWidth * 0.1,
    marginRight: windowWidth * 0.1,
  },
  row: {
    padding: 5,
    marginTop: windowHeight * 0.05,
  },
});

export default HomeScreen;
