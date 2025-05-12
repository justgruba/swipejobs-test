import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';
import { Text } from 'react-native-paper';

import Home from '@/screens/Home';
import Profile from '@/screens/Profile';

export type BottomTabsParamList = {
  Home: undefined;
  Profile: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

const HomeTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#30d4ac',
        tabBarInactiveTintColor: 'gray',
        headerStyle: { backgroundColor: 'black' },
        headerTitle: () => (
          <Text variant="headlineLarge" style={styles.text}>
            SwipeJobs
          </Text>
        ),
        headerTitleAlign: 'center',
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Icon source="home" color={color} size={size} />,
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <Icon source="account" color={color} size={size} />,
        }}
      />
    </BottomTabs.Navigator>
  );
};
export default HomeTabs;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
