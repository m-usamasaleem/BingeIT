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

import movies from "../data/movies.json";
import movies1 from "../data/movies1.json";
import movies2 from "../data/movies2.json";
import movies3 from "../data/movies3.json";
import movies4 from "../data/movies4.json";
import Row from "../HomeScreenComponents/row";

var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;

const HomeScreen = (navigationProps) => {
  let userEmail = navigationProps.navigation.getParam("userEmail");
  console.log(userEmail);
  var logo = require("../../assets/icons/beingITlogo.png");
  return (
    <React.Fragment>
      <View style={myStyles.backgroudStyle}>
        <View style={myStyles.elevatedElement}>
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
        </View>
        {/* contentContainerStyle={myStyles.contentContainer} */}
        <ScrollView style={myStyles.topMargin}>
          <Row
            navigateTo={navigationProps.navigation.navigate}
            categoryName={"Critically Acclaimed"}
            movies={movies}
          />
          <Row
            navigateTo={navigationProps.navigation.navigate}
            categoryName={"Superhero"}
            movies={movies4}
          />
          <Row
            navigateTo={navigationProps.navigation.navigate}
            categoryName={"Anime"}
            movies={movies3}
          />
          <Row
            navigateTo={navigationProps.navigation.navigate}
            categoryName={"Action"}
            movies={movies1}
          />
          <Row
            navigateTo={navigationProps.navigation.navigate}
            categoryName={"Horror"}
            movies={movies2}
          />
        </ScrollView>
        {/* <Text style={{padding: 50 ,color: "white"}}>{Object.keys(movies).map(key => (
                    <Text>{movies[key].name}</Text>
                ))}</Text> */}
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
    marginTop: windowHeight * 0.2,
    marginLeft: windowWidth * 0.01,
  },
  row: {
    padding: 5,
  },
  elevatedElement: {
    zIndex: 3,
    elevation: 3,
    backgroundColor: "black",
  },
  topMargin: {
    marginTop: windowHeight * 0.15,
  },
});

export default HomeScreen;
