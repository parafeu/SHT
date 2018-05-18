import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home'
import PokemonList from './screens/PokemonList'

const routes = {
    Home: {
        screen: Home
    },
    PokemonList: {
        screen: PokemonList
    }
}

const options = {
    
}

export default createStackNavigator(routes, options);