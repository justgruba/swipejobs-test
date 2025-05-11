import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { fetchAcceptJob, fetchRejectJob } from "../api/worker";
import { useMutation } from "@tanstack/react-query";

function JobDetailsScreen() {
    const navigation = useNavigation();
    const { data: acceptJob, mutate: mutateAccept } = useMutation({
        mutationFn: () => fetchAcceptJob('7f90df6e-b832-44e2-b624-3143d428001f', "5775d8e18a488e6c5bb08333")
    });

    const { data: rejectJob, mutate: mutateReject } = useMutation({
        mutationFn: () => fetchRejectJob('7f90df6e-b832-44e2-b624-3143d428001f', "5775d8e18a488e6c5bb08333")
    });
     console.log(acceptJob);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Job Details Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTabs', {screen: "Home"})}>
          <Text>Move to Jobs List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  mutateReject()}>
          <Text>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => mutateAccept()}>
          <Text>Accept</Text>
        </TouchableOpacity>
      </View>
    );
}

export default JobDetailsScreen;