import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
})

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Cardápio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="md-beer"
    />
  ),
}

HomeStack.path = ''

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
)

LinksStack.navigationOptions = {
  tabBarLabel: 'Comandas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-paper" />
  ),
}

LinksStack.path = ''

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
)

SettingsStack.navigationOptions = {
  tabBarLabel: 'Sair',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="md-log-out" />
  ),
}

SettingsStack.path = ''

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
})

tabNavigator.path = ''

export default tabNavigator
