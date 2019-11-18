import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'
import CreditCardsScreen from '../screens/CreditCardsScreen'

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

///////// Listagem de cartoes - remover depois 
const CreditCardsStack = createStackNavigator(
  {
    CreditCards: CreditCardsScreen,
  },
  config
)
CreditCardsStack.navigationOptions = {
  tabBarLabel: 'Cartões',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="md-beer"
    />
  ),
  header: null,
}

CreditCardsStack.path = ''
///// Listagem de cartoes


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
  CreditCardsStack,
}, {
  header: null,
  headerMode: 'none',
})

tabNavigator.path = ''

export default tabNavigator
