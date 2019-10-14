import { createAppContainer, createStackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import MainDrawerNavigator from './MainDrawerNavigator'

export default createAppContainer(
  createStackNavigator({
    Main: MainTabNavigator,
  })
)
