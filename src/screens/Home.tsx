import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

function HomeScreen() {
    const navigation = useNavigation();

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('JobDetails')}>
          <Text>Move to Details</Text>
        </TouchableOpacity>
    </View>
    );
}

export default HomeScreen;