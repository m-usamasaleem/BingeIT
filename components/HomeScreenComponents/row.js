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


var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
 

const row = (props) => {
    const movies = props.movies
    const categoryName = props.categoryName
    return(
        <React.Fragment>
            <Text style={{fontSize: 25, color: "white", marginLeft: windowWidth * 0.06}}>{categoryName}</Text>
            <ScrollView style={myStyles.scrollView} horizontal>
                
                {Object.keys(movies).map(key => {
                    return(
                    <View key={movies[key].id} style={myStyles.row} >
                        <TouchableOpacity onPress={() => props.navigateTo("MoviePreview", {movie: movies[key]})}>
                            <Image 
                                source={{ uri : movies[key].image}}
                                style={{
                                    width: "100%",
                                    height: 180,
                                }}
                                resizeMode="cover"
                            />
                            <View style={myStyles.details}>
                                <Text style={myStyles.text}>{movies[key].name}</Text>
                               
                                <Text style={myStyles.text}>{movies[key].year}</Text>  
                            </View>     
                        </TouchableOpacity>  
                    </View>
                )})}
            </ScrollView>
        </React.Fragment>
    )
}

const myStyles = StyleSheet.create({
    // backgroudStyle: {
    //     backgroundColor: "black",
    //     position: "absolute",
    //     height: windowHeight,
    //     width: windowWidth,
    //   },
      scrollView: {
        marginTop: windowHeight * 0.01,
        marginLeft: windowWidth * 0.08
      },
      row: {
          padding: 10,
          width: 150,
          height: 250
      },
      text: {
          color: "#E0E0E0",
          fontSize: 15
      },
      details: {
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }
})

export default row

