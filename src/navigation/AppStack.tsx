import { StyleSheet } from 'react-native';

import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native-paper';

import { useUserProfile } from '@/hooks/useUserProfile';
import JobDetails from '@/screens/JobDetails/JobDetails';

import HomeTabs, { BottomTabsParamList } from './HomeTabs';

export type RootStackParamList = {
  HomeTabs: NavigatorScreenParams<BottomTabsParamList>;
  JobDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  const { data } = useUserProfile();
  const fullName = data ? `${data.firstName} ${data.lastName}` : '';

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight name={fullName} />,
        }}
      >
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="JobDetails" component={JobDetails} options={{ headerTitle: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderLeft = () => (
  <Text variant="headlineLarge" style={styles.text}>
    SwipeJobs
  </Text>
);

const HeaderRight = ({ name }: { name: string }) => (
  <Text variant="headlineLarge" style={styles.text}>
    {name}
  </Text>
);

export default AppStack;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
