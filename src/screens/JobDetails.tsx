import { View, Text, TouchableOpacity } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import { fetchAcceptJob, fetchRejectJob } from '../api/worker';
import { RootStackParamList } from '../navigation/AppStack';
import { useUserContext } from '../context/UserContext';

function JobDetailsScreen() {
  const navigation = useNavigation();
  const {userId} = useUserContext();
  const route = useRoute<RouteProp<RootStackParamList, 'JobDetails'>>();
  const { job } = route.params;
  console.log(job);
  const { data: acceptJob, mutate: mutateAccept } = useMutation({
    mutationFn: () =>
      fetchAcceptJob(userId, '5775d8e18a488e6c5bb08333'),
  });

  const { data: rejectJob, mutate: mutateReject } = useMutation({
    mutationFn: () =>
      fetchRejectJob(userId, '5775d8e18a488e6c5bb08333'),
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Job Details Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeTabs', { screen: 'Home' })}>
        <Text>Move to Jobs List</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => mutateReject()}>
        <Text>Reject</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => mutateAccept()}>
        <Text>Accept</Text>
      </TouchableOpacity>
    </View>
  );
}
export default JobDetailsScreen;
