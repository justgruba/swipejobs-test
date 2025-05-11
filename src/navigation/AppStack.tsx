import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { JobListing } from '@/api/types';
import JobDetails from '@/screens/JobDetails/JobDetails';

import HomeTabs, { BottomTabsParamList } from './HomeTabs';

export type RootStackParamList = {
  HomeTabs: NavigatorScreenParams<BottomTabsParamList>;
  JobDetails: { job: JobListing };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="JobDetails" component={JobDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
