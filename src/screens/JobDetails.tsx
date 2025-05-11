import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

function JobDetailsScreen() {
    const navigation = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Job Details Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTabs', {screen: "Home"})}>
          <Text>Move to Jobs List</Text>
        </TouchableOpacity>
      </View>
    );
}

export default JobDetailsScreen;