import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

export type BottomTabsParamList = {
  Home: undefined;
  Profile: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

const HomeTabs = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Profile" component={Profile} />
    </BottomTabs.Navigator>
  );
};

export default HomeTabs;
