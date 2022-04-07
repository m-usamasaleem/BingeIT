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

const settings = (props) => {
    return(
        <React.Fragment>
            <View>
                <Text style={{padding : 40, fontSize: 40}}>
                    Settings
                </Text>
            </View>
        </React.Fragment>
    )
}

export default settings