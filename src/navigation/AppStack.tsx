import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs, { BottomTabsParamList } from './HomeTabs';
import JobDetails from '../screens/JobDetails';

export type RootStackParamList = {
    HomeTabs:  NavigatorScreenParams<BottomTabsParamList>;
    JobDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeTabs" component={HomeTabs}  options={{ headerShown: false }} />
                <Stack.Screen name="JobDetails" component={JobDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;