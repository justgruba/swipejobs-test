import { StyleSheet } from 'react-native';

import { useMutation } from '@tanstack/react-query';
import { Button, Card } from 'react-native-paper';

import { fetchAcceptJob, fetchRejectJob } from '@/api/worker';
import { useJobDetailsContext } from '@/context/JobDetailsContext';
import { useUserContext } from '@/context/UserContext';

export const JobActions = ({ showModal }: { showModal: (message: string) => void }) => {
  const { userId } = useUserContext();
  const {
    job: { jobId },
  } = useJobDetailsContext();

  const { mutate: mutateAccept } = useMutation({
    mutationFn: () => fetchAcceptJob(userId, jobId),
    onSuccess: (data) => showModal(data.message || "Successfully accepted!"),
  });

  const { mutate: mutateReject } = useMutation({
    mutationFn: () => fetchRejectJob(userId, jobId),
    onSuccess: (data) => showModal(data.message || "Successfully rejected!"),
  });

  const handleReject = () => {
    mutateReject();
  };

  const handleAccept = () => {
    mutateAccept();
  };

  return (
    <Card.Actions style={styles.actionContainer}>
      <Button
        mode="outlined"
        textColor="grey"
        buttonColor="white"
        style={styles.button}
        onPress={handleReject}
      >
        No Thanks
      </Button>
      <Button mode="contained" buttonColor="black" style={styles.button} onPress={handleAccept}>
        I'll Take it
      </Button>
    </Card.Actions>
  );
};

const styles = StyleSheet.create({
  actionContainer: { justifyContent: 'space-between' },
  button: { borderRadius: 'none', minWidth: 60},
});
