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
import movies from "../data/movies.json"
import Row from "../HomeScreenComponents/row"

var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;


const HomeScreen = (navigationProps) =>{
    var logo = require("../../assets/icons/beingITlogo.png");
    return(
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
                    <Text
                        style={[
                            myStyles.pageTopText,
                            {
                            marginLeft: windowWidth * 0.75,
                            paddingTop: windowHeight * 0.07,
                            fontWeight: "bold",
                            },
                        ]}
                        onPress={() => navigationProps.navigation.navigate("SettingsScreen")}
                        >
                        SETTINGS
                    </Text>
                </View>
                {/* contentContainerStyle={myStyles.contentContainer} */}
                <ScrollView style={myStyles.topMargin}>
                    <Row  movies={movies}/>
                    <Row movies={movies}/>
                    <Row movies={movies}/>
                    <Row movies={movies}/>
                    <Row movies={movies}/>
                </ScrollView>
                {/* <Text style={{padding: 50 ,color: "white"}}>{Object.keys(movies).map(key => (
                    <Text>{movies[key].name}</Text>
                ))}</Text> */}
            </View>
        </React.Fragment>
    )
}

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
          padding: 5
      },
      elevatedElement: {
        zIndex: 3, 
        elevation: 3, 
        backgroundColor: "black",
      },
      topMargin: {
        marginTop: windowHeight * 0.15
      }
})

export default HomeScreen