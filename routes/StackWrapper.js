import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "../components/screens/splash";
import PreSignIn from "../components/screens/PreSignIn";
import SignInUser from "../components/screens/SignInUser";
import SignUpUser from "../components/screens/SignUpUser";

const screens = {
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  PreSignIn: {
    screen: PreSignIn,
    navigationOptions: {
      headerShown: false,
    },
  },

  SignInUser: {
    screen: SignInUser,
    navigationOptions: {
      title: "Sign In",
      headerShown: false,
    },
  },
  SignUpUser: {
    screen: SignUpUser,
    navigationOptions: {
      title: "Sign Up",
      headerShown: false,
    },
  },
};

const stack = createStackNavigator(screens);
const appContainer = createAppContainer(stack);

export default appContainer;
