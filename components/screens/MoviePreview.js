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

const movie = {
    "preview": "preview_trailer",
    "name": "Movie_name",
    "year": "release_year",
    "duration": "duration",
    "quality": "H D",
    "description": "Movie_description Movie_description Movie_description Movie_description Movie_description Movie_description Movie_description Movie_description Movie_description Movie_description Movie_description",
    "languages": "list of languages",
    "actors": "list of lead actors",
    "director": "movie director",
    "rating": "PG-13"
    
}

const moviePreview = (navigationProps) => {
  var logo = require("../../assets/icons/beingITlogo.png");
  return (
    <React.Fragment>
      <View style={myStyles.backgroudStyle}>
        <Text
          style={{
            marginTop: windowHeight * 0.1,
            color: "white",
            fontSize: 50,
            marginLeft: windowWidth * 0.06,
            marginRight: windowWidth * 0.1,
            padding: windowHeight * 0.01,
          }}
        >
          {movie.preview}
        </Text>
        <Text style={{
            color: "white",
            fontSize: 27,
            fontWeight: "bold",
            marginLeft: windowWidth * 0.05,
        }}>{movie.name}</Text>
        <Text style={{
            color: "#E0E0E0",
            fontSize: 15,
            marginLeft: windowWidth * 0.05,
        }}><Text style={{fontWeight: "bold"}}>RELEASE YEAR:</Text> {movie.duration}</Text>
        <Text style={{
            color: "#E0E0E0",
            fontSize: 15,
            marginLeft: windowWidth * 0.05,
        }}><Text style={{fontWeight: "bold"}}>RATING:</Text> {movie.rating}</Text>
        <Text style={{
            color: "#E0E0E0",
            fontSize: 15,
            marginLeft: windowWidth * 0.05,
        }}><Text style={{fontWeight: "bold"}}>DURATION:</Text> {movie.duration}</Text>
        <Text style={{
            color: "#E0E0E0",
            fontSize: 10,
            marginTop: windowHeight * 0.01,
            marginLeft: windowWidth * 0.05,
            padding: windowHeight * 0.009,
            backgroundColor: "#696969",
            width: windowWidth * 0.1,
            // height: windowHeight * 0.03,
            borderRadius: 5,
        }}>{movie.quality}</Text>


        <TouchableOpacity
          style={[
            myStyles.inputField,
            { marginTop: windowHeight * 0.02, backgroundColor: "white" },
          ]}
          onPress={() => navigationProps.navigation.navigate("SignUpUser3")}
        >
          <Text style={myStyles.loginText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            myStyles.inputField,
            { marginTop: windowHeight * 0.01, backgroundColor: "grey" },
          ]}
          onPress={() => navigationProps.navigation.navigate("MoviePreview")}
        >
          <Text style={myStyles.loginText}>Download</Text>
        </TouchableOpacity>
        <Text style={myStyles.movieDescription}>{movie.description} </Text>
        <Text style={{
            color: "#E0E0E0",
            fontSize: 17,
            marginLeft: windowWidth * 0.05,
            padding: 2,
        }}><Text style={{fontWeight: "bold"}}>STARRING:</Text> {movie.actors}</Text>
        <Text style={{
            color: "#E0E0E0",
            fontSize: 17,
            marginLeft: windowWidth * 0.05,
            padding: 2,
        }}><Text style={{fontWeight: "bold"}}>LANGUAGES:</Text> {movie.languages}</Text>
        <Text style={{
            color: "#E0E0E0",
            fontSize: 17,
            marginLeft: windowWidth * 0.05,
            padding: 2,
        }}><Text style={{fontWeight: "bold"}}>DIRECTOR:</Text> {movie.director}</Text>

      </View>
    </React.Fragment>
  );
};

const myStyles = StyleSheet.create({
  inputField: {
    padding: 6,
    color: "black",
    // backgroundColor: "#474747",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: 1.25,
    width: windowWidth * 0.9,
    height: windowHeight * 0.07,
    borderRadius: 5,
  },
  movieDescription: {
    color: "#E0E0E0",
    marginTop: windowHeight * 0.02,
    marginLeft: windowWidth * 0.05,
  },
  loginText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
    padding: windowHeight * 0.01,
  },
  backgroudStyle: {
    backgroundColor: "black",
    position: "absolute",
    height: windowHeight,
    width: windowWidth,
  },
//   pageTopText: {
//     color: "white",
//     flex: 1,
//     fontSize: 15,
//     position: "absolute",
//   },
//   title: {
//     fontSize: 30,
//     marginTop: windowHeight * 0.15,
//     textAlign: "center",
//     padding: 15,
//     color: "white",
//   },

//   signin: {
//     fontWeight: "bold",
//     fontSize: 30,
//     textAlign: "center",
//     padding: 3,
//     color: "white",
// //   },
//   useyouraccount: {
//     fontSize: 9,

//     textAlign: "center",
//   },
//   termsofservice: {
//     color: "black",
//     fontSize: 12,
//     textAlign: "center",
//     paddingLeft: 20,
//     paddingRight: 20,
//     paddingTop: 20,
//     color: "white",
//   },
//   pageBottom: {
//     paddingTop: 60,
//     fontSize: 12,
//     paddingBottom: 10,
//     textAlign: "center",
//     color: "white",
//     color: "#e30914",
//   },
//   urlLinking: {
//     paddingLeft: 20,
//     color: "#35b8b6",
//     fontSize: 12,
//     padding: 10,
//     textAlign: "center",
//     marginLeft: 25,
//     marginRight: 25,
//     color: "white",
//     color: "#e30914",
//   },
});

export default moviePreview;