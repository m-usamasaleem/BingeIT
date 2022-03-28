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

const yupValidationSchema = yup.object({
  // email: yup.string().email().required("You Must Provide an Email Address"),
  // phone: yup.string().required("You Must Provide a Phone Number").length(11),
});
var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
const SignUpForm = (props) => {
  return (
    <Formik
      initialValues={{ email: "", phone: "", pass: "", confirm: "" }}
      validationSchema={yupValidationSchema}
      onSubmit={(formData, actions) => {
        console.log("Form Data:", formData);
        let userEmail = formData.email;
        let userPass = formData.pass;
        userEmail = userEmail.replace(/\./g, ",");
        // Deliberating replacing "dots" in the email address with "commas"
        // so to avoid firebase key indexing issues
        console.log(userEmail);

        firebase
          .database()
          .ref(`bingeIT/Users/${userEmail}`)
          .set({
            email: userEmail,
            password: userPass,
          })
          .then(() => {
            console.log(`User Sign Up Successful`);
            props.navigateTo("SignUpUser2");
          })
          .catch(() => {
            console.log(`Oho! User Sign Up Failed ...`);
          });

        actions.resetForm();
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

            <TextInput
              style={[myStyles.inputField, { marginTop: windowHeight * 0.03 }]}
              placeholder="Enter Your Password"
              onChangeText={formikProps.handleChange("pass")}
              secureTextEntry={true}
              value={formikProps.values.pass}
            />

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
  },
});

export default SignUpForm;
