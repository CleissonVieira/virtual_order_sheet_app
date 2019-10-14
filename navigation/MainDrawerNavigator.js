import { createDrawerNavigator } from 'react-navigation'
import SettingsScreen from '../screens/SettingsScreen'

// export default createDrawerNavigator({
//   SettingsScreen,
// })

export default createDrawerNavigator({
  SettingsScreen: { screen: SettingsScreen }
}, {
  initialRouteName: 'SettingsScreen',
  // contentComponent: ExampleScreen,
  drawerWidth: 300
});
