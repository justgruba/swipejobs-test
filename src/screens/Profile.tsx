import { useQuery } from "@tanstack/react-query";
import { View, Text } from "react-native";
import { fetchUserProfile } from "../api/worker";

function ProfileScreen() {
    const { data } = useQuery({
        queryKey: ['profile'],
        queryFn: () => fetchUserProfile('7f90df6e-b832-44e2-b624-3143d428001f')
    });

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
}

export default ProfileScreen;