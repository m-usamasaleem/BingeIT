import { createAppContainer } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from '../components/screens/splash' 
import PreSignIn from '../components/screens/PreSignIn'

const screens = {
    SplashScreen: {
        screen: SplashScreen, 
        navigationOptions: {
            headerShown: false
        }
    },

    PreSignIn: {
        screen: PreSignIn, 
        navigationOptions: {
            headerShown: false
        }
    },
}

const stack = createStackNavigator(screens);
const appContainer = createAppContainer(stack);

export default appContainer
