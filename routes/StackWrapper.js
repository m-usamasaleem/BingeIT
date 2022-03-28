import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "../components/screens/splash";
import PreSignIn from "../components/screens/PreSignIn";
import SignInUser from "../components/screens/SignInUser";
import SignUpUser1 from "../components/screens/SignUpUser1";
import SignUpUser2 from "../components/screens/SignUpUser2";
import SignUpUser3 from "../components/screens/SignUpUser3";
import SplashScreenSignup from "../components/screens/splashsignup";

const screens = {
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  SplashScreenSignup: {
    screen: SplashScreenSignup,
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
  SignUpUser1: {
    screen: SignUpUser1,
    navigationOptions: {
      title: "Sign Up",
      headerShown: false,
    },
  },
  SignUpUser2: {
    screen: SignUpUser2,
    navigationOptions: {
      title: "Sign Up",
      headerShown: false,
    },
  },
  SignUpUser3: {
    screen: SignUpUser3,
    navigationOptions: {
      title: "Sign Up",
      headerShown: false,
    },
  },
};

const stack = createStackNavigator(screens);
const appContainer = createAppContainer(stack);

export default appContainer;
