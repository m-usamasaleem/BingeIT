import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Navigator from "./Navigator";

import SplashScreen from "../components/screens/splash";
import PreSignIn from "../components/screens/PreSignIn";
import SignInUser from "../components/screens/SignInUser";
import SignUpUser1 from "../components/screens/SignUpUser1";
import SignUpUser2 from "../components/screens/SignUpUser2";
import SignUpUser3 from "../components/screens/SignUpUser3";
import SplashScreenSignup from "../components/screens/splashsignup";
import MoviePreview from "../components/screens/MoviePreview";
import HomeScreen from "../components/screens/HomeScreen";
import SettingsScreen from "../components/screens/SettingsScreen";
import RatingReviews from "../components/screens/RatingReviews";
import Suggestions from "../components/screens/Suggestions";
import ChangePassword from "../components/screens/ChangePassword";

const screens = {
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  Suggestions: {
    screen: Suggestions,
    navigationOptions: {
      headerShown: false,
    },
  },
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions: {
      headerShown: false,
    },
  },
  Navigator: {
    screen: Navigator,
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

  MoviePreview: {
    screen: MoviePreview,
    navigationOptions: {
      title: "movie preview",
      headerShown: false,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: "home screen",
      headerShown: false,
    },
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      title: "settings screen",
      headerShown: false,
    },
  },
  RatingReviews: {
    screen: RatingReviews,
    navigationOptions: {
      title: "settings screen",
      headerShown: false,
    },
  },
};

const stack = createStackNavigator(screens);
const appContainer = createAppContainer(stack);

export default appContainer;
