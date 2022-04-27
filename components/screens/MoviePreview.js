import React, { useState, useCallback, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Linking,
  Dimensions,
  Button,
} from "react-native";

// import YoutubePlayer from "react-native-youtube-iframe";

var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;

const moviePreview = (props) => {
  const movie = props.navigation.getParam("movie");
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const vidID = "6hB3S9bIaco";
  return (
    <React.Fragment>
      <View style={myStyles.backgroudStyle}>
        <Text
          style={{
            color: "white",
            fontSize: 27,
            fontWeight: "bold",
            marginLeft: windowWidth * 0.05,
            marginTop: windowHeight * 0.06,
            marginBottom: windowHeight * 0.02,
          }}
        >
          {movie.name}
        </Text>
        <View>
          <YoutubePlayer
            height={220}
            play={playing}
            videoId={vidID}
            onChangeState={onStateChange}
          />
          {/* <Button style={{ backgroundColor: "grey"}} title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
        </View>
        <Text
          style={{
            color: "#E0E0E0",
            fontSize: 15,
            marginLeft: windowWidth * 0.05,
            marginTop: windowHeight * 0.02,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>YEAR:</Text> {movie.year}
        </Text>
        <Text
          style={{
            color: "#E0E0E0",
            fontSize: 15,
            marginLeft: windowWidth * 0.05,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>RATING:</Text> {movie.rating}
        </Text>
        <Text
          style={{
            color: "#E0E0E0",
            fontSize: 15,
            marginLeft: windowWidth * 0.05,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>DURATION:</Text> {movie.duration}
        </Text>
        <Text
          style={{
            color: "#E0E0E0",
            fontSize: 10,
            marginTop: windowHeight * 0.01,
            marginLeft: windowWidth * 0.05,
            padding: windowHeight * 0.009,
            backgroundColor: "#696969",
            width: windowWidth * 0.1,
            // height: windowHeight * 0.03,
            borderRadius: 5,
          }}
        >
          {movie.quality}
        </Text>

        <TouchableOpacity
          style={[
            myStyles.inputField,
            { marginTop: windowHeight * 0.02, backgroundColor: "white" },
          ]}
          onPress={togglePlaying}
        >
          <Text style={myStyles.loginText}>{playing ? "Pause" : "Play"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            myStyles.inputField,
            { marginTop: windowHeight * 0.01, backgroundColor: "grey" },
          ]}
          onPress={() => Alert.alert("video has finished downloading!")}
        >
          <Text style={myStyles.loginText}>Download</Text>
        </TouchableOpacity>
        <Text style={myStyles.movieDescription}>{movie.description} </Text>
        <Text
          style={{
            color: "#E0E0E0",
            fontSize: 17,
            marginLeft: windowWidth * 0.05,
            padding: 2,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>starring:</Text> {movie.starring}
        </Text>
        <Text
          style={{
            color: "#E0E0E0",
            fontSize: 17,
            marginLeft: windowWidth * 0.05,
            padding: 2,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>language:</Text> {movie.language}
        </Text>
        <Text
          style={{
            color: "#E0E0E0",
            fontSize: 17,
            marginLeft: windowWidth * 0.05,
            padding: 2,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>director:</Text> {movie.director}
        </Text>
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
