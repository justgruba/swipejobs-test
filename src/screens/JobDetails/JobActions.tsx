import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { Button, Card } from 'react-native-paper';

import { fetchAcceptJob, fetchRejectJob } from '@/api/worker';
import { useJobDetailsContext } from '@/context/JobDetailsContext';
import { useUserContext } from '@/context/UserContext';

export const JobActions = () => {
  const navigation = useNavigation();
  const { userId } = useUserContext();
  const { job } = useJobDetailsContext();

  const { data: acceptJob, mutate: mutateAccept } = useMutation({
    mutationFn: () => fetchAcceptJob(userId, job.jobId),
  });

  const { data: rejectJob, mutate: mutateReject } = useMutation({
    mutationFn: () => fetchRejectJob(userId, job.jobId),
  });

  const handleReject = () => {
    mutateReject();
    navigation.navigate('HomeTabs', { screen: 'Home' });
  };

  const handleAccept = () => {
    mutateAccept();
    navigation.navigate('HomeTabs', { screen: 'Home' });
  };

  return (
    <Card.Actions style={{ justifyContent: 'space-between' }}>
      <Button
        mode="outlined"
        textColor="grey"
        buttonColor="white"
        style={{ borderRadius: 'none', minWidth: 60 }}
        onPress={handleReject}
      >
        No Thanks
      </Button>
      <Button
        mode="contained"
        buttonColor="black"
        style={{ borderRadius: 'none', minWidth: 60 }}
        onPress={handleAccept}
      >
        I'll Take it
      </Button>
    </Card.Actions>
  );
};
