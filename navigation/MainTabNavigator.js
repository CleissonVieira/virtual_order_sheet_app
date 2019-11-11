import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: { header: null },
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
  header: null,
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
  header: null,
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
  header: null,
  headerMode: 'none',
}

SettingsStack.path = ''

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
}, {
  header: null,
  headerMode: 'none',
})

tabNavigator.path = ''

export default tabNavigator
