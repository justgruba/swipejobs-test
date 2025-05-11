import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { fetchMatchedJobs } from "../api/worker";
import { useQuery } from "@tanstack/react-query";

function HomeScreen() {
    const navigation = useNavigation();
    const { data } = useQuery({
        queryKey: ['matched-jobs'],
        queryFn: () => fetchMatchedJobs('7f90df6e-b832-44e2-b624-3143d428001f')
    });

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