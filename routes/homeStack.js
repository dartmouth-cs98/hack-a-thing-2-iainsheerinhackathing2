import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Other from '../screens/other';

const screens = {
    Home: {
        screen: Home
    },
    Other: {
        screen: Other
    }
}


const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);