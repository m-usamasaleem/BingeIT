import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import firebase from "./FirebaseInit";

var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
const yupValidationSchema = yup.object({
  email: yup
    .string()
    .email()
    .required("You Must Provide a valid Email Address"),
  // phone: yup.string().required("You Must Provide a Phone Number").length(11),
  pass: yup.string().required("You Must Enter a Password"),
});

const SignUpForm = (props) => {
  const createTwoButtonAlert = () =>
    Alert.alert("Invalid Credentials", "Your email or password is incorrect", [
      {
        text: "Cancel",
        onPress: () => props.navigateTo("PreSignIn"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  return (
    <Formik
      initialValues={{ email: "", pass: "" }}
      validationSchema={yupValidationSchema}
      onSubmit={(formData, actions) => {
        console.log("Form Data:", formData);
        let userEmail = formData.email;
        let userPassword = formData.pass;
        userEmail = userEmail.replace(/\./g, ",");
        // Deliberating replacing "dots" in the email address with "commas"
        // so to avoid firebase key indexing issues
        console.log(userEmail);

        firebase
          .database()
          .ref(`bingeIT/Users/${userEmail}`)
          .once("value", (data) => {
            let firebaseDataString = JSON.stringify(data); // JavaScript object to string
            let firebaseDataJSON = JSON.parse(firebaseDataString); // String to JSON
            console.log(firebaseDataJSON);
            if (firebaseDataJSON) {
              if (firebaseDataJSON.password === userPassword) {
                console.log(
                  `Login Successful .... email and password both match`
                );

                props.navigateTo("Navigator", {
                  userEmail: userEmail,
                });
              } else {
                createTwoButtonAlert();
                console.log(
                  `Login Failed ... email matched but password did not`
                );
              }
            } else {
              createTwoButtonAlert();
              console.log(
                `Login Failed .... email did not match. Did not check password to save time`
              );
            }
          });

        //actions.resetForm();
      }}
    >
      {(formikProps) => {
        return (
          <View style={myStyles.form}>
            <TextInput
              style={[myStyles.inputField, { marginTop: windowHeight * 0.03 }]}
              placeholder="Enter Your Email"
              onChangeText={formikProps.handleChange("email")}
              value={formikProps.values.email}
            />
            <Text style={myStyles.formError}>
              {" "}
              {formikProps.touched.email && formikProps.errors.email}{" "}
            </Text>

            <TextInput
              style={[myStyles.inputField, { marginTop: windowHeight * 0.03 }]}
              placeholder="Enter Your Password"
              secureTextEntry={true}
              onChangeText={formikProps.handleChange("pass")}
              value={formikProps.values.pass}
            />
            <Text style={myStyles.formError}>
              {" "}
              {formikProps.touched.pass && formikProps.errors.pass}{" "}
            </Text>

            <TouchableOpacity
              style={[
                myStyles.inputField,
                { marginTop: windowHeight * 0.03, backgroundColor: "#e30914" },
              ]}
              onPress={formikProps.handleSubmit}
            >
              <Text style={myStyles.loginText}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
};

const myStyles = StyleSheet.create({
  form: {
    textAlign: "center",
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
  continueButton: {
    backgroundColor: "#35b8b6",
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    padding: windowHeight * 0.01,
  },
  formError: {
    color: "red",
    fontSize: 12,
    textAlign: "center",
    marginLeft: windowWidth * 0.1,
    marginRight: windowWidth * 0.1,
  },
});

export default SignUpForm;
