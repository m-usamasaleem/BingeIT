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
  email: yup.string().email().required("You Must Provide an Email Address"),
  // phone: yup.string().required("You Must Provide a Phone Number").length(11),
  pass: yup
    .string()
    .required("You Must Choose a Password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "All passwords must contain 8 characters with at least one uppercase letter, at least one lowercase letter, at least one digit and a special character"
    ),
  confirm: yup
    .string()
    .required("You Must Confirm Your Password")
    .oneOf([yup.ref("pass"), null], "Passwords Must Match"),
});
var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
const SignUpForm = (props) => {
  const createTwoButtonAlert = () =>
    Alert.alert("Password Mismach", "Please make sure your passwords match", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <Formik
      initialValues={{ email: "", pass: "", confirm: "" }}
      validationSchema={yupValidationSchema}
      onSubmit={(formData, actions) => {
        console.log("Form Data:", formData);
        let userEmail = formData.email;
        let userPass = formData.pass;
        let userPassconfirm = formData.confirm;
        userEmail = userEmail.replace(/\./g, ",");
        // Deliberating replacing "dots" in the email address with "commas"
        // so to avoid firebase key indexing issues
        console.log(userEmail);

        if (userPassconfirm != userPass) {
          createTwoButtonAlert();
        } else {
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

          //  actions.resetForm();
        }
      }}
    >
      {(formikProps) => {
        return (
          <View style={myStyles.form}>
            <TextInput
              style={[myStyles.inputField, { marginTop: windowHeight * 0.03 }]}
              placeholder="Enter Your New Password"
              onChangeText={formikProps.handleChange("pass")}
              secureTextEntry={true}
              value={formikProps.values.pass}
            />
            <Text style={myStyles.formError}>
              {" "}
              {formikProps.touched.pass && formikProps.errors.pass}{" "}
            </Text>

            <TextInput
              style={[myStyles.inputField, { marginTop: windowHeight * 0.03 }]}
              placeholder="Confirm Your Password"
              onChangeText={formikProps.handleChange("confirm")}
              secureTextEntry={true}
              value={formikProps.values.confirm}
            />
            <Text style={myStyles.formError}>
              {" "}
              {formikProps.touched.confirm && formikProps.errors.confirm}{" "}
            </Text>

            <TouchableOpacity
              style={[
                myStyles.inputField,
                { marginTop: windowHeight * 0.03, backgroundColor: "#e30914" },
              ]}
              onPress={formikProps.handleSubmit}
            >
              <Text style={myStyles.loginText}>Update Password</Text>
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
