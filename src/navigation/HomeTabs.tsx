import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { Icon } from 'react-native-paper';

export type BottomTabsParamList = {
  Home: undefined;
  Profile: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

const HomeTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{ tabBarActiveTintColor: '#30d4ac', tabBarInactiveTintColor: 'gray' }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source="account" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
export default HomeTabs;
